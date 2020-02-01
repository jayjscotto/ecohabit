import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
// import { List, ListItem } from 'material-ui/List';
// import axios from 'axios';
import clientAuth from '../../Utils/clientauth';
import { FormInput, FormButton, FormCard, FormCardContent, FormAction } from '../../Components/FormElements';
import { Grid, CardActions, Paper, List, ListItem, ListItemText } from '@material-ui/core';

export class Confirm extends Component {
	continue = (e) => {
		e.preventDefault();
		// call api here
		console.log('working');
		const { values: { firstName, lastName, userName, password, password2, zipCode } } = this.props;
		clientAuth.userRegister({ values: { firstName, lastName, userName, password, password2, zipCode } })
			.then((result) => {
				this.props.nextStep();
			})
	};
	
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values: { userName, password, password2, firstName, lastName, zipCode } } = this.props;

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
							<FormAction title="Confirm Your Details">Confirm Your Details</FormAction>
							<List>
								<ListItem>
									<ListItemText primary="First Name" secondary={firstName} />
								</ListItem>
								<ListItem>
									<ListItemText primary="Last Name" secondary={lastName} />
								</ListItem>
								<ListItem>
									<ListItemText primary="E-mail" secondary={userName} />
								</ListItem>
								<ListItem>
									<ListItemText primary="Zip Code" secondary={zipCode} />
								</ListItem>
							</List>
							<FormButton label="Confirm Details" primary='true' onClick={this.continue}>
								Confirm Details
							</FormButton>
							<FormButton label="Back" primary={false} onClick={this.back}>
								Back
							</FormButton>
						</FormCardContent>
					</FormCard>
				</Grid>
			</Grid>
		);
	}
}

export default Confirm;
