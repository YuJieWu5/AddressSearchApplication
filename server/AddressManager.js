const { MongoClient, ServerApiVersion } = require('mongodb');
const { addressBR, addressCA, addressDE, addressES, addressIN, addressJP, addressKP, addressKR, addressMX, addressUK, addressUS } = require('./AddressSchemas');

class AddressManager {
    constructor(uri, dbName, collectionName) {
        this.uri = uri;
        this.dbName = dbName;
        this.collectionName = collectionName;
    }

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


    async getAddressByCountry(country) {
        const client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            await client.connect();
            const database = client.db(this.dbName);
            const collection = database.collection(this.collectionName);

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
    }
    
}

function printAddresses(addresses) {
    for (const address of addresses) {
        console.log("address:");
        keys = Object.keys(address);
        for (const key of keys) {
            console.log(`${key}: ${address[key]}`);
        }
        console.log('');
    }
}

const DB_URI = "mongodb+srv://Team9:team9Project@cluster0.o8yccdb.mongodb.net/AddressDatabase?retryWrites=true&w=majority&appName=Cluster0"
const DB_NAME = "AddressDatabase"
const COLLECTION_NAME = "AddressCollections"

// Example usage:
const addressManager = new AddressManager(DB_URI, DB_NAME, COLLECTION_NAME);

// Adding an address from the schema file
addressManager.addAddress(addressUS);

// Getting addresses by country
addressManager.getAddressByCountry('Brazil')
    .then(addresses => {
        // Handle the addresses here
        printAddresses(addresses);
        console.log();
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });

addressManager.getAddressByCountry('USA')
    .then(addresses => {
        // Handle the addresses here
        printAddresses(addresses);
        console.log();
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });

    module.exports = AddressManager;

    /*

    
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Team9:<password>@cluster0.o8yccdb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


*/
