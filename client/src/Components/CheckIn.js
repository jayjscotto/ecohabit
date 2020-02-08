import React, { useEffect, useContext } from 'react';
import { CheckinContext } from './CheckinContext';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import { FormControl } from '@material-ui/core';
import { FormButton } from './FormElements';
import API from '../Utils/clientauth';
import SurveyComplete from './conditionalRenders/surveyComplete';
import CheckinContext from '../Components/CheckinContext';

const IntakeQuestions = require('../Utils/checkin-questions.json');

const useStyles = makeStyles({
  buttonSubmit: {
    margin: '1em auto'
  }
});

const CheckIn = props => {
  const classes = useStyles();
  const { user } = useContext();
  const { setAnswers, submitSurvey, dailyCheck } = useContext(CheckinContext);

  const updateAnswers = event => {
    let answers = [...answers, parseInt(event)];
    answers = answers.filter(answer => answer !== 1 || answer !== 0);
    setAnswers(answers);
  };

  // when component mounts, check from the db if the user has checked in today
  useEffect(() => {
    // call API to see if the user has checked in today and update the state variable to update
    if (user._id) {
      // call the API to see if the user has checked in today and set the boolean in state
      API.getDailyCheck(user._id).then(result => {
        setDailyCheck(result.data);
      });
    }
  });

  // conditional rendering
  return (
    <React.Fragment>
      {!dailyCheck ? (
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
          <FormButton
            onClick={() => submitSurvey(user._id, answers)}
            className={classes.buttonSubmit}
          >
            Submit
          </FormButton>
        </FormControl>
      ) : (
        <SurveyComplete />
      )}
    </React.Fragment>
  );
};

export default CheckIn;
