import React from 'react';
import { Container, Typography } from '@material-ui/core';
import API from '../Utils/electric-api';

class Reminders extends React.Component {

  componentDidMount() {
    API.getElectricData()
    .then(res => { console.log(res.data) });
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