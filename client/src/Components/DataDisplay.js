import React from 'react';
import { Grid, Paper} from '@material-ui/core';
// import API from '../Utils/electric-api';
import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles({
  root: {
    padding: '1em',
    backgroundImage: 'linear-gradient(30deg, #fff2ed, #fffde9)',
  },
  title: {
    paddingRight: '2em'
  },
  list: {
    listStyle: 'none'
  }, 
  distance: {
    fontSize: '20px'
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#6d8468'
  }
})

// for user's zip code, call get local storage?
// look into a hook to get it from the login

function DataDisplay(props) {
  let classes = useStyles();

  let stationList = props.results.map(res => {
    let googleLink = `${res.AddressInfo.AddressLine1}+${res.AddressInfo.Town}+${res.AddressInfo.StateOrProvince}+${res.AddressInfo.Postcode}`;
      return (
        <Grid item sm={6}>
        <Paper className={classes.root}>
          <ul className={classes.list}>
            <li>
              <h2>{res.AddressInfo.Title}</h2>
              <h4 className={classes.distance}>{parseFloat(res.AddressInfo.Distance).toFixed(1)}  miles away</h4>
              <a className={classes.link} href={`https://www.google.com/maps/place/${googleLink}`} target="_blank">{res.AddressInfo.AddressLine1}<br></br>
              {res.AddressInfo.Town}, {res.AddressInfo.StateOrProvince}, {res.AddressInfo.Postcode}</a>
              <p>{res.AddressInfo.ContactTelephone}</p>
              <p>{res.AddressInfo.AccessComments}</p>
            </li>
          </ul>
        </Paper>
        </Grid>
      )
  })

  return (
    <Grid container spacing={3} style={{ margin: '1em' }}>
      {stationList}
    </Grid>
  )

}

export default DataDisplay;