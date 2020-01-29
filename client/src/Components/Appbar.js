import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Link,  } from '@material-ui/core';
import Daily from '../Pages/Daily';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#F1BB87',
    textShadow: '-2px 2px 3px rgba(247, 239, 153,0.25)'
  },
  bar: {
    background: '#5D675B',
    padding: '2px',
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
      <AppBar className={classes.bar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>Ecohabit</Typography>
          {localStorage.getItem('jwtToken') && (
            <Fragment>
              <Button color="inherit" variant='h6'>Daily Dashboard</Button>
              <Button color="inherit" variant='h6'>Reminders</Button>
              <Button color="inherit" variant='h6'>Educate Yourself</Button>
              <Button color="inherit" onClick={props.logout}>Logout</Button>
            </Fragment>
					)}
        </Toolbar>
      </AppBar>
  );
}