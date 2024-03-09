// Define Brazil BSON schema
const BRSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedState: { type: "string" },
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    neighborhood: { type: "string" },
    selectedStreetType: { type: "string" },
    streetAddress: { type: "string" },
    firstPostalCode: { type: "string" },
    lastPostalCode: { type: "string" },
  },
  required: [
    "countryID",
    "firstName",
    "lastName",
    "city",
    "selectedState",
    "streetAddress",
    "firstPostalCode",
    "lastPostalCode",
  ],
};

// Define Canada BSON Schema
const CASchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedProvince: { type: "string" },
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    selectedStreetType: { type: "string" },
    streetAddress: { type: "string" },
    firstPostalCode: { type: "string" },
    lastPostalCode: { type: "string" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
    "lastPostalCode",
  ],
};

// Define Germany BSON Schema
const DESchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    streetAddress: { type: "string" },
    firstPostalCode: { type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "aptNum",
    "roomNum",
    "streetAddress",
    "firstPostalCode",
  ],
}

// Define Spain BSON Schema
const ESSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedProvince: {type: "string"},
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    selectedStreetType : {type:"string"},
    streetAddress: { type: "string" },
    firstPostalCode: { type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define India BSON file
const INSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    streetAddress: { type: "string" },
    firstPostalCode: { type: "string", pattern: "^[0-9]{6}$" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "aptNum",
    "roomNum",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define Japan BSON file
const JPSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedProvince: {type: "string"},
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    selectedStreetType : {type:"string"},
    streetAddress: { type: "string" },
    firstPostalCode:{ type: "string", pattern: "^[0-9]{3}$" },
    lastPostalCode: { type: "string", pattern: "^[0-9]{4}$" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
    "lastPostalCode",
  ],
};

// Define North Korea BSON file
const KPSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    city: { type: "string" },
    selectedProvince: {type: "string"},
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    selectedStreetType : {type:"string"},
    streetAddress: { type: "string" },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "selectedStreetType",
    "streetAddress",
  ],
};

// Define South Korea BSON file
const KRSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedProvince: {type: "string"},
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    streetAddress: { type: "string" },
    firstPostalCode:{ type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define Mexico BSON file
const MXSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedProvince: {type: "string"},
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    selectedStreetType : {type:"string"},
    streetAddress: { type: "string" },
    firstPostalCode:{ type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define UK BSON file
const UKSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedProvince: {type: "string"},
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    selectedStreetType : {type:"string"},
    streetAddress: { type: "string" },
    firstPostalCode:{ type: "string" },
    lastPostalCode: { type: "string" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
    "lastPostalCode",
  ],
};

// Define US BSON Schema
const USSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    selectedSuffix: { type: "string" },
    city: { type: "string" },
    selectedProvince: {type: "string"},
    aptNum: { type: "string" },
    roomNum: { type: "string" },
    selectedStreetType : {type:"string"},
    streetAddress: { type: "string" },
    firstPostalCode:{ type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "selectedSuffix",
    "city",
    "selectedProvince",
    "aptNum",
    "roomNum",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
  ],
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
