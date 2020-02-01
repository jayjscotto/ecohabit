import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import { Typography, FormControl, Radio } from '@material-ui/core';
import { FormButton } from './FormElements';

const IntakeQuestions = require('../Utils/checkin-questions.json');

const CheckIn = props => {

  let answers = [];

  const updateAnswers = event => {
    answers.push(event);
    answers = answers.filter(answer => answer !== undefined)
    console.log(answers);
  };

  //onform submit


  return (
    <FormControl component='fieldset'>
      {IntakeQuestions.questions.map((question, index) => (
        <GreenRadio index={index} updateAnswers={(e) => {updateAnswers(e)}} question={question.question}/>
      ))}
      <FormButton>Submit</FormButton>
    </FormControl>
  );
};

export default CheckIn;
