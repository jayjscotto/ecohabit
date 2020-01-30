import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Form1 extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter User Details" />
					<TextField
						id="firstName"
						hintText="Enter Your First Name"
						floatingLabelText="First Name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br />
					<TextField
						id="lastName"
						hintText="Enter Your Last Name"
						floatingLabelText="Last Name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						id="userName"
						hintText="Enter Your E-mail"
						floatingLabelText="E-mail"
						onChange={handleChange('userName')}
						defaultValue={values.userName}
					/>
					<br />
					<RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue} />
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
export default Form1;
