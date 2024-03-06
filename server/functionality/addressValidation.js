// Set up API endpoint, API key, address data
const config = {
    method: 'get',
    url: 'API_ENDPOINT',
    headers: {
        'Authorization': 'Bearer PMAK-65e8a0c7daa47400012f9b7b-07ab9775db060ec8847d351f04919d34cf',
    },
    params: {
        'address': '',
        'state': '',
    }
};
// Send request
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.error(error);
  });

function addressValidation() {

}

module.exports = {addressValidation};
