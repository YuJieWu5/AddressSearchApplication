import { useState } from "react";
import axios from 'axios';
import React from 'react';

const ValidationFormUK = () =>{
    const suffix = ["Sr.", "Jr.", ""];
    const streetType = ["Street" , "St." , "Avenue" , "Ave."];
  
    const [firstPostalCode, setFirstPostalCode] = useState();
    const [lastPostalCode, setLastPostalCode] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedSuffix, setSuffix] = useState(suffix[0]);
    const [city, setCity] = useState('');
    const [aptNum, setAptNum] = useState();
    const [roomNum, setRoomNum] = useState();
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
  
    const handleFirstPostalCodeChange = (event) => {
      const { value } = event.target;
      //CURRENTLY NOT WORKING
      if (/^[A-Za-z]\d{1}\d{1}[A-Za-z][A-Za-z]$/.test(value) && value.length <= 5) {
        setFirstPostalCode(value);
        console.log("?????");
      }
    };

     
    const handleLastPostalCodeChange = (event) => {
        const { value } = event.target;
        //CURRENTLY NOT WORKING
        if (/^[A-Za-z]\d{1}\d{1}[A-Za-z][A-Za-z]$/.test(value) && value.length <= 3) {
        setLastPostalCode(value);
        }
    };
  
    const handleAptChange = (event) =>{
      const { value } = event.target;
      if (/^[\d]*$/.test(value)) {
        setAptNum(value);
      }
    }
    
    const handleRoomChange = (event) =>{
      const { value } = event.target;
      if (/^[\d]*$/.test(value)) {
        setRoomNum(value);
      }
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
      const country = "9"; //UK
      const city = document.getElementById("city").value;
      const postalCode = firstPostalCode+ " "+ lastPostalCode;
      const apt = document.getElementById("apt-num").value;
      const houseNum = document.getElementById("room-num").value;
      const streetType = document.getElementById("street-type").value;
      const streetAddress = document.getElementById("street-address").value;
  
      const formData = {
          firstName,
          lastName,
          suffix,
          country,
          city,
          postalCode,
          apt,
          houseNum,
          streetType,
          streetAddress
      };
  
      console.log(formData);
  
      // try {
      //   // Make a POST request to your server API endpoint
      //   const response = await axios.post("http://localhost:5000/api/validateAddress", formData);
  
      //   // Handle response if needed
      //   console.log(response.data);
      // } catch (error) {
      //   // Handle error
      //   console.error("Error:", error);
      // }
    };
  
    return (
      <>
        <form className="ml-3 mr-3">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
  
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
                      autoComplete="first-name"
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
                      autoComplete="last-name"
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
                    Town
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
                    Apartment Number
                  </label>
                  <div className="mt-2">
                      <input
                          type="text"
                          name="apt-num"
                          id="apt-num"
                          autoComplete="address-level2"
                          value={aptNum}
                          onChange={handleAptChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                  </div>
                </div>
  
                <div className="sm:col-span-2">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    House Number
                  </label>
                  <div className="mt-2">
                      <input
                          type="text"
                          name="room-num"
                          id="room-num"
                          autoComplete="address-level2"
                          value={roomNum}
                          onChange={handleRoomChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                  </div>
                </div>
  
  
                <div className="sm:col-span-2">
                    <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Outward code
                    </label>
                    <div className="mt-2">
                        <input
                        type="tel"
                        value={firstPostalCode}
                        onChange={handleFirstPostalCodeChange}
                        pattern="[A-Za-z]\d{1}\d{1}[A-Za-z][A-Za-z]"
                        placeholder="A11AA"
                        className="block w-20 mr-3 pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
              </div>

              <div className="sm:col-span-2">
                    <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Inward code
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        value={lastPostalCode}
                        onChange={handleLastPostalCodeChange}
                        pattern="\d{1}[A-Za-z][A-Za-z]"
                        placeholder="1AA"
                        className="block ml-3 w-10  pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
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
}

export default ValidationFormUK;