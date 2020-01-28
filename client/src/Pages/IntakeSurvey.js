import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Radio, Typography, } from '@material-ui/core';
import GreenRadio from '../Components/GreenRadio';

// const useStyles = makeStyles({
    
//   });


const IntakeSurvey = props => {

   // const classes = useStyles();


    // lifecycle method to fetch questions from API/DB
    // map over the questions to print a card with each question on it

    return (
        <Container>
            <Grid container>
                <Grid item sm>
                    <Paper>
                        <Typography variant='h4'>Question 1:</Typography>
                        <GreenRadio/>
                    </Paper>
                </Grid>
            </Grid> 
        </Container>
    )
}

export default IntakeSurvey;