import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Reminders from './Reminders';
import LineChart from './Chart';
import API from '../Utils/clientauth';

class RightPane extends React.Component {

    state = {
        chartdata: [],
        rendered: false
    }

    componentDidMount() {
      let user = JSON.parse(API.getLocalStorage('eco-user'));
      if (user) {
        let checkinPoints = [];
        API.getUserData()
            .then(res => {
              console.log(res.data)
              let points = res.data;
              for (let i = 0; i < points.length; i++) {
                  checkinPoints.push(points[i].totalPoints);
              }
              this.setState({ chartdata: checkinPoints, rendered: true });
            })
            .catch(err => {
                console.log(err);
            })
      } else {

        // need else code 
      }
   
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
                            <LineChart chartdata={this.state.chartdata}/>
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
