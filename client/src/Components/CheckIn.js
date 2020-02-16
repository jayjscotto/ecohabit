import React, { useContext } from 'react';
import { CheckinContext } from './CheckinContext';
import { UserContext } from '../Components/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import GreenRadio from './GreenRadio';
import { FormControl } from '@material-ui/core';
import { FormButton } from './FormElements';
import API from '../Utils/clientauth';
import SurveyComplete from './conditionalRenders/surveyComplete';
import IntakeQuestions from '../Utils/checkin-questions.json';

const useStyles = makeStyles({
  buttonSubmit: {
    margin: '1em auto'
  }
});

const CheckIn = props => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { answers, setAnswers, dailyCheck, setDailyCheck } = useContext(CheckinContext);

  const updateAnswers = event => {
    let userAnswers = [...answers, parseInt(event)];
    setAnswers(userAnswers);
  };

  // useEffect(() => {

  // })

  //on form submit
  const submitCheckin = (id, answers) => {
    // call the API to submit the checkin to the backend
    API.userSubmitDaily(id, answers.slice(1)).then(results => {
      setDailyCheck(results.data.dailyCheck);
    });
  };

  // conditional rendering
  return (
    <React.Fragment>
      {!dailyCheck ? (
        <FormControl component='fieldset'>
          {IntakeQuestions.questions.map((question, index) => (
            <GreenRadio
              key={index}
              index={index}
              updateAnswers={e => {
                updateAnswers(e);
              }}
              question={question.question}
            />
          ))}
          <FormButton
            onClick={() => submitCheckin(user._id, answers)}
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
