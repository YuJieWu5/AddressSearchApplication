const CountryFormat = require('../models/searchModel');

// Function to perform address search
exports.performSearch = async (selectedCountries, userInput) => {
    try {
        // Fetch address formats for the selected countries from the database
        const addressFormats = await searchModel.find({ countryCode: { $in: selectedCountries } });

        // Construct MongoDB query based on user input and address formats
        const queryConditions = {};

        // Loop through address formats for selected countries
        addressFormats.forEach(searchModel => {
            // Extract placeholders from the format
            const placeholders = searchModel.format.match(/\{(.*?)\}/g);

            // For each placeholder, check if user input exists and add to the query conditions
            placeholders.forEach(placeholder => {
                const field = placeholder.replace(/[{}]/g, ''); // Remove curly braces from MongoDB storage
                if (userInput[field]) {
                    queryConditions[field] = userInput[field];
                }
            });
        });

        // Execute MongoDB query
        const searchResults = await searchModel.find(queryConditions);

        // Return search results
        return searchResults;
    } catch (error) {
        throw new Error('Error performing search: ' + error.message);
    }
};