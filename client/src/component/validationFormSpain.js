import { useState } from "react";
import axios from 'axios';
import React from 'react';
import Dialog from "./dialog";

const ValidationFormSpain = () =>{
    const province = ["A Coruña" , "Álava" , "Albacete" , "Alicante" , "Almería" , "Asturias" , "Ávila" , "Badajoz" , "Barcelona" , "Burgos" , "Cáceres" , "Cádiz" , "Cantabria" , "Castellón" , "Ceuta" , "Ciudad Real" , "Córdoba" , "Cuenca" , "Girona" , "Granada" , "Guadalajara" , "Guipúzcoa" , "Huelva" , "Huesca" , "Illes Balears" , "Jaén" , "La Rioja" , "Las Palmas" , "León" , "Lleida" , "Lugo" , "Madrid" , "Málaga" , "Melilla" , "Murcia" , "Navarra" , "Ourense" , "Palencia" , "Pontevedra" , "Salamanca" , "Santa Cruz de Tenerife" , "Segovia" , "Sevilla" , "Soria" , "Tarragona" , "Teruel" , "Toledo" , "Valencia" , "Valladolid" , "Vizcaya" , "Zamora" , "Zaragoza"];
    const suffix = ["Sr.", "Jr.", ""];
    const streetType = ["Street" , "St." , "Avenue" , "Ave."];
  
    const [firstPostalCode, setFirstPostalCode] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedSuffix, setSuffix] = useState(suffix[0]);
    const [city, setCity] = useState('');
    const [selectedProvince, setProvince] = useState(province[0]);
    const [aptNum, setAptNum] = useState();
    const [roomNum, setRoomNum] = useState();
    const [selectedStreetType, setStreetType] = useState(streetType[0]);
    const [streetAddress, setStreetAddress] = useState();
    const [dialogProps, setDialogProps] = useState({ isOpen: false, status: null, msg: "" });
  
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
  
    const handleProvinceChange = (event) =>{
      console.log(event.target.value);
      setProvince(event.target.value);
    }
  
    const handleFirstPostalCodeChange = (event) => {
      //format: <letter> <digit> <letter>
      const { value } = event.target;
      
      if (/^[\d]*$/.test(value) && value.length <= 5) {
        setFirstPostalCode(value);
        console.log("?????");
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
  
      const formData = {
        countryID : 3,
        firstName,
          lastName,
          selectedSuffix,
          city,
          selectedProvince,
          aptNum,
          roomNum,
          selectedStreetType,
          streetAddress,
          firstPostalCode,
      };
  
      // console.log(formData);
  
      try {
        // Make a POST request to your server API endpoint
        const response = await axios.post("https://team6-server.vercel.app/api/validateAddress", formData);
  
        // Handle response
        if (response.status === 200) {
          // Address is valid, set notification and show popup
          // setNotification(response.data.message);
          // window.alert(response.data.message);
          setDialogProps({ isOpen: true, status: response.status, msg: response.data.message });
        } 
      } catch (error) {
        // Handle error
        setDialogProps({ isOpen: true, status: 400, msg: "Invalid Address" });
        console.error("Error:", error);
      }
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
                    Province
                  </label>
                  <div className="mt-2">
                    <select
                      id="province"
                      name="province"
                      autoComplete="province-name"
                      value={selectedProvince}
                      onChange={handleProvinceChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {province.map((item) => {
                        return <option key={item} value={item}>{item}</option>;
                      })}
                    </select>
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
  
  
                <div className="sm:col-span-4">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                      <input
                        type="text"
                        value={firstPostalCode}
                        onChange={handleFirstPostalCodeChange}
                        pattern="\d{5}"
                        placeholder="12345"
                        className="block w-30 mr-3 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        {dialogProps.isOpen && <Dialog status={dialogProps.status} msg={dialogProps.msg} />}
      </>
    );
}

export default ValidationFormSpain;