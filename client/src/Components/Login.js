import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Appbar from '../Components/Appbar';
import { Box, Container, Button, Card, CardContent, Grid, CardActions, TextField, Typography } from '@material-ui/core';
import clientauth from '../Utils/clientauth';

let style = {
	box: {
		margin: '10px auto'
	},
	input: {
		display: 'block',
		margin: '2em auto'
	},
	action: {
		color: '#5D675B'
	},
	login: {
		background: '#5D675B',
		color: '#f7f3c2'
	}
};


class Login extends Component {
	constructor() {
		super();
		this.state = {
			userName: '',
			password: '',
			message: ''
		};
	}
	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	onSubmit = (e) => {
		e.preventDefault();

		const { userName, password } = this.state;

		clientauth.userLogin({ userName, password })
			.then((result) => {
				clientauth.populateLocalStorage(result.data);
				this.setState({ message: '' });
				window.location.replace('/');
			})
			.catch((error) => {
				if (error.response.status === 401) {
					this.setState({ message: 'Login failed. username or password does not match' });
				}
			});
	};

	render() {
		const { userName, password, message } = this.state;
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
				<Grid item>
					<Card className="container" style={style.box}>
						<CardContent>
							<form className="form-signin" onSubmit={this.onSubmit}>
								{message !== '' && (
									<div className="alert alert-warning alert-dismissible" role="alert">
										{message}
									</div>
								)}
								<Typography style={style.action} variant="h5">
									Please sign in
								</Typography>
								<TextField
									style={style.input}
									id="outlined-password-input"
									label="Email Address"
									name="userName"
									value={userName}
									onChange={this.onChange}
									type="email"
									autoComplete="current-userName"
									variant="outlined"
									required
								/>
								<TextField
									style={style.input}
									id="outlined-password-input"
									label="Password"
									name="password"
									value={password}
									onChange={this.onChange}
									type="password"
									autoComplete="current-password"
									variant="outlined"
									required
								/>
								<CardActions>
									<Button variant="contained" color="primary" type="submit" style={style.login}>
										Login
									</Button>
								</CardActions>
								<Typography>
									Not a member?{' '}
									<Link to="/register">
										<span className="glyphicon glyphicon-plus-sign" aria-hidden="true" /> Register
										here
									</Link>
								</Typography>
							</form>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

export default Login;