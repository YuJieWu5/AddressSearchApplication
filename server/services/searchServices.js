const FormatModel = require('../models/FormatModel');
const DefaultSearchModel = require('../models/DefaultSearchModel');

// Function for retrieving address formats for countries selected
async function getAddressFormats(selectedCountries) {
    try {
        const addressFormats = await FormatModel.find({ countryCode: { $in: selectedCountries } });
        return addressFormats;
    } catch (error) {
        console.error('Error retrieving country address formats:', error);
        throw error;
    }
}

exports.performSearch = async (selectedCountries, userInput) => {
    try {
        let searchResults;

        if (selectedCountries && selectedCountries.length > 0) {
            // Fetch address formats for the selected countries from the database
            const addressFormats = await getAddressFormats(selectedCountries);

            // Construct MongoDB query based on user input and address formats
            const queryConditions = {};

            // Loop through address formats for selected countries
            addressFormats.forEach(format => {
                // Extract placeholders from the format
                const placeholders = format.format.match(/\{(.*?)\}/g);

                // For each placeholder, check if user input exists and add to the query conditions
                placeholders.forEach(placeholder => {
                    const field = placeholder.replace(/[{}]/g, ''); // Remove curly braces from MongoDB storage
                    if (userInput[field]) {
                        // Treat street address, city, province, and postal code as partial matches
                        if (field === 'street_address' || field === 'city' || field === 'state_province' || field === 'postal_code') {
                            queryConditions[field] = { $regex: new RegExp(userInput[field], 'i') };
                        } else {
                            // For name fields, use exact matching
                            queryConditions[field] = userInput[field];
                        }
                    }
                });
            });

            // Execute MongoDB query using DefaultSearchModel
            searchResults = await DefaultSearchModel.find(queryConditions);
        } else {
            // For default search, treat name fields as exact matches
            const defaultSearchConditions = {
                'name.first_name': userInput.first_name,
                'name.last_name': userInput.last_name,
            };

            searchResults = await DefaultSearchModel.find(defaultSearchConditions);
        }

        // Return search results
        return searchResults;
        
    } catch (error) {
        throw new Error('Error performing search: ' + error.message);
    }
};