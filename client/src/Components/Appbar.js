import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  Fragment
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Logo from '../images/eco-logo.png';
import { UserContext } from './UserContext';
import {
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem
} from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';
import HelpModal from './HelpModal';

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
    background: '#6d8468',
    padding: '2px'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  leaf: {
    filter: 'invert(1)'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = false;
  }, [open]);

  const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('eco-user');
    window.location.reload();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <AppBar position='relative' className={classes.bar}>
        <Toolbar>
          <Typography className={classes.title}>
            <img src={Logo} height='48' alt='EcoHabit' />
          </Typography>
          {/* if user is true, render user's functionality */}
          {user ? (
            <Fragment>
              <Link to='/' className={classes.link}>
                <Button style={{ color: 'inherit' }}>Daily Dashboard</Button>
              </Link>
              <Link to='/shop' className={classes.link}>
                <Button style={{ color: 'inherit' }}>Shop</Button>
              </Link>
              <Link to='/utilities' className={classes.link}>
                <Button style={{ color: 'inherit' }}>Utilities</Button>
              </Link>
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup='true'
                onClick={handleToggle}
              >
                <EcoIcon fontSize='large' className={classes.leaf}></EcoIcon>
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom'
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id='menu-list-grow'
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>
                            <Link to='/account' className={classes.link}>
                              <Button style={{ color: 'inherit' }}>
                                Account
                              </Button>
                            </Link>
                          </MenuItem>

                          <MenuItem onClick={handleModalOpen}>
                            <Button color='inherit'>Help</Button>
                          </MenuItem>

                          <MenuItem onClick={handleClose}>
                            <Button color='inherit' onClick={logout}>
                              Logout
                            </Button>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
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
      <HelpModal open={modalOpen} handleClose={handleModalClose} />
    </Fragment>
  );
}
