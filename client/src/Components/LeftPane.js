import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function LeftPane(props) {
    return (
        <Grid item sm>
            <Paper style={props.style} >
                <Typography variant="h4">
                    Left Column
                </Typography>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec felis vitae lectus dignissim pellentesque vitae pellentesque metus. Duis feugiat tincidunt iaculis. Morbi metus purus, molestie sit amet maximus bibendum, commodo vitae ex. Nunc pulvinar at velit ac finibus. Suspendisse rhoncus nunc eget accumsan consectetur. 
                </Typography>
                <Typography variant="body1">
                Quisque dapibus dapibus mauris eu dapibus. Quisque ut ornare odio. Curabitur bibendum lorem eu risus malesuada, in venenatis est condimentum. Sed vel ligula a erat vestibulum viverra ac eu lorem. Vestibulum sit amet odio eget libero consequat vulputate. Pellentesque rutrum, purus a rutrum ullamcorper, nunc magna maximus est, at consequat tortor ante in nunc.
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LeftPane;