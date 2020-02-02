import React from 'react';
import { Container, Typography } from '@material-ui/core';
import API from '../Utils/electric-api';

class Reminders extends React.Component {

  componentDidMount() {
    API.getLatLng('08844')
      .then(res => { 
        let lat = res.data[0].geometry.lat;
        let lng = res.data[0].geometry.lng;
      API.getElectricData(lat, lng)
        .then(data => { console.log(data) });
      });
  }

  render() {
    return (
      <Container>
        <Typography>This is the REMINDERS page</Typography>
      </Container>
    )
  }
}

export default Reminders;