const { MongoClient, ServerApiVersion } = require('mongodb');
const { addressBR, addressCA, addressDE, addressES, addressIN, addressJP, addressKP, addressKR, addressMX, addressUK, addressUS } = require('./AddressSchemas');

// Manages adding addresses and checking address information
class AddressManager {
    constructor(uri, dbName, collectionName) {
        this.uri = uri;
        this.dbName = dbName;
        this.collectionName = collectionName;
    }

    // Adds address to database
    async addAddress(address) {
        const client = new MongoClient(this.uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        try {
            await client.connect();
            const database = client.db(this.dbName);
            const collection = database.collection(this.collectionName);
            await collection.createIndex({ country: 1 });
            await collection.insertOne(address);
            console.log('Address added successfully!');
        } catch (error) {
            console.error('Error adding address:', error);
        } finally {
            await client.close();
        }
    }

    // retrieves addresses stored under a specific country
    async getAddressByCountry(country) {
        const client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            await client.connect();
            const database = client.db(this.dbName);
            const collection = database.collection(this.collectionName);
            const addresses = await collection.find({ country: country }).toArray();
            console.log('Addresses:', addresses);
            return addresses;
        } catch (error) {
            console.error('Error getting addresses:', error);
            return null;
        } finally {
            await client.close();
        }
    }

    // retrieves addresses from a country and returns them in an array format
    async getAddressDictByCountry(country) {
        const client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            await client.connect();
            const database = client.db(this.dbName);
            const collection = database.collection(this.collectionName);
            const addresses = await collection.find({ country: country }).toArray();
            console.log('Addresses:', addresses);
            const addressDicts = addresses.map(address => {
                const addressDict = {};
                for (const key in address) {
                    addressDict[key] = address[key];
                }
                return addressDict;
            });
            return addressDicts;
        } catch (error) {
            console.error('Error getting addresses:', error);
            return null;
        } finally {
            await client.close();
        }
    }

    // checks if the given state, province, etc. is present in the CountryInfo database under the given country
    async stateExists(state, provStatePref) {
        const client = new MongoClient(this.uri);

        try {
            await client.connect();
            console.log('Connected to the database');

            const db = client.db(this.dbName);
            const collection = db.collection(this.collectionName);

            const document = await collection.findOne({});
            var isPresent = false;
            if (!document) {
                console.log('Document not found');
                return;
            }

            if (provStatePref == "states") {
                if (!document.states || !Array.isArray(document.states)) {
                    console.log('States array not found or not an array in the document');
                    return;
                }
                else {
                    isPresent = document.states.includes(state);
                    console.log(`Is ${state} present in states? ${isPresent}`);
                }
            }
            else if (provStatePref == "provinces") {
                if (!document.provinces || !Array.isArray(document.provinces)) {
                    console.log('Provinces array not found or not an array in the document');
                    return;
                }
                else {
                    isPresent = document.provinces.includes(state);
                    console.log(`Is ${state} present in provinces? ${isPresent}`);
                }
            }
            else if (provStatePref == "prefectures") {
                if (!document.provinces || !Array.isArray(document.prefectures)) {
                    console.log('Prefectures array not found or not an array in the document');
                    return;
                }
                else {
                    isPresent = document.prefectures.includes(state);
                    console.log(`Is ${state} present in prefectures? ${isPresent}`);
                }
            }
            else if (provStatePref == "constituent-countries") {
                if (!document.provinces || !Array.isArray(document.prefectures)) {
                    console.log('Constituent-countries array not found or not an array in the document');
                    return;
                }
                else {
                    isPresent = document.prefectures.includes(state);
                    console.log(`Is ${state} present in constituent-countries? ${isPresent}`);
                }
            }
            else {
                console.log('Array not found or not an array in the document');
                return;
            }
            
            await client.close();
            console.log('Connection closed');
            return isPresent;
        } catch (error) {
            console.error('Error:', error);
            return;
        }
    }

    // checks if the given city is present in the CountryInfo database under the given country
    async cityExists(cityName) {
        const client = new MongoClient(this.uri);

        try {
            await client.connect();
            console.log('Connected to the database');

            const db = client.db(this.dbName);
            const collection = db.collection(this.collectionName);

            const document = await collection.findOne({});
            if (!document) {
                console.log('Document not found');
                return;
            }

            if (!document.cities || !Array.isArray(document.cities)) {
                console.log('Cities array not found or not an array in the document');
                return;
            }

            const isPresent = document.cities.includes(cityName);
            console.log(`Is ${cityName} present in cities? ${isPresent}`);

            await client.close();
            console.log('Connection closed');
            return isPresent;
        } catch (error) {
            console.error('Error:', error);
            return;
        }
    }

    // checks if the given neighborhood is present in the CountryInfo database under the given country
    async neighborhoodExists(neighborhoodName) {
        const client = new MongoClient(this.uri);

        try {
            await client.connect();
            console.log('Connected to the database');

            const db = client.db(this.dbName);
            const collection = db.collection(this.collectionName);

            const document = await collection.findOne({});
            if (!document) {
                console.log('Document not found');
                return;
            }

            if (!document.cities || !Array.isArray(document.neighborhoods)) {
                console.log('Neighborhoods array not found or not an array in the document');
                return;
            }

            const isPresent = document.neighborhoods.includes(neighborhoodName);
            console.log(`Is ${neighborhoodName} present in neighborhoods? ${isPresent}`);

            await client.close();
            console.log('Connection closed');
            return isPresent;
        } catch (error) {
            console.error('Error:', error);
            return;
        }
    }

    // retrieves the keys used in the dictionary format object returned from the database given as a parameter
    async getKeys(addresses) {
        if (addresses.length === 0) {
            console.error('Addresses array is empty.');
            return [];
        }
        const firstAddress = addresses[0];
        const keys = Object.keys(firstAddress);
        return keys;
    }

    // checks if the country is supported
    async countryExists(country) {
        return (country == "Brazil" || country == "Candada" || country == "Germany" || country == "Spain" || country == "India" || country == "Japan" || country == "North Korea" || country == "South Korea" || country == "Mexico" || country == "United Kingdom" || country == " United States");
    }

    // prints the object returned from the database given as a parameter
    async printAddresses(addresses) {
        for (const address of addresses) {
            console.log("address:");
            const keys = Object.keys(address);
            for (const key of keys) {
                console.log(`${key}: ${address[key]}`);
            }
            console.log('');
        }
    }
}

