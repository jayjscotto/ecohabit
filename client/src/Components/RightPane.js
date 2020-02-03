import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function RightPane(props) {

    return (
        <Grid container sm={6} >
            <Grid item sm={12}>
                <Paper elevation={3} style={props.style}>
                    <Typography style={props.header}>
                        Daily Dashboard
                    </Typography>
                </Paper>
            </Grid>
            <Grid item sm={12}>
                <Paper elevation={3} style={props.style}>
                    <Typography style={props.header}>
                        Data by the Day
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )

}

export default RightPane;
