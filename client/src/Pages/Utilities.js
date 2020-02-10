import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@material-ui/core';
import { FormButton, FormInput } from '../Components/FormElements';
import DataDisplay from '../Components/DataDisplay';
import API from '../Utils/electric-api';
import clientauth from '../Utils/clientauth';
import EarthGif from '../Components/landingPage/welcomeImages/earth.gif';

let styles = {
  root: {
    marginTop: '2em',
    padding: '20px 20px',
    marginBottom: '1em'
  },
  header: {
    marginBottom: '1em',
  }
};

class Reminders extends React.Component {

  state = {
    results: [],
    zipCode: '',
    loading: false,
    zipCodeInput: ''
  }

  componentDidMount() {
    let user = JSON.parse(clientauth.getLocalStorage('eco-user'));
    if (user) {
      this.setState({ zipCode: user.zipCode });
    }
  }

  componentWillUnmount() {
    this.setState({ zipCode: '', zipCodeInput: '' })
  }

  getData = (zip) => {
    this.setState({ loading: true });
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
          this.setState({ loading: false, results: data.data });
        })
        .catch(err => {
          console.log(err);
        })
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
      <Container >
        <Grid container>
          <Grid item lg={4} md={6}>
            <Paper style={styles.root}>
                <Box style={{ margin: '3em' }}>
                  <Typography variant="h3" style={styles.header}>It's electric!</Typography>
                  <Typography variant="body1">
                  If you've got an electric vehicle - or you're <em>thinking</em> about getting one - don't worry about where you'll be able to find a charging station. Below are a list of them based on your zip code, and you can even search for a new zip when you're out of town.
                </Typography>
                <FormInput
                  name="zipCodeInput"
                  label="Zip Code"
                  variant="outlined"
                  onChange={this.handleInputChange}
                  value={this.state.zipCodeInput}
                />
                <FormButton onClick={() => { this.getData(this.state.zipCodeInput) }}>Search a new zip code</FormButton>
                <FormButton onClick={() => { this.getData(this.state.zipCode)}}>Or use your zip code</FormButton>
              </Box>
            </Paper>
          </Grid>
          
          {this.state.loading === true 
            ?
              // <Grid item>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 auto' }}>
                  <img src={EarthGif} alt="Earthboy" width="300" />
                </div>
                
              // </Grid>
            :
              <Grid item lg={8} md={6} style={{ height: '100vh', overflowX: 'visible', overflowY: 'scroll' }} className="noscroll">
                <DataDisplay results={this.state.results} />
              </Grid>
            }
          
        </Grid>
      </Container>
    )
  }
}

export default Reminders;