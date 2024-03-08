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
  const type = ["Rua", "Avenida", "Travessa", "Alameda", "Praça", "Largo"];

  const [firstPostalCode, setFirstPostalCode] = useState();
  const [lastPostalCode, setLastPostalCode] = useState();

  const handleFirstPostalCodeChange = (event) => {
    const { value } = event.target;
    // Allow only numbers and hyphen, limit to 9 characters
    if (/^[\d]*$/.test(value) && value.length <= 5) {
      setFirstPostalCode(value);
    }
  };

  const handleLastPostalCodeChange = (event) => {
    const { value } = event.target;
    // Allow only numbers and hyphen, limit to 9 characters
    if (/^[\d]*$/.test(value) && value.length <= 3) {
      setLastPostalCode(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Access form elements using getElementById
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const suffix = document.getElementById("country").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const postalCode = firstPostalCode + "-" + lastPostalCode;
    const apto = document.getElementById("apt-num").value;
    const sala = document.getElementById("room-num").value;
    const barrio = document.getElementById("neighborhood-name").value;
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
      <form className="ml-3 mr-3" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            {/* <h2 class="text-base font-semibold leading-7 text-gray-900">Validation Form</h2> */}
            <p className="mt-1 text-sm leading-6 text-gray-600">Brazil</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  // for="first-name"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  // for="last-name"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  // for="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Suffix
                </label>
                <div className="mt-2">
                  <select
                    id="suffix"
                    name="suffix"
                    autoComplete="suffix-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {suffix.map((item) => {
                      return <option>{item}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  // for="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  // for="city"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  // for="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State
                </label>
                <div className="mt-2">
                  <select
                    id="state"
                    name="state"
                    autoComplete="state-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {state.map((item) => {
                      return <option>{item}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  // for="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <div className="row">
                    <input
                      type="tel"
                      value={firstPostalCode}
                      onChange={handleFirstPostalCodeChange}
                      pattern="\d{5}"
                      placeholder="12345"
                      className="block w-20 mr-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    -
                    <input
                      type="tel"
                      value={lastPostalCode}
                      onChange={handleLastPostalCodeChange}
                      pattern="\d{3}"
                      placeholder="678"
                      className="block ml-3 w-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label
                    // for="city"
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
                      className="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-md-4 ml-3">
                  <label
                    // for="city"
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
                      className="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4 ml-3">
                <label
                  // for="city"
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
                    className="block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  // for="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <textarea
                    id="street-address"
                    name="street-address"
                    rows="4"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">This form allow you to validate the input address is existed and with correct format.</p>
    
              <div class="mt-10 space-y-10">
                <fieldset>
                  <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                  <div class="mt-6 space-y-6">
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      </div>
                      <div class="text-sm leading-6">
                        <label for="comments" class="font-medium text-gray-900">Comments</label>
                        <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                      </div>
                    </div>
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      </div>
                      <div class="text-sm leading-6">
                        <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                        <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                      </div>
                    </div>
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      </div>
                      <div class="text-sm leading-6">
                        <label for="offers" class="font-medium text-gray-900">Offers</label>
                        <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                  <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                  <div class="mt-6 space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div> */}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          {/* <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button> */}
          <button
            type="submit"
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
