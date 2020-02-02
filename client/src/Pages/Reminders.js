import React from 'react';
import { Container, Typography } from '@material-ui/core';
import DataDisplay from '../Components/DataDisplay';
import API from '../Utils/electric-api';

class Reminders extends React.Component {

  state = {
    results: []
  }

  componentDidMount() {
    API.getLatLng('08844')
      .then(res => { 
        let lat = res.data[0].geometry.lat;
        let lng = res.data[0].geometry.lng;
      API.getElectricData(lat, lng)
        .then(data => {
           console.log(data.data) 
           this.setState({ results: data.data });
          });
      });
  }

  render() {
    return (
      <Container style={{ marginTop: '2em' }}>
        <Typography>Results based on your zip code</Typography>
        <DataDisplay results={this.state.results} />
      </Container>
    )
  }
}

export default Reminders;