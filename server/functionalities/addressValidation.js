// Define Brazil BSON schema
const BRSchema = {
  bsonType: "object",
  required: [
    "namePart",
    "streetAddress",
    "neighborhoodPart",
    "cityStateZipPart",
  ],
  properties: {
    namePart: {
      bsonType: "object",
      required: ["firstName", "lastName", "optSuffixPart", "EOL"],
      properties: {
        firstName: {
          bsonType: "string",
          description: "must be a string",
        },
        lastName: {
          bsonType: "string",
          description: "must be a string'",
        },
        optSuffixPart: {
          bsonType: "string",
          pattern: "^(Sr\\.|Jr\\.|Filho|Neto|(?:[IVXLCDM]|(?<![XIV])IX|(?<![XIVL])IV|(?<![XLCDM])XC|(?<![XLCDM])XL|(?<![LCDM])CD|(?<![LCDM])CM)+)$",
          description:
            'must be "Sr." | "Jr." | "Filho" | "Neto" | <roman-numeral> | ""',
        },
      },
    },
    streetAddress: {
      bsonType: "object",
      required: ["houseNum", "streetName", "optAptNum"],
      properties: {
        houseNum: {
          bsonType: "int",
          description: "must be an integer",
        },
        streetName: {
          bsonType: "object",
          required: ["type", "name"],
          properties: {
            type: {
              enum: ["Rua", "Avenida", "Travessa", "Alameda", "Praça", "Largo"],
              description: "must be one of 'Rua', 'Avenida', 'Travessa', 'Alameda', 'Praça', 'Largo'",
            },
            name: {
              bsonType: "string",
              description: "must be a string representing the street name",
            },
          },
        },
        optAptNum: {
          bsonType: "string",
          pattern: "^(Apto \\d+|Sala \\d+|)$",
          description: 'must be either "Apto" followed by a number, "Sala" followed by a number, or an empty string',
        },
      },
    },
    neighborhoodPart: {
      bsonType: "string",
      description: 'must be a string',
      },
    },
    cityStateZipPart: {
      bsonType: "object",
      required: ["cityName", "stateCode", "ZIPCode", "EOL"],
      properties: {
        cityName: {
          bsonType: "string",
          description: "must be a string",
        },
        stateCode: {
          bsonType: "string",
          enum: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
          description: "must be a valid Brazilian state code",
        },        
        zipCode: {
          bsonType: "string",
          pattern: "^[0-9]{5}-[0-9]{3}$",
          description: "must follow the format <digit> <digit> <digit> <digit> <digit> - <digit> <digit> <digit>",
        },        
      },
    },
};

// Define Canada BSON Schema
const CASchema = {
  bsonType: "object",
  required: ["name", "street_address", "city", "province_code", "postal_code"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be Canada",
      enum: ["Canada"],
    },
    name: {
      bsonType: "object",
      required: ["first_name", "last_name"],
      properties: {
        first_name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        middle_name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        last_name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        suffix: {
          bsonType: "string",
          description: "must be a string",
        },
      },
    },
    street_address: {
      bsonType: "object",
      required: ["house_number", "street_name"],
      properties: {
        house_number: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        street_name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        apt_number: {
          bsonType: "string",
          description: "must be a string",
        },
      },
    },
    city: {
      bsonType: "string",
      description: "must be a string and is required",
    },
    province_code: {
      bsonType: "string",
      description:
        "must be a string representing a valid Canadian province code (2 uppercase letters)",
      pattern: "^[ABBCDEGHJKLMNPRSTVXY]{2}$",
    },
    postal_code: {
      bsonType: "string",
      description:
        "must be a string representing a valid Canadian postal code (A1A 1A1 format)",
      pattern: "^[A-Za-z]\\d[A-Za-z] \\d[A-Za-z]\\d$",
    },
  },
};

