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
    chartdata,
    setChartData,
    dates,
    setDates,
    chartRendered,
    setChartRendered
  } = useContext(CheckinContext);

  const updateUserData = () => {
    if (user) {
      let checkinPoints = [];
      let dates = [];
      API.getUserData(user._id)
        .then(res => {
          let points = res.data;
          for (let i = 0; i < points.length; i++) {
            checkinPoints.push(points[i].totalPoints);
            dates.push(moment(points[i].date).format('MMM D'));
          }
          setChartData(checkinPoints);
          setDates(dates);
          setChartRendered(true);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      // need else code
    }
  };

  return (
    <Grid container md={7} sm={12} xs={12}>
      <Grid item lg={12} md={12} sm={12}>
        <Paper elevation={3} style={this.props.style}>
          <Typography style={this.props.header}>Daily Dashboard</Typography>
          {chartRendered === false ? null : (
            <LineChart chartdata={chartdata} dates={dates} />
          )}
        </Paper>
      </Grid>
      <Grid item lg={12} md={12} sm={12}>
        <Paper elevation={3} style={this.props.style}>
          <Typography style={this.props.header}>Reminders</Typography>
          <Reminders />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RightPane;
