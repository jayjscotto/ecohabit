import React, { Component } from 'react';
//import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';
//import Fields from './registerFields';
import RegisterPage from './register/registerPage';

class Register extends Component {
	render() {
		return <RegisterPage />;
	}
}

export default Register;

// const useStyles = makeStyles((theme) => ({
// 	margin: {
// 		margin: theme.spacing(1)
// 	}
// }));

// class Create extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			username: '',
// 			password: '',
// 			firstName: '',
// 			lastName: '',
// 			zipCode: ''
// 		};
// 	}
// 	onChange = (e) => {
// 		const state = this.state;
// 		state[e.target.name] = e.target.value;
// 		this.setState(state);
// 	};

// 	onSubmit = (e) => {
// 		e.preventDefault();

// 		const { username, password, firstName, lastName, zipCode } = this.state;

// 		axios.post('/api/auth/register', { username, password, firstName, lastName, zipCode }).then((result) => {
// 			this.props.history.push('/login');
// 		});
// 	};

// 	render() {
// 		// below is my original export
// 		const { username, password, firstName, lastName, zipCode } = this.state;
// 		return (
// 			<div className="container">
// 				<Fields />

// 				<form className="form-signin" onSubmit={this.onSubmit}>
// 					<h2 className="form-signin-heading">Register</h2>
// 					<label className="sr-only">Email address</label>
// 					<input
// 						type="email"
// 						className="form-control"
// 						placeholder="Email address"
// 						name="username"
// 						value={username}
// 						onChange={this.onChange}
// 						required
// 					/>
// 					<label className="sr-only">Password</label>
// 					<input
// 						type="password"
// 						className="form-control"
// 						placeholder="Password"
// 						name="password"
// 						value={password}
// 						onChange={this.onChange}
// 						required
// 					/>
// 					<button className="btn btn-lg btn-primary btn-block" type="submit">
// 						Register
// 					</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

//  export default Create;
