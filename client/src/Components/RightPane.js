import React, { useEffect, useState, useContext } from 'react';
import ChartContex from './ChartContext';
import { Grid, Paper, Typography } from '@material-ui/core';
import Reminders from './Reminders';
import LineChart from './Chart';
import API from '../Utils/clientauth';
import moment from 'moment';

const RightPane = props => {
  const { chartdata, dates, chartRendered } = useContext(ChartContext);

  return (
    <Grid container md={7} sm={12} xs={12}>
      <Grid item lg={12} md={12} sm={12}>
        <Paper elevation={3} style={this.props.style}>
          <Typography style={this.props.header}>Daily Dashboard</Typography>
          {chartRendered === false ? null : (
            <LineChart
              chartdata={chartdata}
              dates={dates}
            />
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
