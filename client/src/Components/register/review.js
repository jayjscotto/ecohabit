import React from 'react';
import clientAuth from '../../Utils/clientauth';
import { FormButton, FormCard, FormCardContent, FormAction } from '../FormElements';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ setForm, formData, navigation }) => {
	const { firstName, lastName, userName, password, password2, zipCode } = formData;

	const { go, previous } = navigation;

	function handleClick(e) {
		e.preventDefault();
		clientAuth
			.userRegister({ firstName, lastName, userName, password, password2, zipCode })
			.then((res) => {
				go('success');
			})
			// catches 500 error for empty fields
			.catch((err) => {
				if (err) {
					console.log('Please fill out all user fields');
				}
			});
	}

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
						<FormButton label="Back" onClick={previous}>
							Back
						</FormButton>
						&nbsp;
						<FormButton label="Confirm Details" onClick={handleClick}>
							Confirm
						</FormButton>
					</FormCardContent>
				</FormCard>
			</Grid>
		</Grid>
	);
};

export default Review;
