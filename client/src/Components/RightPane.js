import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Bar, Line } from 'react-chartjs-2';
import Reminders from './Reminders';
import LineChart from './Chart';
import API from '../Utils/clientauth';
import moment from 'moment';

class RightPane extends React.Component {

    state = {
        chartdata: [],
        dates: [],
        rendered: false
    }

    componentDidMount() {
        this.updateUserData();
    }

    componentDidUpdate() {
        this.updateUserData();
    }

    updateUserData() {
        let user = JSON.parse(API.getLocalStorage('eco-user'));
        let checkinPoints = [];
        let dates = [];
        API.getUserData(user._id)
            .then(res => {
              let points = res.data[0].checkIns;
              for (let i = 0; i < points.length; i++) {
                  checkinPoints.push(points[i].totalPoints);
                  console.log(points[i].date);
                  dates.push(moment(points[i].date).format('MMM D'));
              }
              this.setState({ chartdata: checkinPoints, dates: dates, rendered: true });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Grid container sm={6} >
                <Grid item sm={12}>
                    <Paper elevation={3} style={this.props.style}>
                        <Typography style={this.props.header}>
                            Daily Dashboard
                        </Typography>
                        {
                            this.state.rendered === false ?
                            null :
                            <LineChart chartdata={this.state.chartdata} dates={this.state.dates} />
                        }
                    </Paper>
                </Grid>
                <Grid item sm={12}>
                    <Paper elevation={3} style={this.props.style}>
                        <Typography style={this.props.header}>
                            Reminders
                        </Typography>
                        <Reminders />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default RightPane;
