import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
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
    padding: '8px',
    margin: '0 auto',
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h3" className={classes.title}>
            Ecohabit
          </Typography>
          {localStorage.getItem('jwtToken') && (
            <Button color="inherit" onClick={props.logout}>Logout</Button>
					)}
        </Toolbar>
      </AppBar>
    // </div>
  );
}