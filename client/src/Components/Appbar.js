import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: '#F1BB87',
    textShadow: '-2px 2px 3px rgba(247, 239, 153,0.25)'
  },
  bar: {
    background: '#5D675B',
    padding: '2px'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const [user, setUser] = useState(false);

  function componentWillMount() {
    const token = localStorage.getItem('jwtToken');
    console.log(token);
  }

  const logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  };

  return (
      <AppBar className={classes.bar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>Ecohabit</Typography>
            {localStorage.getItem('jwtToken') ? (
              <Fragment>
                <Button color="inherit" variant='h6'>Daily Dashboard</Button>
                <Button color="inherit" variant='h6'>Reminders</Button>
                <Button color="inherit" variant='h6'>Educate Yourself</Button>
                <Button color='inherit' onClick={logout}>Logout</Button>
              </Fragment>
              ) : (
              <Fragment>
                <Link className={classes.link} to='/login'>
                  <Button color='inherit'>Login</Button>
                </Link>
                <Link className={classes.link} to='/register'>
                  <Button color='inherit'>Register</Button>
                </Link>
              </Fragment>
            )}
        </Toolbar>
      </AppBar>
  );
}
