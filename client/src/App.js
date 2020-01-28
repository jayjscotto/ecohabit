import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, Paper } from '@material-ui/core';
import Appbar from './Components/Appbar';
import { Router as BrowserRouter, Switch, Link } from 'react-router-dom';
import Tabs from './Components/Tabs';

const style = {
	pane: {
		height: '500px',
		margin: '20px',
		textAlign: 'center',
		fontFamily: 'inherit',
		padding: '40px',
		color: 'FBFEF9',
		marginTop: '6em',
		marginBottom: '4em'
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
		};
	}

	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
		axios
			.get('/api/survey')
			.then((res) => {
				console.log('YewHaw!');
				console.log(res);
				
			})
			.catch((error) => {
				if (error.response.status === 401) {
					this.props.history.push('/login');
				}
			});
	}

	logout = () => {
		localStorage.removeItem('jwtToken');
		window.location.reload();
	};

	render() {
		return (
			<Router>
			<div className="container">
				<Appbar 
					logout={this.logout}
				/>
				<Switch>
					<Route exact path='/' component={Daily}/>
					<Route path='/reminders' component={Reminders}/>
				</Switch>
				<Tabs />
			</div>
			</Router>
		);
	}
}

export default App;