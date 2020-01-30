import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export class Confirm extends Component {
	continue = (e) => {
		e.preventDefault();
		// call api here
		const { values: { firstName, lastName, userName, password, password2, zipCode } } = this.props;

		axios
			.post(
				'/api/auth/register',
				// changed the data being sent in request
				{ values: { firstName, lastName, userName, password, password2, zipCode } },
				function(res) {
					if (res.status === 200) {
						console.log('success');
					}
				}
			)
			.then((result) => {
				this.props.nextStep();
			});
	};

	back = (e) => {
		e.preventDefault();

		this.props.prevStep();
	};
	render() {
		const { values: { userName, password, password2, firstName, lastName, zipCode } } = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Confirm Your Details" />
					<List>
						<ListItem primaryText="First Name" secondaryText={firstName} />
						<ListItem primaryText="Last Name" secondaryText={lastName} />
						<ListItem primaryText="E-mail" secondaryText={userName} />
						<ListItem primaryText="Zip Code" secondaryText={zipCode} />
					</List>
					<br />
					<RaisedButton
						label="Confirm Details"
						primary={true}
						style={styles.button}
						onClick={this.continue}
					/>
					<RaisedButton label="Back" primary={false} style={styles.button} onClick={this.back} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15
	}
};
export default Confirm;
