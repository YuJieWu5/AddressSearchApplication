// Define Brazil BSON schema
const BRSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      enum: ["Sr.", "Jr.", "Filho", "Neto", ""],
      description:
        'must be "Sr." | "Jr." | "Filho" | "Neto" | <roman-numeral> | ""',
    },
    city: { type: "string", maxLength: 50 },
    selectedState: {
      type: "string",
      enum: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
      description: "must be one of the valid state codes",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    neighborhood: { type: "string", maxLength: 50 },
    selectedStreetType: {
      type: "string",
      enum: ["Rua", "Avenida", "Travessa", "Alameda", "Praça", "Largo"],
      description: "must be one of the valid types",
    },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: {
      type: "string",
      pattern: "^[0-9]{5}$",
      description: "must be five digits separated by spaces",
    },
    lastPostalCode: {
      type: "string",
      pattern: "^[0-9]{3}$",
      description: "must be three digits separated by spaces",
    },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedState",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
    "lastPostalCode",
  ],
};

// Define Canada BSON Schema
const CASchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    selectedProvince: {
      type: "string",
      pattern: "^(AB|BC|MB|NB|NL|NS|NT|NU|ON|PE|QC|SK|YT)$",
      description: "must be a valid Canadian province or territory code",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    selectedStreetType: {
      type: "string",
      pattern:
        "^(St\\.|Ave\\.|Blvd\\.|Rd\\.|Dr\\.|Cres\\.|Ct\\.|Pl\\.|Way|Terr\\.|Ln\\.|Rte\\.|Rg\\.)$",
      description: "must be a valid street type",
    },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: {
      type: "string",
      pattern: "^[A-Za-z]\\d[A-Za-z]$",
      description:
        "must be a postal code consisting of a letter, a digit, and another letter",
    },
    lastPostalCode: {
      type: "string",
      pattern: "^\\d[A-Za-z]\\d$",
      description:
        "must be a value consisting of a digit, a letter, and another digit",
    },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedProvince",
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
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: { type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define Spain BSON Schema
const ESSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    selectedProvince: {
      type: "string",
      pattern:
        "^(A Coruña|Álava|Albacete|Alicante|Almería|Asturias|Ávila|Badajoz|Barcelona|Burgos|Cáceres|Cádiz|Cantabria|Castellón|Ceuta|Ciudad Real|Córdoba|Cuenca|Girona|Granada|Guadalajara|Guipúzcoa|Huelva|Huesca|Illes Balears|Jaén|La Rioja|Las Palmas|León|Lleida|Lugo|Madrid|Málaga|Melilla|Murcia|Navarra|Ourense|Palencia|Pontevedra|Salamanca|Santa Cruz de Tenerife|Segovia|Sevilla|Soria|Tarragona|Teruel|Toledo|Valencia|Valladolid|Vizcaya|Zamora|Zaragoza)$",
      description: "must be a valid province name",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    selectedStreetType: {
      type: "string",
      pattern: "^(Street|St\\.|Avenue|Ave\\.)$",
      description: "must be a valid street type",
    },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: { type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedProvince",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define India BSON file
const INSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: { type: "string", pattern: "^[0-9]{6}$" },
  },
  required: [
    "firstName",
    "lastName",
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
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    selectedProvince: {
      type: "string",
      pattern: `^(北海道|青森県|岩手県|宮城県|秋田県|山形県|福島県|茨城県|栃木県|群馬県|埼玉県|千葉県|東京都|神奈川県|新潟県|富山県|石川県|福井県|山梨県|長野県|岐阜県|静岡県|愛知県|三重県|滋賀県|京都府|大阪府|兵庫県|奈良県|和歌山県|鳥取県|島根県|岡山県|広島県|山口県|徳島県|香川県|愛媛県|高知県|福岡県|佐賀県|長崎県|熊本県|大分県|宮崎県|鹿児島県|沖縄県)$`,
      description: "must be a valid Japanese province name",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: { type: "string", pattern: "^[0-9]{3}$" },
    lastPostalCode: { type: "string", pattern: "^[0-9]{4}$" },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedProvince",
    "streetAddress",
    "firstPostalCode",
    "lastPostalCode",
  ],
};

// Define North Korea BSON file
const KPSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    city: { type: "string", maxLength: 50 },
    selectedProvince: {
      type: "string",
      pattern: `^(평안북도|평안남도|자강도|황해북도|황해남도|함경북도|함경남도|강원도|남포시|평양직할시|라선특별시)$`,
      description: "must be a valid Korean province name",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    selectedStreetType: {
      type: "string",
      pattern: `^(Street|St\\.|Avenue|Ave\\.)$`,
      description: "must be a valid street type",
    },
    streetAddress: { type: "string", maxLength: 50 },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedProvince",
    "selectedStreetType",
    "streetAddress",
  ],
};

// Define South Korea BSON file
const KRSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    selectedProvince: {
      type: "string",
      pattern: `^(서울|부산|인천|대구|광주|대전|울산|세종|경기|강원|충북|충남|전북|전남|경북|경남|제주)$`,
      description: "must be a valid Korean province name",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: { type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedProvince",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define Mexico BSON file
const MXSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    selectedProvince: {
      type: "string",
      pattern: `^(AG|BC|BS|CM|CS|CH|CL|CP|DG|DF|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)$`,
      description: "must be a valid Mexican state code",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    selectedStreetType: {
      type: "string",
      pattern: "^(Street|St\\.|Avenue|Ave\\.)$",
      description: "must be a valid street type",
    },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: { type: "string", pattern: "^[0-9]{5}$" },
  },
  required: [
    "firstName",
    "lastName",
    "city",
    "selectedProvince",
    "selectedStreetType",
    "streetAddress",
    "firstPostalCode",
  ],
};

// Define UK BSON file
const UKSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    selectedStreetType: {
      type: "string",
      pattern: "^(Street|St\\.|Avenue|Ave\\.)$",
      description: "must be a valid street type",
    },
    streetAddress: { type: "string", maxLength: 50 },
    firstPostalCode: {
      type: "string",
      pattern: "^[A-Z][0-9]{2}[A-Z]{2}$",
      description:
        "must be in the format <letter> <digit> <digit> <letter> <letter>",
    },
    lastPostalCode: {
      type: "string",
      pattern: "^[0-9][A-Z]{2}$",
      description: "must be in the format <digit> <letter> <letter>",
    },
  },
  required: [
    "firstName",
    "lastName",
    "city",
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
    firstName: { type: "string", maxLength: 50 },
    lastName: { type: "string", maxLength: 50 },
    selectedSuffix: {
      type: "string",
      pattern: "^(Sr\\.|Jr\\.|(IV|V?I{0,3})|)$",
      description: "must be 'Sr.', 'Jr.', a Roman numeral, or an empty string",
    },
    city: { type: "string", maxLength: 50 },
    selectedProvince: {
      type: "string",
      pattern:
        "^(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)$",
      description: "must be a valid US state code",
    },
    aptNum: { type: "string", pattern: "^[0-9]+$" },
    roomNum: { type: "string", pattern: "^[0-9]+$" },
    selectedStreetType: {
      type: "string",
      pattern:
        "^(Street|St\\.|Ave\\.|Blvd\\.|Rd\\.|Dr\\.|Ct\\.|Pl\\.|Way|Terr\\.|Ln\\.)$",
      description: "must be a valid street type",
    },
    streetAddress: { type: "string", maxLength: 50 },
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
