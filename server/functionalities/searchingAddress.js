const { MongoClient } = require('mongodb');

const DB_URI = "mongodb+srv://Team9:team9Project@cluster0.o8yccdb.mongodb.net/AddressDatabase?retryWrites=true&w=majority&appName=Cluster0";
const DB_NAME = "AddressDatabase";
const COLLECTION_NAME = "AddressCollections";

const client = new MongoClient(DB_URI);

async function searchingAddress(form) {
    try {
        await client.connect();
        console.log("Connected successfully to database");

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Constructing the query for AND relationship
        let query = {};

        if (form.SelectedCountries.length > 0) {
            query.country = { $in: form.SelectedCountries };
        }

        if (form.UserInput.FirstName) {
            query["name.first_name"] = { $regex: new RegExp(form.UserInput.FirstName, 'i') };
        }

        if (form.UserInput.LastName) {
            query["name.last_name"] = { $regex: new RegExp(form.UserInput.LastName, 'i') };
        }

        if (form.UserInput.City) {
            query["zone_info.city"] = { $regex: new RegExp(form.UserInput.City, 'i') };
        }

        if (form.UserInput.ZipCode) {
            query["zone_info.postal_code"] = { $regex: new RegExp(form.UserInput.ZipCode, 'i') };
        }

        if (form.UserInput.State) {
            query["zone_info.state_province"] = { $regex: new RegExp(form.UserInput.State, 'i') };
        }

        if (form.UserInput.Street) {
            query.$and = [
                { "street_address.house_number": { $regex: new RegExp(form.UserInput.Street, 'i') } },
                { "street_address.street_name": { $regex: new RegExp(form.UserInput.Street, 'i') } },
                { "street_address.apt_number": { $regex: new RegExp(form.UserInput.Street, 'i') } }
            ];
        }

        const documents = await collection.find(query).toArray();

        //format the document, build the address string
        if(documents.length>0){
            const formattedDocuments = documents.map(doc => ({
                name: `${doc.name.first_name} ${doc.name.last_name}`,
                address: `${doc.street_address.house_number} ${doc.street_address.street_name} ${doc.street_address.apt_number ? doc.street_address.apt_number + ' ' : ''}${doc.zone_info.neighborhood} ${doc.zone_info.city} ${doc.zone_info.state_province} ${doc.zone_info.postal_code} ${doc.country}`
            }));
    
            console.log(formattedDocuments);
            return formattedDocuments;
        }else{
            const formattedDocuments = [{name: "No matching address", address: ""}];
            console.log(formattedDocuments);
            return formattedDocuments;
        }
        
    } catch (error) {
        console.error("Error connecting to the database: ", error);
        throw error; 
    } finally {
        await client.close();
    }
};

// Example form data
// const form = {
//     "SelectedCountries": ["Canada"],
//     "UserInput": {
//         "FirstName": "David",
//         "LastName": "Johnson",
//         "City": "Vancouver",
//         "ZipCode": "V6E",
//         "State": "British Columbia",
//         "Street": "Oak"
//     }
// };
const form = {
        "SelectedCountries": ['Canada','Japan'],
        "UserInput":{
            "FirstName": "",
            "LastName": "",
            "City": "Mont",
            "ZipCode": "H2",
            "State": "",
            "Street": ""
        }
}

// main(form);


module.exports = { searchingAddress };
