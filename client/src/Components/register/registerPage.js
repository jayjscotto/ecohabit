import React, { Component } from 'react';
import Form1 from './form1';
import Form2 from './form2';
import Confirm from './confirm';
//import Success from './success';
// import Login from '../Login';
import { Redirect } from 'react-router-dom';

export class RegisterPage extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		userName: '',
		password: '',
		password2: '',
		zipCode: ''
	};

	// method to proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};
	// method to go back one step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};
	// handle Field Change
	handleChange = (input) => (e) => {
		// this handles the intake of all of the fields
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		const { firstName, lastName, userName, password, password2, zipCode } = this.state;
		const values = { firstName, lastName, userName, password, password2, zipCode };

		switch (step) {
			case 1:
				return <Form1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
			case 2:
				return (
					<Form2
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 4:
				return <Redirect to={'/login'} />;
		}
	}
}

export default RegisterPage;
