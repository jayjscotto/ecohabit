import React, { Component } from 'react';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { FormButton } from '../../Components/FormElements';
import { Link } from 'react-router-dom';

export class About extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
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
				<Grid item sm>
					<Grid item sm>
						<h3>EcoHabit Helps...</h3>
					</Grid>
					<Grid item sm={6}>
						<List>
							<ListItem>
								<ListItemText>Preform Daily Check ins with ease</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Track your progress in live time</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Set reminders that work for you</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Use our build in extensions to </ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Grid item sm={6}>
					<h1>Here is where I wil put gifs</h1>
				</Grid>
				<Grid item sm>
					<FormButton label="Back" primary={true} onClick={this.back}>
						Back
						<i class="fas fa-arrow-left" />
					</FormButton>
					<FormButton label="Continue" primary={false} onClick={this.continue}>
						Next
						<i class="fas fa-arrow-right" />
					</FormButton>
				</Grid>
			</Grid>
		);
	}
}

export default About;
