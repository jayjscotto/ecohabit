import React, {useState, Fragment} from 'react';
import { Grid, Box} from '@material-ui/core';
// import API from '../Utils/electric-api';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

let useStyles = makeStyles({
  root: {
    padding: '0.5em',
    minHeight: '220px',
    maxWidth: '600px',
    background: '#ffffffa1'
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
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log('open!')
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  let stationList = props.results.map(res => {
    let googleLink = `${res.AddressInfo.AddressLine1}+${res.AddressInfo.Town}+${res.AddressInfo.StateOrProvince}+${res.AddressInfo.Postcode}`;
      return (
        <Grid item lg={12} md={12} sm={12}>
          <Box className={classes.root} onClick={handleClickOpen}>
            <ul className={classes.list}>
              <li>
                <h2>{res.AddressInfo.Title}</h2>
                <h4 className={classes.distance}>{parseFloat(res.AddressInfo.Distance).toFixed(1)}  miles away</h4>
                {/* <a className={classes.link} href={`https://www.google.com/maps/place/${googleLink}`} rel="noopener noreferrer"target="_blank"> */}
                <Fragment>
                  {res.AddressInfo.AddressLine1},
                  {res.AddressInfo.Town}, {res.AddressInfo.StateOrProvince}, {res.AddressInfo.Postcode}
                </Fragment>
                
                {/* </a> */}
                <p>{res.AddressInfo.ContactTelephone}</p>
                <p>{res.AddressInfo.AccessComments}</p>
              </li>
            </ul>
          </Box>
        </Grid>
      )
  })

  return (
    <Grid container spacing={2} style={{ margin: '1em' }}>
      {stationList}
    </Grid>
  )

}

export default DataDisplay;