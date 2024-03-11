const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const cors = require("cors");

const Ajv = require("ajv");

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


require("dotenv").config();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

const {
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
} = require("./functionalities/addressValidation.js");

const { searchingAddress } = require('./functionalities/searchingAddress.js');

const ajv = new Ajv();

// Express route to validate an address
app.post("/api/validateAddress", (req, res) => {
  const data = req.body;
  console.log("Received data:", data); // Log received data
  // Validation format function
  let validate;

  switch (data.countryID) {
    case 0:
      // Brazil address validation
      validate = ajv.compile(BRSchema);
      break;
    case 1:
      // Canada address validation
      validate = ajv.compile(CASchema);
      break;
    case 2:
      // Germany address validation
      validate = ajv.compile(DESchema);
      break;
    case 3:
      // Spain address validation
      validate = ajv.compile(ESSchema);
      break;
    case 4:
      // India address validation
      validate = ajv.compile(INSchema);
      break;
    case 5:
      // Japan address validation
      validate = ajv.compile(JPSchema);
      break;
    case 6:
      // North Korea address validation
      validate = ajv.compile(KPSchema);
      break;
    case 7:
      // South Korea address validation
      validate = ajv.compile(KRSchema);
      break;
    case 8:
      // Mexico address validation
      validate = ajv.compile(MXSchema);
      break;
    case 9:
      // UK address validation
      validate = ajv.compile(UKSchema);
      break;
    case 10:
      // US address validation
      validate = ajv.compile(USSchema);
      break;
    default:
      throw new Error("Invalid country ID");
  }

  const isValid = validate(data);
  if (isValid) {
    console.log("Data is valid");
    res.status(200).send({ message: "Address is valid" });
  } else {
    console.log("Data is not valid");
    console.log(validate.errors);
    res.status(400).send({ message: "Invalid address format." });
  }
});

app.post('/api/searchAddresses', async (req, res) => {
  try{
    const form = req.body;
    const results = await searchingAddress(form);
    res.json(results);
  }catch (error){
    console.error("Error connecting to the database: ", error);
    res.status(500).send("Error processing your request");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
