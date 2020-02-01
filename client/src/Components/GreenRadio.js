import React, { useState, useEffect, Fragment, Box } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {
  Radio,
  FormControlLabel,
  FormLabel,
  RadioGroup
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  question: {
    lineHeight: '1.5em',
    margin: '10px auto 0px auto',
  },
});

export default function RadioButtons(props) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    props.updateAnswers(selectedValue);
  }, [selectedValue]);

  return (
    <React.Fragment>
      <FormLabel className={classes.question} component='legend'>{props.question}</FormLabel>
      <RadioGroup
        aria-label='position'
        name='position'
        value={props.index}
        onChange={handleChange}
        row
        className={classes.root}
      >
        <FormControlLabel
          value='Yes'
          style={{ display: 'inline' }}
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
          style={{ display: 'inline' }}
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
