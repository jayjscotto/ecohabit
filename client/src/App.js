import React, { Component } from 'react';
import axios from 'axios';
import Daily from './Pages/Daily';
import Appbar from './Components/Appbar';
<<<<<<< HEAD
import { Router as BrowserRouter, Switch, Link } from 'react-router-dom';
=======
>>>>>>> 0b7aa134af78c2fcf798626ace4214197e4d41c5
import Tabs from './Components/Tabs';

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
					<Route path='/account-info' component={Account}/>
				</Switch>
				<Tabs />
			</div>
			</Router>
		);
	}
}

export default App;