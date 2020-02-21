import React from 'react';
import { FormInput, FormButton, FormCard, FormCardContent, FormAction } from '../../Components/FormElements';
import { Grid } from '@material-ui/core';

const Form2 = ({ setForm, formData, navigation }) => {
	const { password, password2, zipCode } = formData;

	const { previous, next } = navigation;

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
							name="password"
							label="Password"
							type="password"
							value={password}
							onChange={setForm}
						/>
						<FormInput
							required
							id="password2"
							name="password2"
							label="Re-enter Password"
							type="password"
							value={password2}
							onChange={setForm}
						/>
						<FormInput
							required
							id="zipCode"
							name="zipCode"
							label="Zip Code"
							value={zipCode}
							onChange={setForm}
						/>
						<FormButton label="Back" onClick={previous}>
							Back
						</FormButton>
						&nbsp;
						<FormButton label="Continue" onClick={next}>
							Continue
						</FormButton>
					</FormCardContent>
				</FormCard>
			</Grid>
		</Grid>
	);
};

export default Form2;
