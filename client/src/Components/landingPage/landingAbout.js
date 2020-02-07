import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';
import { FormButton } from '../../Components/FormElements';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BackgroundGif from './welcomeImages/about.gif';
//import './animate.css';

class About extends Component {
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
			<div
				style={{
					height: '90vh',
					background: `url(${BackgroundGif}) no-repeat`,
					backgroundSize: 'cover'
				}}
			>
				<Grid container justify="center">
					<Grid item sm={12} style={{ padding: '150px 20px 0px 20px' }}>
						<Grid item sm style={{ textAlign: 'center' }}>
							<h1 style={{ color: 'rgb(210,209,205)' }}>
								<em>EcoHabit is here to Help.</em>
							</h1>
						</Grid>
						<Grid item sm />
						<Grid item sm style={{ textAlign: 'center' }}>
							<Container alignItems="center" maxWidth="sm">
								<p style={{ lineHeight: '1.2', textAlign: 'center', color: 'rgb(210,209,205)' }}>
									<em>
										EcoHabit is a daily diary mean to keep it's users on track to becoming a better
										eco Citizen. Designed with simplicity in mind, EcoHabit offers users an
										interactive and inuitive experience.
										<br />
										EcoHabit is dedicated helping our users improve themselves. We're here daily to
										remind you that you are important and you choice do matter. No matter how small
										or how alien you may ever feel, we're here to remind you that <em>this</em> is
										home and <em>we</em> are all going to work together to take care of it.
									</em>
								</p>
							</Container>
						</Grid>
						<Grid item sm={12}>
							<div style={{ display: 'flex', justifyContent: 'center', marginTop: '130px' }}>
								<FormButton label="Back" primary={true} onClick={this.back}>
									<ArrowBackIcon />
								</FormButton>
								<FormButton label="Continue" primary={false} onClick={this.continue}>
									<ArrowForwardIcon />
								</FormButton>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default About;
