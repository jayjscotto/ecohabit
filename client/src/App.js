import React, { Component } from 'react';
import axios from 'axios';
import Daily from './Pages/Daily';
import Appbar from './Components/Appbar';
import { Link } from 'react-router-dom';
import Tabs from './Components/Tabs';
import IntakeSurvey from './Pages/IntakeSurvey';
import Title from './Components/Title';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}

	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
		axios
			.get('/api/survey')
			.then((res) => {
				this.props.history.push('/daily');
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
			<div className="container">
				<Appbar logout={this.logout}/>

					<Link to="/" component={Daily}>
						Daily
					</Link>
					<Link to="/survey">
						Survey
					</Link>

				{/* <Route path="/" component={Daily} />
						<Link to="/survey" component={IntakeSurvey}>
							About
						</Link>
						<Route path="/title" component={Title} /> */}
				{/* <Route path='/reminders' component={Reminders} />
					<Route path='/account-info' component={Account} /> */}
				{/* <Tabs /> */}
			</div>
		);
	}
}

export default App;
