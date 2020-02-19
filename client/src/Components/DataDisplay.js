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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

let useStyles = makeStyles({
  root: {
    padding: '1em',
    minHeight: '220px'
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
  const [loading, setLoading] = React.useState(true);

  const handleClickOpen = () => {
    console.log('open!')
    setLoading(false);
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  let stationList = props.results.map(res => {
    let googleLink = `${res.AddressInfo.AddressLine1}+${res.AddressInfo.Town}+${res.AddressInfo.StateOrProvince}+${res.AddressInfo.Postcode}`;
      return (
        <Grid item lg={6} md={12} sm={12}>
        <Paper className={classes.root} onClick={handleClickOpen}>
          <ul className={classes.list}>
            <li>
              <h2>{res.AddressInfo.Title}</h2>
              <h4 className={classes.distance}>{parseFloat(res.AddressInfo.Distance).toFixed(1)}  miles away</h4>
              {/* <a className={classes.link} href={`https://www.google.com/maps/place/${googleLink}`} rel="noopener noreferrer"target="_blank"> */}
              <Fragment>
                {res.AddressInfo.AddressLine1}<br></br>
                {res.AddressInfo.Town}, {res.AddressInfo.StateOrProvince}, {res.AddressInfo.Postcode}
              </Fragment>
              
              {/* </a> */}
              <p>{res.AddressInfo.ContactTelephone}</p>
              <p>{res.AddressInfo.AccessComments}</p>
            </li>
          </ul>
        </Paper>
        <Dialog
          open={modalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Map Modal</DialogTitle>
          <DialogContent>
            {loading
            ?
            null
            :
            <iframe src={`https://www.google.com/maps/place/${googleLink}`} width="400" />
            }
            
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
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