const addressBR = {
    country: 'Brazil',
    name: {
        first_name: 'John',
        middle_name: 'Doe',
        last_name: 'Smith',
        suffix: 'Jr.'
    },
    street_address: {
        house_number: '123',
        street_name: 'Main St',
        apt_number: 'Apt 456'
    },
    neighborhood: 'Downtown',
    city: 'CityName',
    state: 'ST',
    ZIP_code: '12345'
};

const addressCA = {
    country: 'Canada',
    name: {
        first_name: 'John',
        middle_name: '',
        last_name: 'Doe',
        suffix: ''
    },
    street_address: {
        house_number: '123',
        street_name: 'Main St',
        apt_number: ''
    },
    city: 'CityName',
    province_code: 'ON',
    postal_code: 'A1A 1A1'
};

const addressDE = {
    country: 'Germany',
    postalAddress: {
        namePart: {
            personalPart: '<first-name> | <initial> "."',
            lastName: '<letter> { <letter> | <space> }',
            optSuffixPart: '"Sr." | "Jr." | <roman-numeral> | ""',
            EOL: 'End of Line'
        },
        streetAddress: {
            houseNum: '<number> [ "-" <number> ]',
            streetName: '<name> <street-type>',
            optAptNum: '"Apt" <apt-num> | ""',
            EOL: 'End of Line'
        },
        zipPart: {
            townName: '<name>',
            postalCode: '<digit> <digit> <digit> <digit> <digit>',
            EOL: 'End of Line'
        }
    }
};

const addressES = {
    "country": "Spain",
    "postal-address": {
        "name-part": {
            "personal-part": "<first-name> | <initial> \".\"",
            "last-name": "<name>",
            "opt-suffix-part": "\"Sr.\" | \"Jr.\" | <roman-numeral> | \"\"",
            "EOL": "End of Line"
        },
        "street-address": {
            "house-num": "<number> [ \"-\" <number> ]",
            "street-name": "<name> <street-type>",
            "opt-apt-num": "\"Apt\" <apt-num> | \"\"",
            "EOL": "End of Line"
        },
        "zip-part": {
            "town-name": "<name>",
            "province-code": "\"A Coruña\" | \"Álava\" | ... | \"Zaragoza\"",
            "postal-code": "<digit> <digit> <digit> <digit> <digit>",
            "EOL": "End of Line"
        }
    }
};

const addressIN = {
    country: 'India',
    postalAddress: {
        namePart: {
            personalPart: '<first-name> | <initial> "."',
            lastName: '<letter> { <letter> | <space> }',
            optSuffixPart: '"Sr." | "Jr." | <roman-numeral> | ""',
            EOL: 'End of Line'
        },
        streetAddress: {
            houseNum: '<number> [ "-" <number> ]',
            streetName: '<name> <street-type>',
            optAptNum: '"Apt" <apt-num> | ""',
            EOL: 'End of Line'
        },
        pincodePart: {
            townName: '<name>',
            stateName: '<name>',
            PINcode: '<digit> <digit> <digit> <digit> <digit> <digit>',
            EOL: 'End of Line'
        }
    }
};

const addressJP = {
    country: 'Japan',
    postalAddress: {
        namePart: {
            personalPart: '<first-name> | <initial> "."',
            lastName: '<letter> { <letter> | <space> }',
            optSuffixPart: '"Sr." | "Jr." | <roman-numeral> | ""',
            EOL: 'End of Line'
        },
        streetAddress: {
            houseNum: '<number> [ "-" <number> ]',
            streetName: '<name> <street-type>',
            optAptNum: '"Apt" <apt-num> | ""',
            EOL: 'End of Line'
        },
        zipPart: {
            wardName: '<name>',
            cityName: '<name>',
            ZIPcode: '<digit> <digit> <digit> "-" <digit> <digit> <digit> <digit>',
            EOL: 'End of Line'
        }
    }
};

const addressKP = {
    country: 'North Korea',
    postalAddress: {
        streetAddress: {
            streetName: '<name> <street-type>',
            houseNum: '<number>',
            EOL: 'End of Line'
        },
        townPart: {
            districtName: '<name>',
            EOL: 'End of Line',
            cityName: '<name>'
        }
    }
};

const addressKR = {
    country: 'South Korea',
    postalAddress: {
        namePart: {
            personalPart: '<first-name> | <initial> "."',
            lastName: '<name>',
            optSuffixPart: '"Sr." | "Jr." | <roman-numeral> | ""',
            EOL: 'End of Line'
        },
        streetAddress: {
            houseNum: '<number> [ "-" <number> ]',
            streetName: '<name> <street-type>',
            optAptNum: '"Apt" <apt-num> | ""',
            EOL: 'End of Line'
        },
        zipPart: {
            townName: '<name>',
            provinceCode: '"서울" | "부산" | "인천" | "대구" | "광주" | "대전" | "울산" | "세종" | "경기" | "강원" | "충북" | "충남" | "전북" | "전남" | "경북" | "경남" | "제주"',
            postalCode: '<digit> <digit> <digit> <digit> <digit>',
            EOL: 'End of Line'
        }
    }
};

const addressMX = {
    country: 'Mexico',
    postalAddress: {
        namePart: {
            personalPart: '<first-name> | <initial> "."',
            lastName: '<name>',
            optSuffixPart: '"Sr." | "Jr." | <roman-numeral> | ""',
            EOL: 'End of Line'
        },
        streetAddress: {
            houseNum: '<number> [ "-" <number> ]',
            streetName: '<name> <street-type>',
            optAptNum: '"Apt" <apt-num> | ""',
            EOL: 'End of Line'
        },
        zipPart: {
            townName: '<name>',
            stateCode: '"AG" | "BC" | "BS" | "CM" | "CS" | "CH" | "CL" | "CP" | "DG" | "DF" | "GT" | "GR" | "HG" | "JC" | "MC" | "MN" | "MS" | "NT" | "NL" | "OC" | "PL" | "QT" | "QR" | "SP" | "SL" | "SR" | "TC" | "TS" | "TL" | "VZ" | "YN" | "ZS"',
            postalCode: '<digit> <digit> <digit> <digit> <digit>',
            EOL: 'End of Line'
        }
    }
};

const addressUK = {
    "country": "United Kingdom",
    "postal-address": {
        "name-part": {
            "personal-part": "<first-name> | <initial> \".\"",
            "last-name": "<name>",
            "opt-suffix-part": "\"Sr.\" | \"Jr.\" | <roman-numeral> | \"\"",
            "EOL": "End of Line"
        },
        "street-address": {
            "house-num": "<number> [ \"-\" <number> ]",
            "street-name": "<name> <street-type>",
            "opt-apt-num": "\"Apt\" <apt-num> | \"\"",
            "EOL": "End of Line"
        },
        "zip-part": {
            "town-name": "<name>",
            "postcode": "<outward-code> <space> <inward-code>",
            "EOL": "End of Line"
        }
    }
};

const addressUS = {
    "country": "USA",
    "postal-address": {
        "name-part": {
            "personal-part": "John",
            "last-name": "Doe",
            "opt-suffix-part": "",
            "EOL": true
        },
        "street-address": {
            "house-num": "123",
            "street-name": "Main St",
            "opt-apt-num": "",
            "EOL": true
        },
        "zip-part": {
            "town-name": "Springfield",
            "state-code": "IL",
            "ZIP-code": "62701",
            "EOL": true
        }
    }
}


module.exports = {
    addressBR,
    addressCA,
    addressDE,
    addressES,
    addressIN,
    addressJP,
    addressKP,
    addressKR,
    addressMX,
    addressUK,
    addressUS
};