// Define Germany BSON Schema
const DESchema = {
  bsonType: "object",
  required: ["postalAddress"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be 'Germany'",
      enum: ["Germany"],
    },
    postalAddress: {
      bsonType: "object",
      required: ["namePart", "streetAddress", "zipPart"],
      properties: {
        namePart: {
          bsonType: "object",
          required: ["personalPart", "lastName", "optSuffixPart", "EOL"],
          properties: {
            personalPart: {
              bsonType: "string",
              description: "must be a string",
            },
            lastName: {
              bsonType: "string",
              description: "must be a string",
            },
            optSuffixPart: {
              bsonType: "string",
              description: 'must be \'"Sr." | "Jr." | <roman-numeral> | ""\'',
            },
          },
        },
        streetAddress: {
          bsonType: "object",
          required: ["houseNum", "streetName", "optAptNum", "EOL"],
          properties: {
            houseNum: {
              bsonType: "string",
              description: "must be '<number> [ \"-\" <number> ]'",
            },
            streetName: {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
            optAptNum: {
              bsonType: "string",
              description: 'must be \'"Apt" <apt-num> | ""\'',
            },
          },
        },
        zipPart: {
          bsonType: "object",
          required: ["townName", "postalCode", "EOL"],
          properties: {
            townName: { bsonType: "string", description: "must be '<name>'" },
            postalCode: {
              bsonType: "string",
              description: "must be '<digit> <digit> <digit> <digit> <digit>'",
            },
          },
        },
      },
    },
  },
};

// Define Spain BSON Schema
const ESSchema = {
  bsonType: "object",
  required: ["postal-address"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be Spain",
      enum: ["Spain"],
    },
    postalAddress: {
      bsonType: "object",
      required: ["namePart", "streetAddress", "zipPart"],
      properties: {
        namePart: {
          bsonType: "object",
          required: ["personalPart", "lastName", "optSuffixPart", "EOL"],
          properties: {
            personalPart: {
              bsonType: "string",
              description: "must be <first-name> | <initial> '.'",
            },
            lastName: {
              bsonType: "string",
              description: "must be <letter> { <letter> | <space> }",
            },
            optSuffixPart: {
              bsonType: "string",
              description: 'must be "Sr." | "Jr." | <roman-numeral> | ""',
            },
          },
        },
        streetAddress: {
          bsonType: "object",
          required: ["houseNum", "streetName", "optAptNum", "EOL"],
          properties: {
            houseNum: {
              bsonType: "string",
              description: 'must be "<number> [ "-" <number> ]"',
            },
            streetName: {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
            optAptNum: {
              bsonType: "string",
              description: 'must be "Apt" <apt-num> | ""',
            },
          },
        },
        zipPart: {
          bsonType: "object",
          required: ["townName", "postalCode", "EOL"],
          properties: {
            townName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            postalCode: {
              bsonType: "string",
              description: "must be '<digit> <digit> <digit> <digit> <digit>'",
            },
          },
        },
      },
    },
  },
};

// Define India BSON file
const INSchema = {
  bsonType: "object",
  required: ["postalAddress"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be India",
      enum: ["India"],
    },
    postalAddress: {
      bsonType: "object",
      required: ["namePart", "streetAddress", "pincodePart"],
      properties: {
        namePart: {
          bsonType: "object",
          required: ["personalPart", "lastName", "optSuffixPart", "EOL"],
          properties: {
            personalPart: {
              bsonType: "string",
              description: "must be <first-name> | <initial> '.'",
            },
            lastName: {
              bsonType: "string",
              description: "must be '<letter> { <letter> | <space> }'",
            },
            optSuffixPart: {
              bsonType: "string",
              description: 'must be "Sr." | "Jr." | <roman-numeral> | ""',
            },
          },
        },
        streetAddress: {
          bsonType: "object",
          required: ["houseNum", "streetName", "optAptNum", "EOL"],
          properties: {
            houseNum: {
              bsonType: "string",
              description: 'must be "<number> [ "-" <number> ]"',
            },
            streetName: {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
            optAptNum: {
              bsonType: "string",
              description: 'must be "Apt" <apt-num> | ""',
            },
          },
        },
        pincodePart: {
          bsonType: "object",
          required: ["townName", "stateName", "PINcode", "EOL"],
          properties: {
            townName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            stateName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            PINcode: {
              bsonType: "string",
              description:
                "must be '<digit> <digit> <digit> <digit> <digit> <digit>'",
            },
          },
        },
      },
    },
  },
};

