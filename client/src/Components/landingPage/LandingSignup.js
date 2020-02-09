import React, { Component } from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckIn from './welcomeImages/checkin.gif';
import Util from './welcomeImages/util.gif';
import { FormButtonWelcome } from '../../Components/FormElements';
import { Link } from 'react-router-dom';
import EarthGif from './welcomeImages/earth.gif';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpIcon from '@material-ui/icons/Help';

export class Signup extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		return (
			<Grid
				container
				spacing={0}
				alignItems="center"
				justify="center"
				style={{ minHeight: '100vh' }}
				elevation={3}
			>
				<Grid item sm={1} style={{backgroundColor: 'white'}}/>
				<Grid item sm={8} style={{backgroundColor: 'white', justifyContent: 'center'}}>
				<Box boxShadow={3}>
				<div style={{display: 'flex' ,justifyContent: 'center', alignItems:'center' }}>					
					
					<img src={EarthGif} alt="smiling earth" height="200px" width="200px" />
					
					<Container alignItems="left" maxWidth="md" spacing={0}>
					
						<h1 style={{ color: 'rgb(93, 103, 91)' }}>EcoHabit</h1>
					
					<p style={{ lineHeight: '1.4', color: 'rgb(93, 103, 91)'}}>
					EcoHabit is a eco-diary application engineered to assist it's users in becoming better
					eco-Citizens. Designed with simplicity in mind, EcoHabit offers users an interactive
					and inuitive experience.
					</p>
				</Container>				
				</div>
				</Box>
	
				</Grid>
				<Grid item sm={1} style={{backgroundColor: 'white', justifyContent: 'center'}}/>
				


				{/* end header row  */}
				{/* begin card 1 sign up  */}
				<Grid item sm={3}>
					<Box boxShadow={3}>
					<Card justify="center" style={{ maxWidth: '345', color: 'rgb(93, 103, 91)', }}>
							<CardActionArea>
								<CardMedia style={{ height: '150px' }} image={CheckIn} title="Contemplative Reptile" />
								<CardContent>
									<Typography gutterBottom variant="h3" component="h2" style={{textAlign: 'center'}}>
										Sign Up
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'center'}}>
									<Link to="/login" style={{ textDecoration: 'none' }}>
										<FormButtonWelcome> Login</FormButtonWelcome>
									</Link>
									&nbsp;
									<Link to="/register" style={{ textDecoration: 'none' }}>
										<FormButtonWelcome>Register</FormButtonWelcome>
									</Link>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Box>
				</Grid>
				{/* end sign up card  */}
				<Grid item sm={1}/>
				{/* Begin second card tour  */}
				<Grid item sm={3}>
					<Box boxShadow={3}>
					<Card justify="center" style={{ maxWidth: '345', color: 'rgb(93, 103, 91)' }}>
							<CardActionArea>
								<CardMedia style={{ height: '150px' }} image={Util} title="Contemplative Reptile" />
								<CardContent>
									<Typography gutterBottom variant="h3" component="h2" style={{textAlign: 'center'}}>
										Take A Tour
									</Typography>
									<Typography variant="body2" color="textSecondary" style={{textAlign: 'center'}}>
									<FormButtonWelcome label="tour" primary={true} onClick={this.continue}>
											Take A Tour <ArrowForwardIcon />
									</FormButtonWelcome>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Box>
				</Grid>
				{/* end second card tour  */}
				{/* footer row */}
				<Grid item sm={12}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
						<GitHubIcon/> &nbsp; <HelpIcon/>
				</div>
				</Grid>	

			</Grid>
		);
	}
}

export default Signup;
