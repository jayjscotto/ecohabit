import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function MapModal(props) {

  return (
    <Dialog
      open={props.handleClickOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
    <DialogTitle>Map Modal</DialogTitle>
    <DialogContent>
      <iframe src={`https://www.google.com/maps/place/${props.googleLink}`} width="400" />
      <DialogContentText>This is the map modal</DialogContentText>
    </DialogContent>
    <DialogActions></DialogActions>
  </Dialog>
  )
}