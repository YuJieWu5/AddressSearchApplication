const AddressManager = require('../AddressManager');
const DefaultSearchModel = require('../models/DefaultSearchModel');


const pageSize = 25;


exports.performSearch = async (selectedCountries, userInput, page = 1) => {
    try {
        let searchResults;

        const queryConditions = {};

        // Construct MongoDB query based on user input
        if (userInput.first_name) {
            queryConditions['name.first_name'] = userInput.first_name;
        }
        if (userInput.last_name) {
            queryConditions['name.last_name'] = userInput.last_name;
        }
        if (userInput.street_address) {
            queryConditions['street_address'] = { $regex: new RegExp(userInput.street_address, 'i') };
        }
        if (userInput.city) {
            queryConditions['zone_info.city'] = { $regex: new RegExp(userInput.city, 'i') };
        }
        if (userInput.state_province) {
            queryConditions['zone_info.state_province'] = { $regex: new RegExp(userInput.state_province, 'i') };
        }
        if (userInput.postal_code) {
            queryConditions['zone_info.postal_code'] = { $regex: new RegExp(userInput.postal_code, 'i') };
        }

        // Execute MongoDB query using DefaultSearchModel
        const totalCount = await DefaultSearchModel.countDocuments(queryConditions);
        const totalPages = Math.ceil(totalCount / pageSize);
        const skip = (page - 1) * pageSize;

        searchResults = await DefaultSearchModel.find(queryConditions)
            .skip(skip)
            .limit(pageSize);

        return {
            results: searchResults,
            pagination: {
                totalResults: totalCount,
                totalPages: totalPages,
                currentPage: page
            }
        };
    } catch (error) {
        throw new Error('Error performing search: ' + error.message);
    }
};