import React, { Fragment } from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import UserIcon from '../../images/icon.png';
import LeafIcon from '../../images/leaf-icon.png';
import { FormButtonWelcome } from '../../Components/FormElements';
import { Link } from 'react-router-dom';
import EarthGif from './welcomeImages/earth.gif';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Logo from '../../images/eco-logo.png';

const Signup = ({ navigation }) => {
	const { next } = navigation;

	return (
		<Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }} elevation={3}>
			<Grid item sm={1} style={{ backgroundColor: 'white' }} />
			<Grid item sm={8} style={{ justifyContent: 'center' }}>
				<Fragment>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Container maxWidth="md" spacing={0}>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<img src={EarthGif} alt="smiling earth" height="200px" width="200px" />
								<img src={Logo} alt="logo" width="600px" />
							</div>

							<p style={{ lineHeight: '1.4', color: 'white', textAlign: 'center', fontSize: '20px' }}>
								EcoHabit is a eco-diary application engineered to assist it's users in becoming better
								eco-Citizens. Designed with simplicity in mind, EcoHabit offers users an interactive and
								intuitive experience.
							</p>
						</Container>
					</div>
				</Fragment>
			</Grid>
			<Grid item sm={1} style={{ backgroundColor: 'white', justifyContent: 'center' }} />

			{/* end header row  */}
			{/* begin card 1 sign up  */}
			<Grid item sm={3}>
				<Box boxShadow={3}>
					<Card justify="center" style={{ maxWidth: '300', color: 'rgb(93, 103, 91)' }}>
						<CardActionArea>
							<div style={{ textAlign: 'center' }}>
								<img
									src={UserIcon}
									alt="something here"
									width="150"
									style={{ padding: '20px 20px 0px 20px' }}
								/>
							</div>
							{/* <CardMedia style={{ width: '200px' }} image={Icon} title="Contemplative Reptile" /> */}
							<CardContent>
								<Typography gutterBottom variant="h3" component="h2" style={{ textAlign: 'center' }}>
									Sign Up
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
									style={{ textAlign: 'center' }}
								>
									{/* we need to move the buttons out of the link. We cannot next the button in hta ends up becomming an a tag */}
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
			<Grid item sm={1} />
			{/* Begin second card tour  */}
			<Grid item sm={3}>
				<Box boxShadow={3} style={{ background: '' }}>
					<Card justify="center" style={{ maxWidth: '345', color: 'rgb(93, 103, 91)' }}>
						<CardActionArea>
							<div style={{ textAlign: 'center' }}>
								<img
									src={LeafIcon}
									alt="something else"
									width="150"
									style={{ padding: '20px 20px 0px 20px' }}
								/>
							</div>
							{/* <CardMedia style={{ height: '150px' }} image={Util} title="Contemplative Reptile" /> */}
							<CardContent>
								<Typography gutterBottom variant="h3" component="h2" style={{ textAlign: 'center' }}>
									Take A Tour
								</Typography>
								<Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
									<FormButtonWelcome label="tour" onClick={next}>
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
};

export default Signup;
