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
  const [ selectedValue, setSelectedValue ] = useState();
  const [ selectedIndex, setSelectedIndex ] = useState();

  const handleChange = event => {
    setSelectedIndex(event.target.index);
    setSelectedValue(event.target.value);
    console.log(event.target.index)
  };

  useEffect(() => {
    props.updateAnswers(selectedValue, selectedIndex);
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
              index={props.index}
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
              index={props.index}
            />
          }
          label='No'
          labelPlacement='top'
        />
      </RadioGroup>
    </React.Fragment>
  );
}
