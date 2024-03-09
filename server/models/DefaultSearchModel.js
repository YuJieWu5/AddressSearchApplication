const mongoose = require('mongoose');

const unifiedAddressFormat = {
    country: '', // String: Country name
    name: {
        first_name: '', // String: First name
        last_name: '', // String: Last name
    },
    street_address: {
        house_number: '', // String: House number
        street_name: '', // String: Street name including apartment number if applicable
        apt_number: '', // String: apartment number if available (sometimes has letters)
    },
    zone_info: {
        neighborhood: '', // String: Neighborhood or subarea
        city: '', // String: City or town or village
        state_province: '', // String: State or province or ward
        postal_code: '' // String: Postal code
    }
};

    module.exports = mongoose.model('defaultSearch', unifiedAddressFormat);