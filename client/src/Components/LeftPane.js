import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function LeftPane(props) {
    return (
        <Grid container sm={6}>
            <Grid item sm>
                <Paper elevation={3} style={props.style} >
                    <Typography variant="h4">
                        Welcome
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default LeftPane;