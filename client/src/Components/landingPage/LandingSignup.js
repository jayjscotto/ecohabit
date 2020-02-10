import React, { Component, Fragment } from 'react';
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
import Logo from '../../images/eco-logo.png';

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
				<Grid item sm={8} style={{ justifyContent: 'center'}}>
				<Fragment boxShadow={3}>
				<div style={{display: 'flex' ,justifyContent: 'center', alignItems:'center' }}>					
					
					
					
					<Container alignItems="left" maxWidth="md" spacing={0}>
						<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
							<img src={EarthGif} alt="smiling earth" height="200px" width="200px" />
							<img src={Logo} alt="smiling earth" width="600px" />
						</div>
					
						<p style={{ lineHeight: '1.4', color: 'white', textAlign: 'center', fontSize: '20px'}}>
						EcoHabit is a eco-diary application engineered to assist it's users in becoming better
						eco-Citizens. Designed with simplicity in mind, EcoHabit offers users an interactive
						and inuitive experience.
						</p>
				</Container>				
				</div>
				</Fragment>
	
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
					<Box boxShadow={3} style={{ background: '' }}>
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
			</Grid>
		);
	}
}

export default Signup;
