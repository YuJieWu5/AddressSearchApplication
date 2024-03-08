import '../App.css';

const SearchingForm = ()=> {
  return (
    <>
    <form className='ml-3 mr-3'>
      <div class="space-y-12">

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Searching Form</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">This form allows you to search across multiple countries; we will return up to 25 pages of relevant addresses.</p>
          
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900 mt-5">Country</label>
          {/* <h2 class="text-base font-semibold leading-7 text-gray-900">Country</h2> */}
          <p class="mt-1 text-sm leading-6 text-gray-600">Please select countries that you want to search.</p>

          <div class="mt-2 space-y-10">
            <fieldset>
              {/* <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend> */}
              <div class="mt-6 space-y-6">
                <div className='row ml-3 mr-3'>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">Brazil</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="candidates" class="font-medium text-gray-900">Canada</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">Germany</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">India</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">Japan</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">North Korea</label>
                        </div>
                    </div>
                </div>
                <div className='row ml-3 mr-3'>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">South Korea</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">Mexico</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">Spain</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">United Kingdom</label>
                        </div>
                    </div>
                    <div class="relative row col-md-2">
                        <div class="flex h-6 items-center mr-1">
                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for="offers" class="font-medium text-gray-900">USA</label>
                        </div>
                    </div>
                </div>
              </div>
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        {/* <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button> */}
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
      </div>
    </form>
    </>

  );
}

export default SearchingForm;
