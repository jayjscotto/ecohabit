import React, {useState} from 'react';
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

export default function MapModal(props) {
  
  const key = 'AIzaSyAthCDcx1gfJg7bZ25BEnf6CMk5B5CMeLw';
  console.log(`https://www.google.com/maps/embed/v1/place?key=${key}&q=${props.link}`);
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
    <DialogTitle>Map Modal</DialogTitle>
    <DialogContent>
    <iframe
      width="600"
      height="450"
      frameborder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=${key}
        &q=${props.link}`}>
    </iframe>
      {/* <iframe src={`https://www.google.com/maps/embed/v1/place?q=${props.googleLink}`} width="400" /> */}
      <DialogContentText>This is the map modal</DialogContentText>
    </DialogContent>
    <DialogActions></DialogActions>
  </Dialog>
  )
}