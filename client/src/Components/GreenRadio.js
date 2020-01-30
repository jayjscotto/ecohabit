import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {
  Radio,
  FormControlLabel,
  FormLabel,
  RadioGroup
} from '@material-ui/core';

export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    props.updateAnswers(selectedValue);
  }, [selectedValue]);

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
          control={
            <Radio
              value='Yes'
              checked={selectedValue === 'Yes'}
              color='success'
            />
          }
          label='Yes'
          labelPlacement='top'
        />
        <FormControlLabel
          value='No'
          control={
            <Radio
              value='No'
              checked={selectedValue === 'No'}
              color='success'
            />
          }
          label='No'
          labelPlacement='top'
        />
      </RadioGroup>
    </React.Fragment>
  );
}
