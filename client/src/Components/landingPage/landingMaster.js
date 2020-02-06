import React, { Component } from 'react';
import About from './landingAbout';
import Info from './landingInfo';
import Signup from './LandingSignup';
//import Success from './success';
// import Login from '../Login';
import { Redirect } from 'react-router-dom';

export class RegisterPage extends Component {
	state = {
		step: 1
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
	// // handle Field Change
	// handleChange = (input) => (e) => {
	// 	// this handles the intake of all of the fields
	// 	this.setState({ [input]: e.target.value });
	// };

	render() {
		const { step } = this.state;
		const { firstName, lastName, userName, password, password2, zipCode } = this.state;
		const values = { firstName, lastName, userName, password, password2, zipCode };

		switch (step) {
			case 1:
				return <Signup nextStep={this.nextStep} />;
			case 2:
				return <About nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 3:
				return <Info nextStep={this.nextStep} prevStep={this.prevStep} />;
			case 4:
				return <Signup nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 5:
				return <Redirect to={'/login'} />;
			default:
				return <Signup nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
		}
	}
}

export default RegisterPage;
