const mongoose = require('mongoose');

const unifiedAddressFormat = {
    country: '', // String: Country name
    name: {
        first_name: '', // String: First name
        middle_name: '', // String: Middle name
        last_name: '', // String: Last name
        suffix: '' // String: Suffix (e.g., Jr., Sr.)
    },
    street_address: {
        house_number: '', // String: House number
        street_name: '', // String: Street name
        apt_number: '' // String: Apartment number
    },
    neighborhood: '', // String: Neighborhood or subarea
    city: '', // String: City or town or village
    state_province: '', // String: State or province or ward
    postal_code: '' // String: Postal code
};

module.exports = mongoose.model('defaultSearch', unifiedAddressFormat);