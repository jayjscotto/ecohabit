import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

function RightPane(props) {
    return (
        <Grid item sm>
            <Paper style={props.style}>
                <h1>Right Column</h1>
            </Paper>
        </Grid>
    )
}

export default RightPane;