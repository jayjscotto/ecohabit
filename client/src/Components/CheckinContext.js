import { createContext, useState } from 'react';

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
    updateUserData
  };

  return (
    <CheckinContext.Provider value={contextValue}>
      {props.children}
    </CheckinContext.Provider>
  );
};

const updateUserData = () => {
  if (userObj) {
    let checkinPoints = [];
    let dates = [];
    API.getUserData(user._id)
      .then(res => {
        let points = res.data;
        for (let i = 0; i < points.length; i++) {
          checkinPoints.push(points[i].totalPoints);
          dates.push(moment(points[i].date).format('MMM D'));
        }
        this.setState({
          chartdata: checkinPoints,
          dates: dates,
          rendered: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    // need else code
  }
};