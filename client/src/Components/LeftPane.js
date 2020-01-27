import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

function LeftPane(props) {
    return (
        <Grid item sm>
            <Paper style={props.style} >
                <h1>Left Column</h1>
            </Paper>
        </Grid>
    )
}

export default LeftPane;