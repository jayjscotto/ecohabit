import axios from 'axios';

export default {
  getElectricData: function() {
    const url = 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=100&compact=true&verbose=false&latitude=40.398510&longitude=-74.632294';

    return axios.get(url);
  }
}