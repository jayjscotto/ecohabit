import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { FormButtonWelcome } from '../../Components/FormElements';
import { Link } from 'react-router-dom';
import EarthGif from './welcomeImages/earth.gif';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export class Signup extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		return (
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: '100vh' }}
				elevation={3}
			>
				<Grid item>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={EarthGif} alt="smiling earth" height="200px" width="200px" />
					</div>
				</Grid>
				<Grid item sm>
					<h1 style={{ color: 'rgb(93, 103, 91)' }}>Welcome to Eco Habit</h1>
					<Link to="/login" style={{ textDecoration: 'none' }}>
						<FormButtonWelcome fullWidth={true}> Login</FormButtonWelcome>
					</Link>
					<Link to="/register" style={{ textDecoration: 'none' }}>
						<FormButtonWelcome fullWidth={true}>Register</FormButtonWelcome>
					</Link>
				</Grid>
				<br />
				<Grid item sm>
					<FormButtonWelcome label="tour" primary={true} onClick={this.continue}>
						Take A Tour <ArrowForwardIcon />
					</FormButtonWelcome>
				</Grid>
			</Grid>
		);
	}
}

export default Signup;
