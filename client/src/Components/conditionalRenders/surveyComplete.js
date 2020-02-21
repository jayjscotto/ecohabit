import React from 'react';
import { Grid, Container } from '@material-ui/core';

const SurveyComplete = (props) => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: '50vh' }}
		>
			<Grid item>
				<Container maxWidth="sm">
					<h1>Great Job!</h1>
					<h3>Check in tomorrow to log your results...</h3>
				</Container>
			</Grid>
		</Grid>
	);
};

export default SurveyComplete;
