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
  }
})

function DataDisplay(props) {
  let classes = useStyles();
  return (
    <Grid container spacing={3}>
      {props.results.map(res => {
        return (
          
          <Grid item sm={6}>
          <Paper className={classes.root}>
            <ul className={classes.list}>
              <li>
                <h1>{res.AddressInfo.Title}</h1>
                <h4 className={classes.distance}>{parseFloat(res.AddressInfo.Distance).toFixed(2)}  miles away</h4>
                <p>{res.AddressInfo.AddressLine1}, {res.AddressInfo.Town}, {res.AddressInfo.StateOrProvince}, {res.AddressInfo.Postcode}</p>
                <p>{res.AddressInfo.ContactTelephone}</p>
                <p>{res.AddressInfo.AccessComments}</p>
              </li>
            </ul>
          </Paper>
          </Grid>
        )
      })}
      </Grid>
  )

}

export default DataDisplay;