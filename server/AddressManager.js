const { MongoClient } = require('mongodb');
const { addressBR, addressCA, addressDE, addressES, addressIN, addressJP, addressKP, addressKR, addressMX, addressUK, addressUS } = require('./AddressSchemas');

class AddressManager {
    constructor(uri, dbName, collectionName) {
        this.uri = uri;
        this.dbName = dbName;
        this.collectionName = collectionName;
    }

    async addAddress(address) {
        const client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            await client.connect();
            const database = client.db(this.dbName);
            const collection = database.collection(this.collectionName);

            // Create an index on the 'country' field
            await collection.createIndex({ country: 1 });

            // Insert the address document
            await collection.insertOne(address);
            console.log('Address added successfully!');
        } catch (error) {
            console.error('Error adding address:', error);
        } finally {
            await client.close();
        }
    }


    
}
/*
async function getAddressByCountry(country) {
    const client = new MongoClient(this.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db(this.DB_NAME);
        const collection = database.collection(this.COLLECTION_NAME);

        // Find addresses based on country
        const addresses = await collection.find({ country: country }).toArray();
        console.log('Addresses:', addresses);

        // Return the addresses
        return addresses;
    } catch (error) {
        console.error('Error getting addresses:', error);
        // If an error occurs, return null or throw the error
        return null; // or throw error;
    } finally {
        await client.close();
    }
}*/

const DB_URI = "mongodb://localhost:27017"
const DB_NAME = "local"
const COLLECTION_NAME = "Addresses"

// Example usage:
const addressManager = new AddressManager(DB_URI, DB_NAME, COLLECTION_NAME);

// Adding an address from the schema file
//addressManager.addAddress(addressBR);

// Getting addresses by country
//console.log(addressManager.getAddressByCountry('Brazil'));
/*getAddressByCountry('Brazil')
    .then(addresses => {
        // Handle the addresses here
        console.log('Addresses:', addresses);
        console.log();
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });
console.log();*/