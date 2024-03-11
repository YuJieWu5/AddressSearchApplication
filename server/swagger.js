const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    "openapi": "3.0.0",
    "info": {
      "title": "Address API",
      "version": "1.0.0",
      "description": "API Document for validation address api and searching address"
    },
    "servers": [
      {
        "url": "http://localhost:5000"
      }
    ],
    "paths": {
      "/api/validateAddress": {
        "post": {
          "summary": "Capture a country-specific address",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ValidationRequestBody"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Valid input format",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid Input",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationResponse"
                  }
                }
              }
            }
          }
        }
      },
      "/api/searchAddresses": {
        "post": {
          "summary": "Search addresses in the database, support multiple countries and partial search.",
          "description": "Will automatically pack the user input to the request format then send it to the server.",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchingRequestBody"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Successfully captured the address",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SearchingResponse"
                  }
                }
              }
            },
            "500": {
              "description": "Error occurred on server side, might include DB connection error or any other internal error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SearchingErrorResponse"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "userInput": {
          "type": "object",
          "properties": {
            "FirstName": {
              "type": "string"
            },
            "LastName": {
              "type": "string"
            },
            "City": {
              "type": "string"
            },
            "ZipCode": {
              "type": "string"
            },
            "State": {
              "type": "string"
            },
            "Street": {
              "type": "string"
            }
          }
        },
        "ValidationRequestBody": {
          "type": "object",
          "properties": {
            "countryID": {
              "type": "number"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "selectedSuffix": {
              "type": "string"
            },
            "selectedState": {
              "type": "string"
            },
            "city": {
              "type": "string"
            },
            "aptNum": {
              "type": "number"
            },
            "roomNum": {
              "type": "number"
            },
            "neighborhood": {
              "type": "string"
            },
            "selectedStreetType": {
              "type": "string"
            },
            "streetAddress": {
              "type": "string"
            },
            "postalCode": {
              "type": "string"
            }
          }
        },
        "ValidationResponse": {
          "type": "object",
          "properties": {
            "code": {
              "type": "number"
            },
            "message": {
              "type": "string"
            }
          }
        },
        "SearchingResponse": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "address": {
              "type": "string"
            }
          }
        },
        "SearchingErrorResponse": {
          "type": "object",
          "properties": {
            "status": {
              "type": "number"
            },
            "message": {
              "type": "string"
            }
          }
        },
        "SearchingRequestBody": {
          "type": "object",
          "properties": {
            "SelectedCountries": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "Brazil",
                  "Canada",
                  "Germany",
                  "India",
                  "Japan",
                  "North Korea",
                  "South Korea",
                  "Mexico",
                  "Spain",
                  "UK",
                  "USA"
                ]
              }
            },
            "UserInput": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/userInput"
              }
            }
          }
        }
      }
    }
  }
  

const options = {
swaggerDefinition,
apis: ['./server.js'], 
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;