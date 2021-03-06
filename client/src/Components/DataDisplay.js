import React, {useState, useEffect, Fragment} from 'react';
import { Grid, Paper} from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles } from '@material-ui/core/styles';
import MapModal from '../Components/MapModal';
import Slide from '@material-ui/core/Slide';

let useStyles = makeStyles({
  root: {
    padding: '0.5em',
    minWidth: '600px',
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
    fontSize: '14px',
    display: 'block',
    marginTop: '10px'
  },
})

// for user's zip code, call get local storage?
// look into a hook to get it from the login

function DataDisplay(props) {
  let classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [link, setLink] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, [props.results])

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
        <Slide direction="up" in={checked}>
        <Grid item lg={12} md={12} sm={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Paper className={classes.root} onClick={() => {handleModalOpen(googleLink)}}>
            <ul className={classes.list}>
              <li>
                <RoomIcon style={{ float: 'right', marginRight: '20px' }}/>
                <h2>{res.AddressInfo.Title} <span className={classes.distance}> / {parseFloat(res.AddressInfo.Distance).toFixed(1)}  miles away</span></h2>
                <Fragment>
                  {res.AddressInfo.AddressLine1}, 
                   {res.AddressInfo.Town}, {res.AddressInfo.StateOrProvince}, {res.AddressInfo.Postcode}
                </Fragment>
              </li>
            </ul>
          </Paper>
        </Grid>
        </Slide>
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