import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import { Typography, FormControl, Radio } from '@material-ui/core';
import { FormButton } from './FormElements';

const IntakeQuestions = require('../Utils/checkin-questions.json');

// const useStyles = makeStyles({
//   paper: {
//     marginTop: '6em',
//     marginBottom: '4em',
//     padding: '40px',
//     minHeight: '500px',
//     fontFamily: 'inherit'
//   },
//   flex: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//     },
//     checkin: {
//       margin: '6em'
//     },
//     radioGrp: {
//       marginBottom: '1em'
//     },
//     questionDiv: {
//       display: 'flex',
//       flexDirection: 'row'
//     },
//     question: {
//       textAlign: 'left',
//       width: '70%',
//       lineHeight: '1.5em'
//     }
//   });

const CheckIn = props => {
  // const classes = useStyles();

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
      <FormButton style={{ margin: '0 auto' }}>Submit</FormButton>
    </FormControl>
  );
};

export default CheckIn;
