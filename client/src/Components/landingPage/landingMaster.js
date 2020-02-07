import React, { Component } from 'react';
import About from './landingAbout';
import Info from './landingInfo';
import Signup from './LandingSignup';
import Today from './landingRegToday';

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

	render() {
		const { step } = this.state;
		switch (step) {
			case 1:
				return <Signup nextStep={this.nextStep} />;
			case 2:
				return <About nextStep={this.nextStep} prevStep={this.prevStep} />;
			case 3:
				return <Info nextStep={this.nextStep} prevStep={this.prevStep} />;
			case 4:
				return <Today nextStep={this.nextStep} prevStep={this.prevStep} />;
			default:
				return <Signup nextStep={this.nextStep} />;
		}
	}
}

export default RegisterPage;
