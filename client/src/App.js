import React, { Component } from 'react';
import axios from 'axios';
import Daily from './Pages/Daily';
import Appbar from './Components/Appbar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tabs from './Components/Tabs';
import IntakeSurvey from './Pages/IntakeSurvey';

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
					<Route exact path='/' component={Daily} />
					<Route exact path='/intake' component={IntakeSurvey} />
					{/* <Route path='/reminders' component={Reminders} />
					<Route path='/account-info' component={Account} /> */}
				</Switch>
				<Tabs />
			</div>
			</Router>
		);
	}
}

export default App;