// Manages checking the information of countries to verify addresses
class InfoManager {
    constructor() {
        this.DB_URI = "mongodb+srv://Team9:team9Project@cluster0.o8yccdb.mongodb.net/AddressDatabase?retryWrites=true&w=majority&appName=Cluster0"
        this.DB_NAME = "CountryInfo";
    }

    // gets the collection name given the country being accessed
    async getCollectionName(country) {
        let COLLECTION_NAME = null;
        if (country == "Brazil") COLLECTION_NAME = "InfoBR";
        else if (country == "Canada") COLLECTION_NAME = "InfoCA";
        else if (country == "Germany") COLLECTION_NAME = "InfoDE";
        else if (country == "Spain") COLLECTION_NAME = "InfoES";
        else if (country == "India") COLLECTION_NAME = "InfoIN";
        else if (country == "Japan") COLLECTION_NAME = "InfoJP";
        else if (country == "North Korea") COLLECTION_NAME = "InfoKP";
        else if (country == "South Korea") COLLECTION_NAME = "InfoKR";
        else if (country == "Mexico") COLLECTION_NAME = "InfoMX";
        else if (country == "United Kingdom") COLLECTION_NAME = "InfoUK";
        else if (country == "United States") COLLECTION_NAME = "InfoUS";
        return COLLECTION_NAME
    }

    // determines the correct region type and calls getCollectionName to create an AddressManager to check if the region type's name is present in the database
    async checkProvStatePref(country, state) {
        const COLLECTION_NAME = await this.getCollectionName(country);
        if (COLLECTION_NAME != null) {
            
            let provStatePref = null;
            if (country == "Brazil") provStatePref = "provinces";
            else if (country == "Canada") provStatePref = "provinces";
            else if (country == "Germany") provStatePref = "provinces";
            else if (country == "Spain") provStatePref = "provinces";
            else if (country == "India") provStatePref = "provinces";
            else if (country == "Japan") provStatePref = "prefectures";
            else if (country == "North Korea") provStatePref = "provinces";
            else if (country == "South Korea") provStatePref = "provinces";
            else if (country == "Mexico") provStatePref = "states";
            else if (country == "United Kingdom") provStatePref = "constituent-countries";
            else if (country == "United States") provStatePref = "states";

            const addressManager = new AddressManager(this.DB_URI, this.DB_NAME, COLLECTION_NAME);
            return await addressManager.stateExists(state, provStatePref);
            
        }
        return false;
    }

    // calls getCollectionName to create an AddressManager to check if the city's name is present in the database
    async checkCity(country, city) {
        const COLLECTION_NAME = await this.getCollectionName(country);
        if (COLLECTION_NAME != null) {
            const addressManager = new AddressManager(this.DB_URI, this.DB_NAME, COLLECTION_NAME);
            return await addressManager.cityExists(city);
        }
        return false;
    }

    // calls getCollectionName to create an AddressManager to check if the neighborhood's name is present in the database
    async checkNeighborhood(country, neighborhood) {
        const COLLECTION_NAME = await this.getCollectionName(country);
        if (COLLECTION_NAME != null) {
            const addressManager = new AddressManager(this.DB_URI, this.DB_NAME, COLLECTION_NAME);
            return addressManager.neighborhoodExists(neighborhood);
        }
        return false;
    }
}
module.exports = [
    AddressManager,
    InfoManager
];

//------------------------------------------------------------------------------------------------------
//                                   Examples of how to use InfoManager
//------------------------------------------------------------------------------------------------------

/*
infoManager = new InfoManager();
(async () => {
    infoManager = new InfoManager();
    const stateExists = await infoManager.checkState("Spain", "Barcelona");
    console.log(stateExists);
})();

(async () => {
    infoManager = new InfoManager();
    const stateExists = await infoManager.checkCity("Spain", "Barcelona");
    console.log(stateExists);
})();

(async () => {
    infoManager = new InfoManager();
    const stateExists = await infoManager.checkNeighborhood("United States", "Down");
    console.log(stateExists);
})();
*/

//------------------------------------------------------------------------------------------------------
//                             Examples of how to use AddressManager
//------------------------------------------------------------------------------------------------------

// Adding an address from the schema file
//addressManager.addAddress(addressUS);

/*addressManager.getAddressByCountry('USA')
    .then(addresses => {
        console.log(typeof addresses); // This line seems redundant, it's already an array
        console.log(addresses); // Log the resolved value (array of addresses)
        addressManager.getKeys(addresses)
            .then(keys => {
                console.log(keys); // Log the keys of the first address dictionary
            });
        console.log();
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });

// Getting addresses by country
addressManager.getAddressByCountry('Brazil')
    .then(addresses => {
        // Handle the addresses here
        console.log(typeof addresses);
        addressManager.printAddresses(addresses);
        console.log();
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });

addressManager.getAddressByCountry('USA')
    .then(addresses => {
        // Handle the addresses here
        addressManager.printAddresses(addresses);
        console.log();
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });*/