// Define Japan BSON file
const JPSchema = {
  bsonType: "object",
  required: ["postalAddress"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be Japan",
      enum: ["Japan"],
    },
    postalAddress: {
      bsonType: "object",
      required: ["namePart", "streetAddress", "zipPart"],
      properties: {
        namePart: {
          bsonType: "object",
          required: ["personalPart", "lastName", "optSuffixPart", "EOL"],
          properties: {
            personalPart: {
              bsonType: "string",
              description: "must be <first-name> | <initial> '.'",
            },
            lastName: {
              bsonType: "string",
              description: "must be '<letter> { <letter> | <space> }'",
            },
            optSuffixPart: {
              bsonType: "string",
              description: 'must be "Sr." | "Jr." | <roman-numeral> | ""',
            },
          },
        },
        streetAddress: {
          bsonType: "object",
          required: ["houseNum", "streetName", "optAptNum", "EOL"],
          properties: {
            houseNum: {
              bsonType: "string",
              description: 'must be "<number> [ "-" <number> ]"',
            },
            streetName: {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
            optAptNum: {
              bsonType: "string",
              description: 'must be "Apt" <apt-num> | ""',
            },
          },
        },
        zipPart: {
          bsonType: "object",
          required: ["wardName", "cityName", "ZIPcode", "EOL"],
          properties: {
            wardName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            cityName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            ZIPcode: {
              bsonType: "string",
              description:
                'must be "<digit> <digit> <digit> "-" <digit> <digit> <digit> <digit>"',
            },
          },
        },
      },
    },
  },
};

// Define North Korea BSON file
const KPSchema = {
  bsonType: "object",
  required: ["postalAddress"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be North Korea",
      enum: ["North Korea"],
    },
    postalAddress: {
      bsonType: "object",
      required: ["streetAddress", "townPart"],
      properties: {
        streetAddress: {
          bsonType: "object",
          required: ["houseNum", "streetName", "EOL"],
          properties: {
            houseNum: {
              bsonType: "string",
              description: "must be '<number>'",
            },
            streetName: {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
          },
        },
        townPart: {
          bsonType: "object",
          required: ["districtName", "cityName", "EOL"],
          properties: {
            districtName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            cityName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
          },
        },
      },
    },
  },
};

// Define South Korea BSON file
const KRSchema = {
  bsonType: "object",
  required: ["postalAddress"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be South Korea",
      enum: ["South Korea"],
    },
    postalAddress: {
      bsonType: "object",
      required: ["namePart", "streetAddress", "zipPart"],
      properties: {
        namePart: {
          bsonType: "object",
          required: ["personalPart", "lastName", "optSuffixPart", "EOL"],
          properties: {
            personalPart: {
              bsonType: "string",
              description: "must be '<first-name> | <initial> '.'",
            },
            lastName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            optSuffixPart: {
              bsonType: "string",
              description: 'must be "Sr." | "Jr." | <roman-numeral> | ""',
            },
          },
        },
        streetAddress: {
          bsonType: "object",
          required: ["houseNum", "streetName", "optAptNum", "EOL"],
          properties: {
            houseNum: {
              bsonType: "string",
              description: 'must be "<number> [ "-" <number> ]"',
            },
            streetName: {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
            optAptNum: {
              bsonType: "string",
              description: 'must be "Apt" <apt-num> | ""',
            },
          },
        },
        zipPart: {
          bsonType: "object",
          required: ["townName", "provinceCode", "postalCode", "EOL"],
          properties: {
            townName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            provinceCode: {
              bsonType: "string",
              description: "must be one of the province codes",
            },
            postalCode: {
              bsonType: "string",
              description: 'must be "<digit> <digit> <digit> <digit> <digit>"',
            },
          },
        },
      },
    },
  },
};

