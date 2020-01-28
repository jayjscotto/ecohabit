import React, { Component } from 'react';
import axios from 'axios';
import Daily from './Pages/Daily';
import Appbar from './Components/Appbar';
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
			<div className="container">
				<Appbar 
					logout={this.logout}
				/>
				<Daily />
				<Tabs />
			</div>
		);
	}
}

export default App;