import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';

class SurveyComplete extends Component {
	render() {
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
	}
}

export default SurveyComplete;
