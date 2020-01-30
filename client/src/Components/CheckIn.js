import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import {
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';

const IntakeQuestions = require('../Utils/checkin-questions.json');

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
    justifyContent: 'space-between'
    },
    checkin: {
      margin: '6em'
    },
    radioGrp: {
      marginBottom: '1em'
    },
    questionDiv: {
      display: 'flex',
      flexDirection: 'row'
    },
    question: {
      textAlign: 'left',
      width: '70%'
    }
  });

const CheckIn = props => {
  const classes = useStyles();

  //onform submit
  //get all the data from the lower level hooks
  //PROVIDER
  


  return (
    <FormControl component='fieldset'>
      {IntakeQuestions.questions.map((question, index) => (
        <GreenRadio index={index} question={question.question}/>
      ))}
    </FormControl>
  );
};

export default CheckIn;
