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
			.post('/api/auth/register', { userName, firstName, lastName, password, password2, zipCode }, function(res) {
				if (res.status === 200) {
					console.log(this);
					this.setState({ register: true });
					console.log(this.state);
				}
			})
			.then((result) => {
				console.log(result);
				this.props.nextStep();
			});
	};

	back = (e) => {
		e.preventDefault();

		this.props.prevStep();
	};
	render() {
		const { values: { firstName, lastName, userName, password, password2, zipCode } } = this.props;
		console.log(this.values);

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
