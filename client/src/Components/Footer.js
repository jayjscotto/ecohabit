import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  icon: {
    color: '#6d8468',
    padding: '2px',
    margin: '10px auto 0 auto',
    fontSize: '48px',
    textAlign: 'center'
  }
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container style={{width: '100%', margin: '20px auto'}} justify="center">
      <a href="https://github.com/jayjscotto/ecohabit" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className={classes.icon} fontSize="large"/>
      </a>
    </Grid>
  );
}