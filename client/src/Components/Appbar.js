import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
//import { Select } from '@material-ui/core';
import Logo from '../images/eco-logo.png';
//import Cloud from '../images/cloud2.png';

// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
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
	}
}));

export default function ButtonAppBar(props) {
	const classes = useStyles();

	const [ user, setUser ] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('jwtToken');
		if (token) {
			setUser(true);
		}
	});

	const logout = () => {
		localStorage.removeItem('jwtToken');
		localStorage.removeItem('eco-user');
		window.location.reload();
	};

	return (
		<AppBar position="relative" className={classes.bar}>
			<Toolbar>
				<Typography className={classes.title}>
					<img src={Logo} height="48" />
				</Typography>
				{/* if user is true, render user's functionality */}
				{user ? (
					<Fragment>
						<Link to="/" className={classes.link}>
							<Button style={{ color: 'inherit' }} variant="h6">
								Daily Dashboard
							</Button>
						</Link>

						<Link to="/utilities" className={classes.link}>
							<Button style={{ color: 'inherit' }} variant="h6">
								Utilities
							</Button>
						</Link>

						<Link to="/account" className={classes.link}>
							<Button style={{ color: 'inherit' }} variant="h6">
								Account
							</Button>
						</Link>

						<Button color="inherit" onClick={logout}>
							Logout
						</Button>
					</Fragment>
				) : (
					<Fragment>
						<Link className={classes.link} to="/login">
							<Button color="inherit">Login</Button>
						</Link>
						<Link className={classes.link} to="/register">
							<Button color="inherit">Register</Button>
						</Link>
					</Fragment>
				)}
			</Toolbar>
		</AppBar>
	);
}
