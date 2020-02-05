import React, { useState } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
  Button
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import green from '@material-ui/core/colors/red'

const primary = green[500]; // #4caf50 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Reminders = props => {
  const [state, setState] = useState({
    bottle: false,
    bags: false,
    packLunch: false
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Toggle Reminders</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.bottle}
              onChange={handleChange('bottle')}
              onClick={handleOpen}
              value='Refillable Water Bottle Reminder'
            />
          }
          label='Refillable Water Bottle Reminder'
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.bags}
              onChange={handleChange('bags')}
              onClick={handleOpen}
              value='Reusable Bag Reminder'
            />
          }
          label='Reusable Bag Reminder'
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.packLunch}
              onChange={handleChange('packLunch')}
              onClick={handleOpen}
              value='Pack Your Lunch Reminder'
            />
          }
          label='Pack Your Lunch Reminder'
        />
      </FormGroup>
      <FormHelperText>
        Turn the daily reminders on and off above for help with eco-friendly
        habits.
      </FormHelperText>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          {"We're glad you clicked here"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Thanks for letting us know you wanted that feature!
          </DialogContentText>
          <DialogContentText id='alert-dialog-slide-description'>
            We are working hard to put it into production.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='inherit'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  );
};

export default Reminders;
