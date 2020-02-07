import React, { Component } from 'react';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { FormButton } from '../../Components/FormElements';
// import Image1 from './welcomeImages/placeholder11';
// import Image2 from './welcomeImages/placeholder22';
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
			<Grid container justify="center" style={{ minHeight: '100vh' }}>
				<Grid item sm={4} style={{ padding: '100px 20px 0px 20px' }}>
					<Grid item sm>
						<h2>
							<em>EcoHabit Helps...</em>
						</h2>
					</Grid>
					<Grid item sm style={{ textAlign: 'center' }}>
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
					<Grid item justify="center">
						<FormButton label="Back" primary={true} onClick={this.back}>
							<i className="fas fa-arrow-left" />
						</FormButton>
						<FormButton label="Continue" primary={false} onClick={this.continue}>
							<i className="fas fa-arrow-right" />
						</FormButton>
					</Grid>
				</Grid>
				<Grid item sm={4}>
					<img
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/field-of-amaranth-blooming-red-flowers-royalty-free-image-1060130606-1554736005.jpg?crop=0.524xw:0.787xh;0.476xw,0.213xh&resize=768:*"
						alt="Image of goal keeping"
					/>
				</Grid>
				<Grid item sm={4}>
					<img
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-canna-flower-royalty-free-image-174932106-1554841383.jpg?crop=0.635xw:0.953xh;0.357xw,0.0470xh&resize=768:*"
						alt="Image of Daily Check component"
					/>
				</Grid>
			</Grid>
		);
	}
}

export default About;
