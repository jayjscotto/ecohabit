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
		//console.log(this.props);

		// const values = { values: { firstName, lastName, userName, password, password2, zipCode } };
		// console.log(`this is my user data omg omg ogmogm go mgom ogrmf\n $/{JSON.stringify(values)}`);

		axios
			.post(
				'/api/auth/register',
				{ values: { firstName, lastName, userName, password, password2, zipCode } },
				function(res) {
					if (res.status === 200) {
						console.log(res);
					}
				}
			)
			.then((result) => {
				//	console.log(result);
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
