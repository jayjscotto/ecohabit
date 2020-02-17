import React, { useEffect, useContext, Fragment } from 'react';
import { CheckinContext } from './CheckinContext';
import { Paper, Typography } from '@material-ui/core';
import Reminders from './Reminders';
import LineChart from './Chart';
import API from '../Utils/clientauth';
import moment from 'moment';

const RightPane = props => {
  const {
    dailyCheck,
    chartData,
    setChartData,
    dates,
    setDates,
    chartRendered,
    setChartRendered
  } = useContext(CheckinContext);

  useEffect(() => {
    setChartRendered(false);
    let checkinPoints = [];
    let checkinDates = [];
    API.getUserData()
      .then(res => {
        for (let checkin in res.data) {
          checkinPoints.push(res.data[checkin].totalPoints);
          checkinDates.push(moment(res.data[checkin].date).format('MMM D'));
        }
        setChartData(checkinPoints);
        setDates(checkinDates);
        setChartRendered(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, // eslint-disable-next-line 
  [dailyCheck]);

  return (
    <Fragment>
      <Paper elevation={3} style={props.style}>
        <Typography style={props.header}>Daily Dashboard</Typography>
        {!chartRendered ? null : (
          <LineChart chartdata={chartData} dates={dates} />
        )}
      </Paper>
      <Paper elevation={3} style={props.style}>
        <Typography style={props.header}>Reminders</Typography>
        <Reminders />
      </Paper>
    </Fragment>
  );
};

export default RightPane;
