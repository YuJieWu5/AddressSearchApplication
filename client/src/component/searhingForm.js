import '../App.css';
import {useState} from 'react';

const SearchingForm = ()=> {
    const countryList = {
        "0":"Brazil", 
        "1":"Canada",
        "2":"Germany", 
        "3":"India", 
        "4":"Japan", 
        "5":"North Korea", 
        "6":"South Korea", 
        "7":"Mexico", 
        "8":"Spain", 
        "9":"UK", 
        "10":"USA"};

    // var selectedCountries = [];
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [street, setStreet] = useState('');

    const handleChecked = (event) =>{
        const isChecked = event.target.checked;
        const { value } = event.target;

        if (isChecked) {
            setSelectedCountries([...selectedCountries, value]);
        } else {
            setSelectedCountries(selectedCountries.filter(item => item !== value));
        }
        
    }

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

    const handleCityChange = (event) =>{
        setCity(event.target.value);
    }

    const handleStateChange = (event) =>{
        setState(event.target.value);
    }

    const handleStreetChange = (event) =>{
        setStreet(event.target.value);
    }

    const handleZipChange = (event) =>{
        setZip(event.target.value);
    }

    const handleSubmit = () =>{
        console.log("Submit!")
        console.log(selectedCountries);
        const form = {
            "SelectedCountries": selectedCountries,
            "UserInput":{
                "FirstName": firstName,
                "LastName": lastName,
                "City": city,
                "ZipCode": zip,
                "State": state,
                "Street": street
            }
        }

        console.log(form);
    }

    return (
        <>
        <form className='ml-3 mr-3'>
        <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Searching Form</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">This form allows you to search across multiple countries; we will return up to 25 pages of relevant addresses.</p>
            
            <label className="block text-sm font-medium leading-6 text-gray-900 mt-5">Country</label>
            {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Country</h2> */}
            <p className="mt-1 text-sm leading-6 text-gray-600">Please select countries that you want to search.</p>

            <div className="mt-2 space-y-10">
                <fieldset>
                {/* <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend> */}
                <div className="mt-6 space-y-6">
                    <div className='row ml-3 mr-3'>
                        {
                            Object.keys(countryList).map((key) => {
                                return <>
                                    <div className="relative row col-md-2">
                                        <div className="flex h-6 items-center mr-1">
                                            <input id={countryList[key]} value={key} onChange={handleChecked} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label className="font-medium text-gray-900">{countryList[key]}</label>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                    
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" value={firstName} onChange={handleFirstNameChange} name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input type="text" value={lastName} onChange={handleLastNameChange} name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div className="mt-2">
                            <input type="text" value={city} onChange={handleCityChange} name="city" id="city" autocomplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                        <div className="mt-2">
                            <input type="text" value={state} onChange={handleStateChange} name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                        <div className="mt-2">
                            <input type="text" value={zip} onChange={handleZipChange} name="postal-code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                        <div className="mt-2">
                            <textarea id="street-address" value={street} onChange={handleStreetChange} name="street-address" rows="4" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button> */}
            <button  type="button" onClick={handleSubmit} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
        </div>
        </form>
        </>

    );
}

export default SearchingForm;