// Define Mexico BSON file
const MXSchema = {
  bsonType: "object",
  required: ["postalAddress"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be Mexico",
      enum: ["Mexico"],
    },
    postalAddress: {
      bsonType: "object",
      required: ["namePart", "streetAddress", "zipPart"],
      properties: {
        namePart: {
          bsonType: "object",
          required: ["personalPart", "lastName", "optSuffixPart", "EOL"],
          properties: {
            personalPart: {
              bsonType: "string",
              description: "must be '<first-name> | <initial> '.'",
            },
            lastName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            optSuffixPart: {
              bsonType: "string",
              description: 'must be "Sr." | "Jr." | <roman-numeral> | ""',
            },
          },
        },
        streetAddress: {
          bsonType: "object",
          required: ["houseNum", "streetName", "optAptNum", "EOL"],
          properties: {
            houseNum: {
              bsonType: "string",
              description: 'must be "<number> [ "-" <number> ]"',
            },
            streetName: {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
            optAptNum: {
              bsonType: "string",
              description: 'must be "Apt" <apt-num> | ""',
            },
          },
        },
        zipPart: {
          bsonType: "object",
          required: ["townName", "stateCode", "postalCode", "EOL"],
          properties: {
            townName: {
              bsonType: "string",
              description: "must be '<name>'",
            },
            stateCode: {
              bsonType: "string",
              description: "must be one of the state codes",
            },
            postalCode: {
              bsonType: "string",
              description: 'must be "<digit> <digit> <digit> <digit> <digit>"',
            },
          },
        },
      },
    },
  },
};

// Define UK BSON file
const UKSchema = {
  bsonType: "object",
  required: ["postal-address"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be United Kingdom",
      enum: ["United Kingdom"],
    },
    "postal-address": {
      bsonType: "object",
      required: ["name-part", "street-address", "zip-part"],
      properties: {
        "name-part": {
          bsonType: "object",
          required: ["personal-part", "last-name", "opt-suffix-part", "EOL"],
          properties: {
            "personal-part": {
              bsonType: "string",
              description: "must be '<first-name> | <initial> '.'",
            },
            "last-name": {
              bsonType: "string",
              description: "must be '<name>'",
            },
            "opt-suffix-part": {
              bsonType: "string",
              description: 'must be "Sr." | "Jr." | <roman-numeral> | ""',
            },
          },
        },
        "street-address": {
          bsonType: "object",
          required: ["house-num", "street-name", "opt-apt-num", "EOL"],
          properties: {
            "house-num": {
              bsonType: "string",
              description: 'must be "<number> [ "-" <number> ]"',
            },
            "street-name": {
              bsonType: "string",
              description: "must be '<name> <street-type>'",
            },
            "opt-apt-num": {
              bsonType: "string",
              description: 'must be "Apt" <apt-num> | ""',
            },
          },
        },
        "zip-part": {
          bsonType: "object",
          required: ["town-name", "postcode", "EOL"],
          properties: {
            "town-name": {
              bsonType: "string",
              description: "must be '<name>'",
            },
            postcode: {
              bsonType: "string",
              description: "must be '<outward-code> <space> <inward-code>'",
            },
          },
        },
      },
    },
  },
};

// Define US BSON Schema
const USSchema = {
  bsonType: "object",
  required: ["postal-address"],
  properties: {
    country: {
      bsonType: "string",
      description: "must be USA",
      enum: ["USA"],
    },
    "postal-address": {
      bsonType: "object",
      required: ["name-part", "street-address", "zip-part"],
      properties: {
        "name-part": {
          bsonType: "object",
          required: ["personal-part", "last-name", "opt-suffix-part", "EOL"],
          properties: {
            "personal-part": {
              bsonType: "string",
              description: "must be 'John'",
            },
            "last-name": {
              bsonType: "string",
              description: "must be 'Doe'",
            },
            "opt-suffix-part": {
              bsonType: "string",
              description: 'must be ""',
            },
          },
        },
        "street-address": {
          bsonType: "object",
          required: ["house-num", "street-name", "opt-apt-num", "EOL"],
          properties: {
            "house-num": {
              bsonType: "string",
              description: 'must be "123"',
            },
            "street-name": {
              bsonType: "string",
              description: 'must be "Main St"',
            },
            "opt-apt-num": {
              bsonType: "string",
              description: 'must be ""',
            },
          },
        },
        "zip-part": {
          bsonType: "object",
          required: ["town-name", "state-code", "ZIP-code", "EOL"],
          properties: {
            "town-name": {
              bsonType: "string",
              description: 'must be "Springfield"',
            },
            "state-code": {
              bsonType: "string",
              description: 'must be "IL"',
            },
            "ZIP-code": {
              bsonType: "string",
              description: 'must be "62701"',
            },
          },
        },
      },
    },
  },
};

module.exports = {
  BRSchema,
  CASchema,
  DESchema,
  ESSchema,
  INSchema,
  JPSchema,
  KPSchema,
  KRSchema,
  MXSchema,
  UKSchema,
  USSchema,
};