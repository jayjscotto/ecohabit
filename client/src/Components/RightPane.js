import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Bar, Line } from 'react-chartjs-2';
import API from '../Utils/clientauth';
import Reminders from './Reminders';

let data = {
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Ecohabits Daily Score',
            data: [0, 3, 2, 2, 1, 4, 3, 1, 2, 5, 4, 2],
            backgroundColor: [
                'rgba(93, 103, 91, 0.2)'
            ],
            borderColor: [
                // 'rgba(93, 103, 91, 1)',
                'rgba(241, 187, 135, 1)'
            ],
            borderWidth: 1
        }]
    },
}

class RightPane extends React.Component {

    componentDidMount() {
        let user = JSON.parse(API.getLocalStorage('eco-user'));
        API.getUserData(user._id)
            .then(res => {
                console.log(res.data[0]);
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
                        <Line
                        data={data.data}
                        width={100}
                        height={40}
                        options={{ maintainAspectRatio: true }}
                        />
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
