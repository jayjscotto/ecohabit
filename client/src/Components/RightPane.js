import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import API from '../Utils/clientauth';
import Reminders from './Reminders';

class RightPane extends React.Component {

    componentDidMount() {
        API.getCheckIn()
            .then(res => {
                console.log(res);
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
                    </Paper>
                </Grid>
                <Grid item sm={12}>
                    <Paper elevation={3} style={this.props.style}>
                        <Typography style={this.props.header}>
                            Reminders
                            <Reminders />
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default RightPane;
