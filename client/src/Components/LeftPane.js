import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import '../../../client/src/index.css';

function LeftPane(props) {
    return (
        <Paper elevation={3} style={props.style} className="noscroll">
            <Typography style={props.header}>
                Check-In
            </Typography>
            {props.children}
        </Paper>
    )
}

export default LeftPane;