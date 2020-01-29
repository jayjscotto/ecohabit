import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function RightPane(props) {
    return (
        <Grid item sm>
            <Paper elevation={3} style={props.style}>
                <Typography variant="h4">
                    Daily Dashboard
                </Typography>
                <Typography variant="body1">
                </Typography>
                <Typography variant="body1">
                </Typography>
                <Typography variant="body1">
                </Typography>
                
            </Paper>
        </Grid>
    )
}

export default RightPane;