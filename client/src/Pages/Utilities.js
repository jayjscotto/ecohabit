import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@material-ui/core';
import { FormButton, FormInput } from '../Components/FormElements';
import DataDisplay from '../Components/DataDisplay';
import API from '../Utils/electric-api';
import clientauth from '../Utils/clientauth';


let styles = {
  root: {
    backgroundImage: 'linear-gradient(30deg, #fff2ed, #fffde9)',
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
    state: ''
  }

  

  componentDidMount() {
    let user = JSON.parse(clientauth.getLocalStorage('eco-user'));
    this.setState({ zip: user.zip });
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
                  name="zipCode"
                  label="Zip Code"
                  variant="outlined"
                  onChange={this.handleInputChange}
                  value={this.state.zipCode}
                />
                <FormButton onClick={() => { this.getData(this.state.zipCode) }}>Search a new zip code</FormButton>
                <FormButton onClick={() => { this.getData('08844')}}>Or use your zip code</FormButton>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={8} md={6}>
          {this.state.loading === true 
            ?
              <iframe></iframe>
            :
          
          <DataDisplay results={this.state.results} />}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Reminders;