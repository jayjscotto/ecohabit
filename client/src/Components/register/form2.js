import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Form2 extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const { values, handleChange } = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Your account is almost Complete!" />
					<TextField
						required
						id="password"
						hintText="Create a New Password"
						floatingLabelText="Password"
						label="Required"
						type="password"
						defaultValue={values.password}
						onChange={handleChange('password')}
					/>
					<br />
					<TextField
						required
						id="password2"
						hintText="Confirm Password"
						floatingLabelText="Confirm Password"
						label="Required"
						type="password"
						defaultValue={values.password2}
						onChange={handleChange('password2')}
					/>
					<br />
					<TextField
						required
						id="zipCode"
						hintText="Enter Your 5 Digit Zip Code"
						floatingLabelText="Enter Zip"
						label="Required"
						type="number"
						defaultValue={values.zipCode}
						onChange={handleChange('zipCode')}
					/>
					<br />
					<RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue} />

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
export default Form2;
