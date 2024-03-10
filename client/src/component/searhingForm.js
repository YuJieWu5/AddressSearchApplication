import '../App.css';
import {useState} from 'react';
import axios from 'axios';

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
    
    const stateOrPrivince = [
        "",
        "AC" , "AP" , "AM" , "BA" , "CE" , "DF" , "ES" , "GO" , "MT" , "MG" , "PA" , "PB" , "PR" , "PI" , "RJ" , "RN" , "RS" , "RO" , "RR" , "SC" , "SP" , "SE" , "TO",
        "AB" , "MB" , "NB" , "NL" , "NS" , "NT" , "NU" , "ON" , "PE" , "QC" , "SK" , "YT",
        "AG" , "BC" , "BS" , "CM" , "CS" , "CH" , "CL" , "CP" , "DG" , "GT" , "GR" , "HG" , "JC" , "MC" , "OC" , "PL" , "QT" , "QR" , "SL" , "SR" , "TC" , "TS" , "TL" , "VZ" , "YN" , "ZS",
        "A Coruña" , "Álava" , "Albacete" , "Alicante" , "Almería" , "Asturias" , "Ávila" , "Badajoz" , "Barcelona" , "Burgos" , "Cáceres" , "Cádiz" , "Cantabria" , "Castellón" , "Ceuta" , "Ciudad Real" , "Córdoba" , "Cuenca" , "Girona" , "Granada" , "Guadalajara" , "Guipúzcoa" , "Huelva" , "Huesca" , "Illes Balears" , "Jaén" , "La Rioja" , 
        "Las Palmas" , "León" , "Lleida" , "Lugo" , "Madrid" , "Málaga" , "Melilla" , "Murcia" , "Navarra" , "Ourense" , "Palencia" , "Pontevedra" , "Salamanca" , "Santa Cruz de Tenerife" , "Segovia" , "Sevilla" , "Soria" , "Tarragona" , "Teruel" , "Toledo" , "Valencia" , "Valladolid" , "Vizcaya" , "Zamora" , "Zaragoza",
        "AL" , "AK" , "AZ" , "AR" , "CA" , "CO" , "CT" , "DE" , "FL" , "GA" , "HI" , "ID" , "IL" , "IN" , "IA" , "KS" , "KY" , "LA" , "ME" , "MD" , "MA" , "MI" , "MN" , "MS" , "MO" , "NE" , "NV" , "NH" , "NJ" , "NM" , "NY" , "NC" , "ND" , "OH" , "OK" , "OR" , "RI" , "SD" , "TN" , "TX" , "UT" , "VT" , "VA" , "WA" , "WV" , "WI" , "WY",
        "Hokkaido" , "Aomori" , "Iwate" , "Miyagi" , "Akita" , "Yamagata" , "Fukushima" , "Ibaraki" , "Tochigi" , "Gunma" , "Saitama" , "Chiba" , "Tokyo" , "Kanagawa" , "Niigata" , "Toyama" , "Ishikawa" , "Fukui" , "Yamanashi" , "Nagano" , "Gifu" , "Shizuoka" , "Aichi" , "Mie" , "Shiga" , "Kyoto" , "Osaka" , "Hyogo" , "Nara" , "Wakayama" , 
        "Tottori" , "Shimane" , "Okayama" , "Hiroshima" , "Yamaguchi" , "Tokushima" , "Kagawa" , "Ehime" , "Kochi" , "Fukuoka" , "Saga" , "Nagasaki" , "Kumamoto" , "Oita" , "Miyazaki" , "Kagoshima" , "Okinawa" ,"Pyongan-bukto" , "Pyongan-namdo" , "Jagang-do" , "Hwanghae-bukto" , "Hwanghae-namdo" , "Hamgyong-bukto" , "Hamgyong-namdo" , "Kangwon-do" , 
        "Nampo-si" , "Pyongyang-jikhalsi" , "Rason-teukbyeolsi" ,"Seoul" , "Busan" , "Incheon" , "Daegu" , "Gwangju" , "Daejeon" , "Ulsan" , "Sejong" , "Gyeonggi" , "Gangwon" , "Chungbuk" , "Chungnam" , "Jeonbuk" , "Jeonnam" , "Gyeongbuk" , "Gyeongnam" , "Jeju" 
    ]
    
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [street, setStreet] = useState('');
    const [result, setResult] = useState(null);

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
        console.log(event.target.value);
        setState(event.target.value);
    }

    const handleStreetChange = (event) =>{
        setStreet(event.target.value);
    }

    const handleZipChange = (event) =>{
        setZip(event.target.value);
    }

    const handleSubmit = async () =>{
        console.log("Submit!")
        console.log(selectedCountries);
        const formData = {
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

        try {
            // Make a POST request to your server API endpoint
            const response = await axios.post("http://localhost:5000/api/searchAddresses", formData);
      
            // Handle response
            if (response.status === 200) {
            
                setResult(response.data); 

                console.log(response.data);
            } 
          } catch (error) {
            const errorText = [{name: "Error Occurred", address: ""}];
            setResult(errorText);
            console.error("Error:", error);
          }
    }

    return (
        <>
        <form className='ml-3 mr-3'>
        <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Searching Form</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">This form allows you to search across multiple countries; we support partical search.</p>
            
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
                                            <input id={countryList[key]} value={countryList[key]} onChange={handleChecked} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
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
                            {/* <input type="text" value={state} onChange={handleStateChange} name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> */}
                            <select
                                id="state"
                                name="state"
                                autoComplete="state-name"
                                value={state}
                                onChange={handleStateChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                {stateOrPrivince.map((item) => {
                                return <option key={item} value={item}>{item}</option>;
                                })}
                            </select>
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
        {result!=null && 
            <ul role="list" class="ml-3 mr-3 divide-y divide-gray-100">
                { result.map((item, index) => {
                    return <li class="flex justify-between gap-x-6 py-5">
                                <div class="flex min-w-0 gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <p class="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">{item.address}</p>
                                </div>
                                </div>
                            </li>
                })}
                
            </ul>
        }
        

        </>

    );
}

export default SearchingForm;
