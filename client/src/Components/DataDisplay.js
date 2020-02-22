import React, {useState, Fragment} from 'react';
import { Grid, Paper} from '@material-ui/core';
// import API from '../Utils/electric-api';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MapModal from '../Components/MapModal';

let useStyles = makeStyles({
  root: {
    padding: '0.5em',
    // minHeight: '220px',
    maxWidth: '600px',
    background: '#ffffff',
    cursor: 'pointer'
  },
  title: {
    // paddingRight: '2em'
  },
  list: {
    listStyle: 'none'
  }, 
  distance: {
    fontSize: '20px'
  },
})

// for user's zip code, call get local storage?
// look into a hook to get it from the login

function DataDisplay(props) {
  let classes = useStyles();
  const [link, setLink] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = link => {
    setLink(link);
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  let stationList = props.results.map(res => {
    let googleLink = `${res.AddressInfo.AddressLine1}+${res.AddressInfo.Town}+${res.AddressInfo.StateOrProvince}+${res.AddressInfo.Postcode}`;

      return (
        <Grid item lg={12} md={12} sm={12}>
          <Paper className={classes.root} onClick={() => {handleModalOpen(googleLink)}}>
            <ul className={classes.list}>
              <li>
                <h2>{res.AddressInfo.Title} <span className={classes.distance}> // {parseFloat(res.AddressInfo.Distance).toFixed(1)}  miles away</span></h2>
                {/* <a className={classes.link} href={`https://www.google.com/maps/place/${googleLink}`} rel="noopener noreferrer"target="_blank"> */}
                <Fragment>
                  {res.AddressInfo.AddressLine1}, 
                   {res.AddressInfo.Town}, {res.AddressInfo.StateOrProvince}, {res.AddressInfo.Postcode}
                </Fragment>
                
                {/* </a> */}
                {/* <p>{res.AddressInfo.ContactTelephone}</p> */}
                {/* <p>{res.AddressInfo.AccessComments}</p> */}
              </li>
            </ul>
          </Paper>
        </Grid>
      )
  })

  return (
    <Fragment>
      <Grid container spacing={2} style={{ margin: '1em' }}>
        {stationList}
      </Grid>
      <MapModal open={modalOpen} handleClose={handleModalClose} link={link}/>
    </Fragment>
  )

}

export default DataDisplay;