import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function LeftPane(props) {
    return (
        <Grid item sm>
            <Paper elevation={3} style={props.style} >
                <Typography variant="h4">
                    Welcome
                </Typography>
                <Typography variant="body1">
                </Typography>
                <Typography variant="body1">
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LeftPane;