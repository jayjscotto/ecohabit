import React, { Component } from 'react';
import { FormInput, FormButton, FormCard, FormCardContent, FormAction } from '../../Components/FormElements';
import { Grid} from '@material-ui/core';

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
						<FormAction>Just one more thing...</FormAction>
							<FormInput
								required
								id="password"
								label="Password"
								type="password"
								defaultValue={values.password}
								onChange={handleChange('password')}
							/>
							<FormInput
								required
								id="password2"
								label="Re-enter Password"
								type="password"
								defaultValue={values.password2}
								onChange={handleChange('password2')}
							/>
							<FormInput
								required
								id="zipCode"
								label="Zip Code"
								type="number"
								defaultValue={values.zipCode}
								onChange={handleChange('zipCode')}
							/>
							<FormButton label="Continue" primary={true} onClick={this.continue}>Continue</FormButton>
							<FormButton label="Back" primary={false} onClick={this.back}>Back</FormButton>
						</FormCardContent>
					</FormCard>
				</Grid>
			</Grid>
		);
	}
}

export default Form2;
