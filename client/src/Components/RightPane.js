import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function RightPane(props) {
    return (
        <Grid item sm>
            <Paper elevation={3} style={props.style}>
                <Typography variant="h4">
                    Right Column
                </Typography>
                <Typography variant="body1">
                    Integer euismod ligula vitae nisl elementum, eleifend malesuada libero blandit. Pellentesque rhoncus mi accumsan mauris sodales auctor. Phasellus laoreet massa risus, at posuere neque tempus in. Aenean at massa maximus, iaculis diam sed, interdum mi. 
                </Typography>
                <Typography variant="body1">
                    Proin bibendum nunc eu lectus malesuada, ut laoreet ligula suscipit. Vivamus vel felis vitae nisl varius sagittis varius et enim. Donec non nisi ac dui laoreet tristique eget et elit. Cras dui libero, vulputate quis felis ut, dictum sagittis quam. Suspendisse quis lectus volutpat, tempus turpis id, sollicitudin ligula. Sed in libero viverra, lobortis mauris maximus, tempus nibh. Etiam ut egestas nibh. Nunc nec ultrices nibh.
                </Typography>
                <Typography variant="body1">
                    Proin bibendum nunc eu lectus malesuada, ut laoreet ligula suscipit. Vivamus vel felis vitae nisl varius sagittis varius et enim. Donec non nisi ac dui laoreet tristique eget et elit. Cras dui libero, vulputate quis felis ut, dictum sagittis quam. Suspendisse quis lectus volutpat, tempus turpis id, sollicitudin ligula. Sed in libero viverra, lobortis mauris maximus, tempus nibh. Etiam ut egestas nibh. Nunc nec ultrices nibh.
                </Typography>
                
            </Paper>
        </Grid>
    )
}

export default RightPane;