import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Radio, 
  FormControlLabel,
  FormLabel,
  RadioGroup, } from '@material-ui/core';

export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <React.Fragment>
      <FormLabel component='legend'>{props.question}</FormLabel>
      <RadioGroup
        aria-label='position'
        name='position'
        value={props.index}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value='Yes'
          control={<Radio color='success' />}
          label='Yes'
          labelPlacement='top'
        />
        <FormControlLabel
          value='No'
          control={<Radio color='success' />}
          label='No'
          labelPlacement='top'
        />
      </RadioGroup>
  </React.Fragment>
  );
}
