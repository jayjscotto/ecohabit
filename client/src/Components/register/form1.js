import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { FormInput, FormButton, FormCard, FormCardContent, FormAction } from '../../Components/FormElements';
import { Box, Container, Button, Card, CardContent, Grid, CardActions, Typography, Paper, TextField } from '@material-ui/core';


export class Form1 extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;

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
					<FormCard>
						<FormCardContent>
						<FormAction>Enter User Details</FormAction>
						<FormInput
							id="firstName"
							label="First Name"
							variant="outlined"
							onChange={handleChange('firstName')}
							defaultValue={values.firstName}
						/>
						<FormInput
							id="lastName"
							label="Last Name"
							variant="outlined"
							onChange={handleChange('lastName')}
							defaultValue={values.lastName}
						/>
						<FormInput
							id="userName"
							label="email"
							variant="outlined"
							onChange={handleChange('userName')}
							defaultValue={values.userName}
							type="email"
						/>
						<FormButton label="Continue" primary={true} onClick={this.continue}>Continue</FormButton>
						</FormCardContent>
					</FormCard>
			</Grid>
	</Grid>
		);
	}
}
const styles = {
	button: {
		margin: 15
	}
};
export default Form1;
