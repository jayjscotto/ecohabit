import React, { Component } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { FormButton } from '../../Components/FormElements';
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
					<h1>EcoHabit</h1>
				</Grid>
				<Grid item sm>
					<Link to="/login">
						<FormButton>Login</FormButton>
					</Link>
					<br />
					<Link to="/register">
						<FormButton>Register</FormButton>
					</Link>
				</Grid>
				<Grid item sm>
					<h2>About EcoHabit</h2>
					<Container alignItems="center" maxWidth="sm">
						EcoHabit is a daily diary mean to keep it's users on track to becoming a better eco Citizen.
						Designed with simplicity in mind, EcoHabit offers users an interactive and inuitive experience.
					</Container>
				</Grid>
				<Grid item sm>
					<FormButton label="tour" primary={true} onClick={this.continue}>
						Take A Tour
					</FormButton>
				</Grid>
			</Grid>
		);
	}
}

export default Signup;
