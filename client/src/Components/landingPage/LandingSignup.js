import React, { Component } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { FormButtonWelcome } from '../../Components/FormElements';
import { Link } from 'react-router-dom';

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
				<Grid item sm>
					<h1>EcoHabit Place Holder</h1>
					<Link to="/login">
						<FormButtonWelcome fullWidth={true}> Login</FormButtonWelcome>
					</Link>
					<Link to="/register">
						<FormButtonWelcome fullWidth={true}>Register</FormButtonWelcome>
					</Link>
				</Grid>
				<br />
				<Grid item>
					<h2>About EcoHabit</h2>
				</Grid>
				<Grid item>
					<Container alignItems="center" maxWidth="sm">
						<p>
							<em>
								EcoHabit is a daily diary mean to keep it's users on track to becoming a better eco
								Citizen. Designed with simplicity in mind, EcoHabit offers users an interactive and
								inuitive experience.
							</em>
						</p>
					</Container>
				</Grid>
				<Grid item sm>
					<FormButtonWelcome label="tour" primary={true} onClick={this.continue}>
						Take A Tour
					</FormButtonWelcome>
				</Grid>
			</Grid>
		);
	}
}

export default Signup;
