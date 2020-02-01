import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import { FormControl } from '@material-ui/core';
import { FormButton } from './FormElements'

const IntakeQuestions = require('../Utils/checkin-questions.json');

const useStyles = makeStyles({
  buttonSubmit: {
    margin: '1em auto'
  }
});

const CheckIn = props => {
  const classes = useStyles();

  let answers = [];

  const updateAnswers = event => {
    answers.push(event);
    answers = answers.filter(answer => answer !== undefined);
    console.log(answers);
  };

  //onform submit
 const submitSurvey = answers => {
    console.log(answers)
    // API.submitCheckIn(answers).then(
    //   console.log('render the alternate (after survey) component here')
    // );
  }

  return (
    <FormControl component='fieldset'>
      {IntakeQuestions.questions.map((question, index) => (
        <GreenRadio
          index={index}
          updateAnswers={e => {
            updateAnswers(e);
          }}
          question={question.question}
        />
      ))}
      <FormButton onClick={() => submitSurvey(answers)}className={classes.buttonSubmit}>
        Submit
      </FormButton>
    </FormControl>
  );
};

export default CheckIn;
