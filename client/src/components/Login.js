import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormInput, FormButton, FormCard, FormCardContent, FormAction } from '../Components/FormElements';
import { Grid, CardActions, Typography, Card } from '@material-ui/core';

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
		console.log({ userName, password });

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

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
        {/* <Appbar /> */}
        <Grid item>
          <FormCard>
            <FormCardContent>
            <form className="form-signin" onSubmit={this.onSubmit}>
              {message !== '' &&
                <div className="alert alert-warning alert-dismissible" role="alert">
                  { message }
                </div>
              }
              <FormAction>Please sign in</FormAction>
              <FormInput
                id="outlined-password-input"
                label="Email Address"
                name="userName"
                value={userName}
                onChange={this.onChange}
                type="email"
                autoComplete="current-userName"
                required
              />
              <FormInput
                id="outlined-password-input"
                label="Password"
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                autoComplete="current-password"
                required 
              />
              <CardActions>
                <FormButton type="submit">Login</FormButton>
              </CardActions>
              <Typography>
                Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
              </Typography>
            </form>
            </FormCardContent>
          </FormCard>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
