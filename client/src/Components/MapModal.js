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

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
    <DialogTitle>Map</DialogTitle>
    <DialogContent>
    <iframe
      // width="600"
      height="450"
      frameborder="0"
      // maxWidth="lg"
      fullWidth
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBTI7BblFM-qoFIqXdoB1ZeIhZcW2JYxwc&q=${props.link}`}>
    </iframe>
      <DialogContentText>This is the map modal</DialogContentText>
    </DialogContent>
    <DialogActions></DialogActions>
  </Dialog>
  )
}