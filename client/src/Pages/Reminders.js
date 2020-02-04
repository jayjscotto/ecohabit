import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; 
import { FormButton, FormInput } from '../Components/FormElements';
import DataDisplay from '../Components/DataDisplay';
import API from '../Utils/electric-api';

let styles = {
  header: {
    margin: '2em'
  }
};

class Reminders extends React.Component {

  state = {
    results: [],
    zipCode: '',
    loading: false
  }

  getData = (zip) => {
    // this.state.loading = true;
    API.getLatLng(zip)
      .then(res => { 
        let lat = res.data[0].geometry.lat;
        let lng = res.data[0].geometry.lng;
        // this.state.loading = false;
      API.getElectricData(lat, lng)
        .then(data => {
          this.setState({ results: data.data });
        });
      });
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })
  }

  render() {
    return (
      <Container style={{ marginTop: '2em' }}>
        <Box style={{ margin: '3em' }}>
          <Typography variant="h3">It's electric!</Typography>
          <Typography variant="h6">
          If you've got an electric vehicle - or you're <em>thinking</em> about getting one - don't worry about where you'll be able to find a charging station. Below are a list of them based on your zip code, and you can even search for a new zip when you're out of town.
        </Typography>
        <FormButton onClick={() => { this.getData('08844')}}>Use your zip code</FormButton>
        <FormInput
          name="zipCode"
          label="Zip Code"
          variant="outlined"
          onChange={this.handleInputChange}
          value={this.state.zipCode}
        />
        <FormButton onClick={() => { this.getData(this.state.zipCode) }}>Search a different zip code</FormButton>
      </Box>
      <DataDisplay results={this.state.results} />
      </Container>
    )
  }
}

export default Reminders;