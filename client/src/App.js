import React, { Component } from 'react';
import Daily from './Pages/Daily';
import UserDash from './Components/userDash/userDash';
import Login from './Components/Login';
import Register from './Components/Register';
import Utilities from './Pages/Utilities';
import { withRouter, Switch, Route } from 'react-router-dom';
import API from './Utils/clientauth';
import LandingPage from './Components/landingPage/landingMaster';

class App extends Component {
	componentDidMount() {
		const user = JSON.parse(API.getLocalStorage('eco-user'));
		if (user) {
			API.getDailyCheck().then((res) => {
				this.props.history.push('/');
			});
			//   .catch(error => {
			//     if (error.response.status === 401) {
			//       this.props.history.push('/login');
			//     }
			//   });
		} else {
			this.props.history.push('/welcome');
		}
	}

	render() {
		return (
			<div className="container">
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/utilities" component={Utilities} />
					<Route exact path="/account" component={UserDash} />
					<Route exact path="/welcome" component={LandingPage} />
					<Route exact path="/" component={Daily} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
