import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import '../../../client/src/index.css';

function LeftPane(props) {
    return (
        <Grid container sm={5} >
            <Grid item sm>
                <Paper elevation={3} style={props.style} className="noscroll">
                    <Typography style={props.header}>
                        Check-In
                    </Typography>
                    {props.children}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default LeftPane;