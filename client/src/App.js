import React, { Component } from 'react';
import Daily from './Pages/Daily';
import UserDash from './Components/userDash/userDash';
import Login from './Components/Login';
import Register from './Components/Register';
import Reminder from './Pages/Reminders';
import { withRouter, Switch, Route } from 'react-router-dom';
import Account from './Pages/Account';
import clientAuth from './Utils/clientauth';

class App extends Component {
	state = {
		user: ''
	};

	componentDidMount() {
		clientAuth.userToken();
		clientAuth
			.giveUserAccess()
			.then((res) => {
				this.props.history.push('/');
			})
			.catch((error) => {
				if (error.response.status === 401) {
					this.props.history.push('/login');
				}
			});
		// clientAuth.getUserData('mattpigs@gmail.com')
		//   .then(res => {
		//     console.log(res);
		//   })
	}

	render() {
		return (
			<div className="container">
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/reminder" component={Reminder} />
					<Route exact path="/" component={Daily} />
					<Route exact path="/account" component={UserDash} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
