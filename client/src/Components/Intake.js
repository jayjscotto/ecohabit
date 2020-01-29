import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from '../Components/GreenRadio';
import {
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup
} from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    marginTop: '6em',
    marginBottom: '4em',
    padding: '40px',
    minHeight: '500px',
    fontFamily: 'inherit'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  surveyTitle: {
    textAlign: 'center',
    marginBottom: '1em'
  },
  radioGrp: {
      marginBottom: '1em'
  }
});

const Intake = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.surveyTitle} variant='h5'>
        Initial Survey
      </Typography>
      {props.questions.map((question, index) => (
        <FormControl className={classes.auto} key={index} component='fieldset'>
          <FormLabel component='legend'>{question.question}</FormLabel>
          <RadioGroup
            className={classes.flex}
            defaultValue='intakeSurvey'
            aria-label='intakeSurvey'
            name='customized-radios'
          >
            <GreenRadio  className={classes.radioGrp}/>
          </RadioGroup>
        </FormControl>
      ))}
    </React.Fragment>
  );
};

export default Intake;
