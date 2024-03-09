const FormatModel = require('../models/FormatModel');
const DefaultSearch = require('../models/DefaultSearchModel');
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



// Function to perform address search
exports.performSearch = async (selectedCountries, userInput) => {
    try {
        let searchResults;

        if (selectedCountries && selectedCountries.length > 0) {
            // Fetch address formats for the selected countries from the database
            const addressFormats = await getAddressFormats(selectedCountries);

            // Construct MongoDB query based on user input and address formats
            const queryConditions = {};

            // Loop through address formats for selected countries
            addressFormats.forEach(FormatModel => {
                // Extract placeholders from the format
                const placeholders = FormatModel.format.match(/\{(.*?)\}/g);

                // For each placeholder, check if user input exists and add to the query conditions
                placeholders.forEach(placeholder => {
                    const field = placeholder.replace(/[{}]/g, ''); // Remove curly braces from MongoDB storage
                    if (userInput[field]) {
                        queryConditions[field] = userInput[field];
                    }
                });
            });

            // Execute MongoDB query
            searchResults = await searchModel.find(queryConditions);
        } else {
            searchResults = await DefaultSearchModel.find(userInput);
        }

        // Return search results
        return searchResults;
        
    } catch (error) {
        throw new Error('Error performing search: ' + error.message);
    }
};