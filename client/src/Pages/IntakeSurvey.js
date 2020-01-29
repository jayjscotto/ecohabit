import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Intake from '../Components/Intake'

import { Container, Grid, Paper } from '@material-ui/core';

const IntakeQuestions = require('../Utils/IntakeSurvey.json');

const useStyles = makeStyles({
  paper: {
    marginTop: '6em',
    marginBottom: '4em',
    padding: '40px',
    minHeight: '500px',
    fontFamily: 'inherit',
    textAlign: 'center'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row'
  },

});

const IntakeSurvey = props => {
  const classes = useStyles();
  const surveyQuestions = [...IntakeQuestions.questions]
  const [questions, setQuestions ] = useState(surveyQuestions)
  const [ surveyResponses, setAnswers ] = useState([]);
  const [ step, setStep ] = useState(1);

  // lifecycle method to fetch questions from API/DB
  // map over the questions to print a card with each question on it
    // map over the answers to print radio group with each answer on it... 
    
  //write a function in which each answer and updates an array as each answer is chosen

  //write a function that when the survey is submitted, it makes a post request to the db.
  const handleChange = e => {
    const surveyResponses = [...surveyResponses, e.target.value];
    setAnswers(surveyResponses);
  }

  return (
    <Container>
      <Grid container>
        <Grid item sm>
          <Paper className={classes.paper}>
            {/* SWITCH CASE HERE TO CONDITONALLY RENDER THE COMPONENTS BASED ON STEPS */}
            <Intake answering={handleChange} questions={IntakeQuestions.questions}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntakeSurvey;
