import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import { FormControl } from '@material-ui/core';
import { FormButton } from './FormElements';
import clientauth from '../Utils/clientauth';
import SurveyComplete from './conditionalRenders/surveyComplete';

const IntakeQuestions = require('../Utils/checkin-questions.json');

const useStyles = makeStyles({
	buttonSubmit: {
		margin: '1em auto'
	}
});

const CheckIn = (props) => {
	const [ dailyCheck, setDailyCheck ] = useState();
	const classes = useStyles();

	let answers = [];

	const updateAnswers = (event) => {
		answers.push(parseInt(event));
		answers = answers.filter((answer) => answer !== undefined);
		console.log(answers);
	};

	// when component mounts, check from the db if the user has checked in today
	function componentDidMount() {
		console.log(dailyCheck);
		// call API to see if the user has checked in today and update the state variable to update
		const localStorageObject = clientauth.getLocalStorage('eco-user');
		const user = JSON.parse(localStorageObject)._id;
		clientauth.userDailyCheck(user).then((res) => {
			if (res !== true) {
				setDailyCheck(false);
			} else {
				setDailyCheck(true);
			}
		});
	}

	//on form submit
	const submitSurvey = (answers) => {
		const localStorageObject = clientauth.getLocalStorage('eco-user');
		const user = JSON.parse(localStorageObject)._id;

		clientauth.userSubmitDaily(user, answers).then(setDailyCheck(true));
	};

	// conditional rendering
	if (setDailyCheck !== false) {
		return (
			<FormControl component="fieldset">
				{IntakeQuestions.questions.map((question, index) => (
					<GreenRadio
						index={index}
						updateAnswers={(e) => {
							updateAnswers(e);
						}}
						question={question.question}
					/>
				))}
				<FormButton onClick={() => submitSurvey(answers)} className={classes.buttonSubmit}>
					Submit
				</FormButton>
			</FormControl>
		);
	} else {
		return <SurveyComplete />;
	}
};

export default CheckIn;
