import React, { useEffect, useState, useContext } from 'react';
import { CheckinContext } from './CheckinContext';
import { UserContext } from './UserContext';
import { Grid, Paper, Typography } from '@material-ui/core';
import Reminders from './Reminders';
import LineChart from './Chart';
import API from '../Utils/clientauth';
import moment from 'moment';

const RightPane = props => {
  const { user } = useContext(UserContext);
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
  }, [dailyCheck]);


  return (
    <Grid container md={7} sm={12} xs={12}>
      <Grid item lg={12} md={12} sm={12}>
        <Paper elevation={3} style={props.style}>
          <Typography style={props.header}>Daily Dashboard</Typography>
          {!chartRendered ? null : (
            <LineChart chartdata={chartData} dates={dates} />
          )}
        </Paper>
      </Grid>
      <Grid item lg={12} md={12} sm={12}>
        <Paper elevation={3} style={props.style}>
          <Typography style={props.header}>Reminders</Typography>
          <Reminders />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RightPane;
