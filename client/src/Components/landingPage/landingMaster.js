import React, { Component } from 'react';
import Info from './landingInfo';
import Signup from './LandingSignup';

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
				return <Info nextStep={this.nextStep} prevStep={this.prevStep} />;
			case 3:
				return <Signup nextStep={this.nextStep} />;
			default:
				return; 
		}
	}
}

export default RegisterPage;
