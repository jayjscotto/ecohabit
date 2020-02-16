import React, { createContext, useState } from 'react';

export const CheckinContext = createContext(null);

export const CheckinContextProvider = props => {
  const [answers, setAnswers] = useState([]);
  const [dailyCheck, setDailyCheck] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [chartRendered, setChartRendered] = useState(false);
  const [dates, setDates] = useState(null)

  const contextValue = {
    dailyCheck,
    setDailyCheck,
    answers,
    setAnswers,
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

