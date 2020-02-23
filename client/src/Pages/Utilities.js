import React, {useState, useEffect} from 'react';
import { Container, Typography, Box, Grid, Paper } from '@material-ui/core';
import { FormButton, FormInput } from '../Components/FormElements';
import DataDisplay from '../Components/DataDisplay';
import API from '../Utils/electric-api';
import clientauth from '../Utils/clientauth';
import EarthGif from '../Components/landingPage/welcomeImages/earth.gif';

let styles = {
  root: {
    margin: '0em auto 3em auto',
    padding: '20px 20px',
    color: 'white',
    borderBottom: '5px solid white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: '0.5em',
    color: 'white',
  }
};

function Reminders() {
  const [userZipCode, setUserZip] = useState('');
  const [inputZipCode, setInputZip] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      let user = JSON.parse(clientauth.getLocalStorage('eco-user'));
      if (user) {
        setUserZip(user.zipCode);
      }
    },
    []
  )

  const getData = (zip) => {
    setLoading(true);
      API.getLatLng(zip)
      .then(res => {
        let lat, lng;
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].components.country_code === 'us') {
            lat = res.data[i].geometry.lat;
            lng = res.data[i].geometry.lng;
            break;
          }
        }
        API.getElectricData(lat, lng)
          .then(data => {
            setLoading(false);
            setResults(data.data);
          })
          .catch(err => {
            console.log(err);
          })
      })
  }

  const handleInputChange = event => {
    const {name, value} = event.target;
    setInputZip(value);
  }


  return (
    <Container >
      <Grid container>
      <div style={styles.root}>
            <Grid item lg={6} md={6}>
              
              <Box style={{ marginTop: '3em', marginBottom: '3em' }}>
                <Typography variant="h3" style={styles.header}>It's electric!</Typography>
                <Typography variant="body1">
                  If you've got an electric vehicle - or you're <em>thinking</em> about getting one - don't worry about where you'll be able to find a charging station. Below are a list of them based on your zip code, and you can even search for a new zip when you're out of town.
                </Typography>
              </Box>
            
            </Grid>
            <Grid item lg={6} md={6} style={{ textAlign: 'right' }}>
              <FormInput
                name="zipCodeInput"
                label="Zip Code"
                variant="filled"
                onChange={handleInputChange}
                value={inputZipCode}
                style={{ textAlign: 'right' }}
              />
              <FormButton onClick={() => { getData(inputZipCode) }}>Anywhere</FormButton>
              <FormButton onClick={() => { getData(userZipCode)}}>Near you</FormButton>
            </Grid>
            </div>
        {loading
          ?
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 auto' }}>
              <img src={EarthGif} alt="Earthboy" width="300" />
            </div>
          :
            <Grid item lg={12} md={12} style={{ height: '' }} className="">
              <DataDisplay results={results} />
            </Grid>
          }

      </Grid>
    </Container>
  )
}

export default Reminders;