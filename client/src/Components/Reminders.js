import React, { useState } from 'react';
import { FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Typography, Switch } from '@material-ui/core';


const Reminders = props => {  
    const [state, setState] = React.useState({
    bottle: false,
    bags: false,
    packLunch: false,
  });


const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Toggle Reminders</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.bottle} onChange={handleChange('bottle')} value="Refillable Water Bottle Reminder" />}
          label="Refillable Water Bottle Reminder"
        />
        <FormControlLabel
          control={<Switch checked={state.bags} onChange={handleChange('bags')} value="Reusable Bag Reminder" />}
          label="Reusable Bag Reminder"
        />
        <FormControlLabel
          control={
            <Switch checked={state.packLunch} onChange={handleChange('packLunch')} value="Pack Your Lunch Reminder" />
          }
          label="Pack Your Lunch Reminder"
        />
      </FormGroup>
      <FormHelperText>Turn the daily reminders on and off above for help with eco-friendly habits.</FormHelperText>
    </FormControl>
  );
}
  
export default Reminders;