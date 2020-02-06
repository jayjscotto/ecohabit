import React, { Component } from 'react';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { FormButton } from '../../Components/FormElements';
import { Link } from 'react-router-dom';

export class Info extends Component {
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
						<h3>Eco In Action</h3>
					</Grid>
					<Grid item sm>
						<List>
							<ListItem>
								<ListItemText>Set and accomplish goals</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Learn More on the Impact of your Daily Actions</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Scream</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Scream </ListItemText>
							</ListItem>
						</List>
					</Grid>
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
				<Grid item sm>
					<h1>Here is where I wil put gifs</h1>
				</Grid>
			</Grid>
		);
	}
}

export default Info;
