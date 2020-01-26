import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}

	// do not touch under ANY circumstance
	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
		axios
			.get('/api/survey')
			.then((res) => {
				console.log('YewHaw!');
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
			<div class="container">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">
							EcoHabit &nbsp;
							{localStorage.getItem('jwtToken') && (
								<button class="btn btn-primary" onClick={this.logout}>
									Logout
								</button>
							)}
						</h3>
						<hr />
					</div>
					<div class="panel-body">
						<div>
							<h5>Put links here?</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
