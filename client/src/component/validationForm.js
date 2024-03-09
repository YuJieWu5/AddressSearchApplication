import {useState} from 'react';
import '../App.css';
import ValidationFormCanada from './validationFormCanada';
import ValidationFormBrazil from './validationFormBrazil';
import ValidationFormGermany from './validationFormGermany';
import ValidationFormIndia from './validationFormIndia';
import ValidationFormJapan from './validationFormJapan';
import ValidationFormNorthKorea from './validationFormNorthKorea';
import ValidationFormSouthKorea from './validationFormSouthKorea';
import ValidationFormMexico from './validationFormMexico';
import ValidationFormSpain from './validationFormSpain';
import ValidationFormUK from './validationFormUK';
import ValidationFormUSA from './validationFormUSA';


const ValidationForm = ()=> {
    const countries = {
        "0":"Brazil", 
        "1":"Canada",
        "2":"Germany", 
        "3":"India", 
        "4":"Japan", 
        "5":"North Korea", 
        "6":"South Korea", 
        "7":"Mexico", 
        "8":"Spain", 
        "9":"United Kingdom", 
        "10":"USA"};
    const [selectedCountry, setCountry] = useState("0");

    const handleCountryChange = (e) =>{
        const index = e.target.value
        console.log(index+ " "+ countries[index]);
        setCountry(index);
    }

    const renderForm = (selectedCountry) => {
        switch (selectedCountry) {
            case "0":
                return <ValidationFormBrazil />;
            case "1":
                return <ValidationFormCanada />;
            case "2":
                return <ValidationFormGermany />;
            case "3":
                return <ValidationFormIndia />;
            case "4":
                return <ValidationFormJapan/>;
            case "5":
                return <ValidationFormNorthKorea/>;
            case "6":
                return <ValidationFormSouthKorea/>;
            case "7":
                return <ValidationFormMexico/>;
            case "8":
                return <ValidationFormSpain/>;
            case "9":
                return <ValidationFormUK/>;
            case "10":
                return <ValidationFormUSA/>;
          default:
            return <ValidationFormBrazil />; // or any default component or behavior
        }
      }

    return (
        <>
        <form>
        <div class="space-y-12 ml-3 mr-3">
            

            <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Validation Form</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">This form allows you to validate that the input address exists and is in the correct format.</p>

            <div class="sm:col-span-3">
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                    <div class="mt-2">
                    <select  value={selectedCountry} onChange={handleCountryChange} id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        {Object.keys(countries).map((key) => {
                            return <option key={key} value={key}>{countries[key]}</option>
                        })}
                    </select>
                    </div>
            </div>

            {renderForm(selectedCountry)}

            {/* <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>


                <div class="sm:col-span-2 sm:col-start-1">
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                    <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-2">
                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <div class="mt-2">
                    <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-2">
                <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div class="mt-2">
                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="col-span-full">
                <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                <div class="mt-2">
                    <textarea id="street-address" name="street-address" rows="4" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
                </div>
            </div> */}

            
            </div>
        </div>
        </form>
        </>

    );
}

export default ValidationForm;
