import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import { FormControl } from '@material-ui/core';
import { FormButton } from './FormElements';
import API from '../Utils/clientauth';
import SurveyComplete from './conditionalRenders/surveyComplete';

const IntakeQuestions = require('../Utils/checkin-questions.json');

const useStyles = makeStyles({
  buttonSubmit: {
    margin: '1em auto'
  }
});

const CheckIn = props => {
  const [dailyCheck, setDailyCheck] = useState();
  const classes = useStyles();

  let answers = [];
  
  const user = JSON.parse(API.getLocalStorage('eco-user'));

  const updateAnswers = event => {
    answers.push(parseInt(event));
    answers = answers.filter(answer => answer !== 1 || answer !== 0);
  };

  // when component mounts, check from the db if the user has checked in today
  useEffect(() => {
    // call API to see if the user has checked in today and update the state variable to update
    if (user) {
      API.getDailyCheck(user._id).then(result => {
        setDailyCheck(result.data);
      });
    }
  });

  //on form submit
  const submitSurvey = answers => {
    
    API.userSubmitDaily(user._id, answers).then(response => {
      console.log(response);
      setDailyCheck(response.dailyCheck)
    });
  };

  // conditional rendering
    return (
		<React.Fragment>
		{!dailyCheck ? (
			<FormControl component='fieldset'>
			{IntakeQuestions.questions.map((question, index) => (
			  <GreenRadio
        key={question.id}
				index={index}
				updateAnswers={e => {
				  updateAnswers(e);
				}}
				question={question.question}
			  />
			))}
			<FormButton
			  onClick={() => submitSurvey(answers)}
			  className={classes.buttonSubmit}
			>
			  Submit
			</FormButton>
		  </FormControl>
		) : (
			<SurveyComplete />
		)}
		</React.Fragment>
	)
};

export default CheckIn;
