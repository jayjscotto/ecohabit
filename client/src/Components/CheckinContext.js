import React, { createContext, useState, useContext } from 'react';
import API from '../Utils/clientauth'


export const CheckinContext = createContext(null);

//on form submit
const submitCheckin = (id, answers) => {
  // call the API to submit the checkin to the backend
  API.userSubmitDaily(id, answers)
};


export const CheckinContextProvider = props => {
  const [answers, setAnswers] = useState(null);
  const [dailyCheck, setDailyCheck] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [chartRendered, setChartRendered] = useState(false);
  const [dates, setDates] = useState(null)

  const contextValue = {
    dailyCheck,
    setDailyCheck,
    answers,
    setAnswers,
    submitCheckin,
    dates,
    setDates,
    chartData,
    setChartData,
    chartRendered,
    setChartRendered
  };

  return (
    <CheckinContext.Provider value={contextValue}>
      {props.children}
    </CheckinContext.Provider>
  );
};

