const axios = require('axios');

const express = require("express");

const app = express();

const cors = require("cors");

require('dotenv').config();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

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

// Express route to validate an address
app.post("/api/validateAddress", (req, res) => {
  // Log the received data
  console.log('Received data:', req.body);

  // Respond with a success message
  res.send('Data received successfully!');
  // const { address, countryID } = req.body;

  // const ajv = new Ajv();

  // // Validation format function
  // let validate;

  // switch (countryID) {
  //   case 0:
  //     // Brazil address validation
  //     validate = ajv.compile(BRSchema);
  //     break;
  //   case 1:
  //     // Canada address validation
  //     validate = ajv.compile(CASchema);
  //     break;
  //   case 2:
  //     // Germany address validation
  //     validate = ajv.compile(DESchema);
  //     break;
  //   case 3:
  //     // Spain address validation
  //     validate = ajv.compile(ESSchema);
  //     break;
  //   case 4:
  //     // India address validation
  //     validate = ajv.compile(INSchema);
  //     break;
  //   case 5:
  //     // Japan address validation
  //     validate = ajv.compile(JPSchema);
  //     break;
  //   case 6:
  //     // North Korea address validation
  //     validate = ajv.compile(KPSchema);
  //     break;
  //   case 7:
  //     // South Korea address validation
  //     validate = ajv.compile(KRSchema);
  //     break;
  //   case 8:
  //     // Mexico address validation
  //     validate = ajv.compile(MXSchema);
  //     break;
  //   case 9:
  //     // UK address validation
  //     validate = ajv.compile(UKSchema);
  //     break;
  //   case 10:
  //     // US address validation
  //     validate = ajv.compile(USSchema);
  //     break;
  //   default:
  //     throw new Error("Invalid country ID");
  // }

  // const isValid = validate(address);
  // if (isValid) {
  //   res.status(200).send({ message: "Address is valid" });
  // } else {
  //   res.status(400).send({ message: "Invalid address format." });
  // }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
