import { useState } from "react";
import axios from 'axios';
import React from 'react';

const ValidationFormBrazil = () => {
  const state = [
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
  ];
  const suffix = ["Sr.", "Jr.", "Filho", "Neto", ""];
  const streetType = ["Rua", "Avenida", "Travessa", "Alameda", "Praça", "Largo"];

  const [firstPostalCode, setFirstPostalCode] = useState();
  const [lastPostalCode, setLastPostalCode] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedSuffix, setSuffix] = useState(suffix[0]);
  const [city, setCity] = useState('');
  const [selectedState, setState] = useState(state[0]);
  const [aptNum, setAptNum] = useState();
  const [roomNum, setRoomNum] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [selectedStreetType, setStreetType] = useState(streetType[0]);
  const [streetAddress, setStreetAddress] = useState();

  const handleFirstNameChange = (event) =>{
    const { value } = event.target;
    if (/^[A-Za-z]*$/.test(value)) {
        setFirstName(value);
    }
  }

  const handleLastNameChange = (event) =>{
    const { value } = event.target;
    if (/^[A-Za-z]*$/.test(value)) {
        setLastName(value);
    }
  }

  const handleSuffixChange = (event) =>{
    console.log(event.target.value);
    setSuffix(event.target.value);
  }

  const handleCityChange = (event) =>{
    console.log(event.target.value);
    setCity(event.target.value);
  }

  const handleStateChange = (event) =>{
    console.log(event.target.value);
    setState(event.target.value);
  }

  const handleFirstPostalCodeChange = (event) => {
    const { value } = event.target;
    if (/^[\d]*$/.test(value) && value.length <= 5) {
      setFirstPostalCode(value);
    }
  };

  
  const handleLastPostalCodeChange = (event) => {
    const { value } = event.target;
    if (/^[\d]*$/.test(value) && value.length <= 3) {
      setLastPostalCode(value);
    }
  };

  const handleAptoChange = (event) =>{
    const { value } = event.target;
    if (/^[\d]*$/.test(value)) {
      setAptNum(value);
    }
  }
  
  const handleSalaChange = (event) =>{
    const { value } = event.target;
    if (/^[\d]*$/.test(value)) {
      setRoomNum(value);
    }
  }

  const handleBairroChange = (event) =>{
    const { value } = event.target;
    setNeighborhood(value);
  }

  const handleStreetType = (event) =>{
    const { value } = event.target;
    console.log(value);
    setStreetType(value);
  }

  const handleStreetChange = (event) =>{
    const { value } = event.target;
    console.log(value);
    setStreetAddress(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Access form elements using getElementById
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const suffix = document.getElementById("sufix").value;
    const country = "0";
    const city = document.getElementById("city").value;;
    const state = document.getElementById("state").value;
    const postalCode = firstPostalCode + "-" + lastPostalCode;
    const apto = document.getElementById("apt-num").value;
    const sala = document.getElementById("room-num").value;
    const barrio = document.getElementById("neighborhood-name").value;
    const streetType = document.getElementById("street-type").value;
    const streetAddress = document.getElementById("street-address").value;


    const formData = {
        firstName,
        lastName,
        suffix,
        country,
        city,
        state,
        postalCode,
        apto,
        sala,
        barrio,
        streetType,
        streetAddress
    };


    try {
      // Make a POST request to your server API endpoint
      const response = await axios.post("http://localhost:5000/api/validateAddress", formData);

      // Handle response if needed
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form className="ml-3 mr-3">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            {/* <h2 class="text-base font-semibold leading-7 text-gray-900">Validation Form</h2> */}
            {/* <p className="mt-1 text-sm leading-6 text-gray-600">Brazil</p> */}

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Suffix
                </label>
                <div className="mt-2">
                  <select
                    id="suffix"
                    name="suffix"
                    autoComplete="suffix-name"
                    value={selectedSuffix}
                    onChange={handleSuffixChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {suffix.map((item) => {
                      return <option key={item} value={item}>{item}</option>;
                    })}
                  </select>
                </div>
              </div>


              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    value={city}
                    onChange={handleCityChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State
                </label>
                <div className="mt-2">
                  <select
                    id="state"
                    name="state"
                    autoComplete="state-name"
                    value={selectedState}
                    onChange={handleStateChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {state.map((item) => {
                      return <option key={item} value={item}>{item}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apto
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="apt-num"
                    id="apt-num"
                    autoComplete="address-level2"
                    value={aptNum}
                    onChange={handleAptoChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sala
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="room-num"
                    id="room-num"
                    autoComplete="address-level2"
                    value={roomNum}
                    onChange={handleSalaChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bairro
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="neighborhood-name"
                    id="neighborhood-name"
                    autoComplete="address-level2"
                    value={neighborhood}
                    onChange={handleBairroChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <div className="row ml-2">
                    <input
                      type="tel"
                      value={firstPostalCode}
                      onChange={handleFirstPostalCodeChange}
                      pattern="\d{5}"
                      placeholder="12345"
                      className="block w-20 mr-3 pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    -
                    <input
                      type="tel"
                      value={lastPostalCode}
                      onChange={handleLastPostalCodeChange}
                      pattern="\d{3}"
                      placeholder="678"
                      className="block ml-3 w-10  pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            
              <div className="sm:col-span-2">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="street-type"
                      name="street-type"
                      autoComplete="street-type"
                      value={selectedStreetType}
                      onChange={handleStreetType}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {streetType.map((item) => {
                        return <option key={item} value={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                </div>

              <div className="col-span-full">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <textarea
                    id="street-address"
                    name="street-address"
                    rows="4"
                    value={streetAddress}
                    onChange={handleStreetChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            
            onClick={handleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Validate
          </button>
        </div>
      </form>
    </>
  );
};

export default ValidationFormBrazil;
