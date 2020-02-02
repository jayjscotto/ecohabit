import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import API from '../Utils/electric-api';
import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles({
  root: {
    padding: '1em',
    backgroundImage: 'linear-gradient(30deg, #fff2ed, #fffde9)'
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
              <a className={classes.link} href={`https://www.google.com/maps/place/${googleLink}`} target="_blank">{res.AddressInfo.AddressLine1}, {res.AddressInfo.Town}, {res.AddressInfo.StateOrProvince}, {res.AddressInfo.Postcode}</a>
              <p>{res.AddressInfo.ContactTelephone}</p>
              <p>{res.AddressInfo.AccessComments}</p>
            </li>
          </ul>
        </Paper>
        </Grid>
      )
  })

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <Paper className={classes.root}>
          <ul className={classes.list}>
            <li>
              <h1>Title</h1>
              <h2 className={classes.distance}>Distance miles away</h2>
              <a className={classes.link} href={`https://www.google.com/maps/place/4+Park+Ave,+Rocky+Hill,+NJ+08553`} target="_blank">AddressLine1, Town, State, Zip Code</a>
              <p>Contact Phone</p>
              <p>Access Comments</p>
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.root}>
          <ul className={classes.list}>
            <li>
              <h1>Title</h1>
              <h2 className={classes.distance}>Distance miles away</h2>
              <a className={classes.link} href={`https://www.google.com/maps/place/4+Park+Ave,+Rocky+Hill,+NJ+08553`} target="_blank">AddressLine1, Town, State, Zip Code</a>
              <p>Contact Phone</p>
              <p>Access Comments</p>
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.root}>
          <ul className={classes.list}>
            <li>
              <h1>Title</h1>
              <h2 className={classes.distance}>Distance miles away</h2>
              <a className={classes.link} href={`https://www.google.com/maps/place/4+Park+Ave,+Rocky+Hill,+NJ+08553`} target="_blank">AddressLine1, Town, State, Zip Code</a>
              <p>Contact Phone</p>
              <p>Access Comments</p>
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.root}>
          <ul className={classes.list}>
            <li>
              <h1>Title</h1>
              <h2 className={classes.distance}>Distance miles away</h2>
              <a className={classes.link} href={`https://www.google.com/maps/place/4+Park+Ave,+Rocky+Hill,+NJ+08553`} target="_blank">AddressLine1, Town, State, Zip Code</a>
              <p>Contact Phone</p>
              <p>Access Comments</p>
            </li>
          </ul>
        </Paper>
      </Grid>
    </Grid>
  )

}

export default DataDisplay;