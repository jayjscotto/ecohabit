import React, { Component } from 'react';
import { FormButton, FormCard, FormCardContent, FormAction } from '../../Components/FormElements';
import { Grid, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import API from '../../Utils/clientauth';

class UserDash extends Component {
	state = {
		_id: '',
		firstName: '',
		userName: '',
		lastName: '',
		zipCode: 0,
		displayTextFields: false
	};

	componentDidMount() {
		const localStorageObject = API.getLocalStorage('eco-user');
		const userObject = JSON.parse(localStorageObject);

		if (userObject) {
			this.setState({
				_id: userObject._id,
				firstName: userObject.firstName,
				userName: userObject.userName,
				lastName: userObject.lastName,
				zipCode: userObject.zipCode
			});
		}
	}
	// handle live change of inputs
	handleChange = (input) => (e) => {
		// this handles the intake of all of the fields
		this.setState({ [input]: e.target.value });
	};

	// render Text input fields
	enterUpdate = () => {
		this.setState({ displayTextFields: true });
	};
	// confirm updates (api call!)
	confirmUpdate = (e) => {
		e.preventDefault();
		// call api here
		console.log('api call working');
		const { _id, firstName, lastName, userName, zipCode } = this.state;
		API.userUpdate({ _id, firstName, lastName, userName, zipCode })
			.then((res) => {
				this.setState({ displayTextFields: false });
			})
			// catches 500 error for empty fields
			.catch((err) => {
				if (err) {
					console.log('Update Failed');
				}
			});
	};

	capitalize = (o) => {
		if (o !== 'undefined') {
			const obj = Object.values(o);
			const str = obj[0];
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	};

	render() {
		const { firstName, lastName, userName, zipCode } = this.state;

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
							<FormAction title="User Dash">
								{this.capitalize({ firstName })}'s Account Information
							</FormAction>
							<List>
								<ListItem>
									{!this.state.displayTextFields ? (
										<ListItemText primary="First Name" secondary={firstName} />
									) : null}
								</ListItem>
								<ListItem>
									{this.state.displayTextFields ? (
										<TextField
											label="First Name"
											id="firstName"
											onChange={this.handleChange('firstName')}
											defaultValue={firstName}
										/>
									) : null}
								</ListItem>
								<ListItem>
									{!this.state.displayTextFields ? (
										<ListItemText primary="Last Name" secondary={lastName} />
									) : null}
								</ListItem>
								<ListItem>
									{this.state.displayTextFields ? (
										<TextField
											label="Last Name"
											id="lastName"
											onChange={this.handleChange('lastName')}
											defaultValue={lastName}
										/>
									) : null}
								</ListItem>
								<ListItem>
									{!this.state.displayTextFields ? (
										<ListItemText primary="E-mail" secondary={userName} />
									) : null}
								</ListItem>
								<ListItem>
									{this.state.displayTextFields ? (
										<TextField
											label="E-mail"
											id="userName"
											onChange={this.handleChange('userName')}
											defaultValue={userName}
										/>
									) : null}
								</ListItem>
								<ListItem>
									{!this.state.displayTextFields ? (
										<ListItemText primary="Zip Code" secondary={zipCode} />
									) : null}
								</ListItem>
								<ListItem>
									{this.state.displayTextFields ? (
										<TextField
											label="Zip Code"
											id="zipCode"
											onChange={this.handleChange('zipCode')}
											defaultValue={zipCode}
										/>
									) : null}
								</ListItem>
							</List>

							{this.state.displayTextFields ? (
								<FormButton label="Save Details" onClick={this.confirmUpdate} fullWidth={true}>
									Confirm Your Details
								</FormButton>
							) : null}

							{!this.state.displayTextFields ? (
								<FormButton label="Update Details" onClick={this.enterUpdate} fullWidth={true}>
									Update Your Details
								</FormButton>
							) : null}
						</FormCardContent>
					</FormCard>
				</Grid>
			</Grid>
		);
	}
}

export default UserDash;
