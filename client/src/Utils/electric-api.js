import axios from 'axios';

export default {
  getLatLng: function(zipCode) {
    return axios.get(`/get-coordinates/${zipCode}`);
  },
  getElectricData: function(lat, lng) {
    const url = `https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=100&compact=true&verbose=false&latitude=${lat}&longitude=${lng}`;
    return axios.get(url);
  },
}