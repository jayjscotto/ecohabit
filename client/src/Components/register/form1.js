import React from 'react';
import { FormInput, FormButton, FormCard, FormCardContent, FormAction } from '../../Components/FormElements';
import { Grid } from '@material-ui/core';

const Form1 = ({ setForm, formData, navigation }) => {
	const { firstName, lastName, userName } = formData;

	const { next } = navigation;

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
						<FormAction>Enter User Details</FormAction>
						<FormInput
							id="firstName"
							name="firstName"
							label="First Name"
							variant="outlined"
							onChange={setForm}
							value={firstName}
						/>
						<FormInput
							id="lastName"
							name="lastName"
							label="Last Name"
							variant="outlined"
							onChange={setForm}
							value={lastName}
						/>
						<FormInput
							id="userName"
							name="userName"
							label="email"
							variant="outlined"
							onChange={setForm}
							value={userName}
							type="email"
						/>

						<FormButton label="Continue" onClick={next}>
							Continue
						</FormButton>
					</FormCardContent>
				</FormCard>
			</Grid>
		</Grid>
	);
};

export default Form1;
