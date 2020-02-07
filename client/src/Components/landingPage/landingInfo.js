import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { FormButton } from '../../Components/FormElements';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckIn from './welcomeImages/checkin.gif';
import Util from './welcomeImages/util.gif';
import Data from './welcomeImages/data.jpg';
//import '../../index.css';

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
			<Grid container alignItems="center" justify="center" spacing={3} style={{ paddingTop: '5px' }}>
				<Grid item sm={12}>
					<h2 style={{ textAlign: 'center', color: 'rgb(93, 103, 91)' }}>Eco in Action</h2>
				</Grid>
				<Grid item sm={3}>
					<Card style={{ maxWidth: '345', color: 'rgb(93, 103, 91)' }}>
						<CardActionArea>
							<CardMedia style={{ height: '190px' }} image={CheckIn} title="Contemplative Reptile" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Check In
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Keeping a diary has never been easier with EcoHabit. Simply tally your daily habits
									and see immediate results
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				{/* second card */}
				<Grid item sm={3}>
					<Grid item sm>
						<Card style={{ maxWidth: '345', color: 'rgb(93, 103, 91)' }}>
							<CardActionArea>
								<CardMedia style={{ height: '190px' }} image={Data} title="Contemplative Reptile" />
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Data
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Track your progress instantly with our data visualization feature. Watch
										yourself grow and improve as you build strong habits.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				{/* third card  */}
				<Grid item sm={3}>
					<Card style={{ maxWidth: '345', color: 'rgb(93, 103, 91)' }}>
						<CardActionArea>
							<CardMedia style={{ height: '190px' }} image={Util} title="Utilities Gif" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Add-ons
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Our addons help our users set userful reminders and find additional resources in
									their local community.
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item sm={12}>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<FormButton label="Back" primary={true} onClick={this.back}>
							<ArrowBackIcon />
						</FormButton>
						<FormButton label="Continue" primary={false} onClick={this.continue}>
							<ArrowForwardIcon />
						</FormButton>
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default Info;
