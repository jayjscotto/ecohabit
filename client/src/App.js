import React, { Component } from 'react';
import axios from 'axios';

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
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">
							EcoHabit &nbsp;
							{localStorage.getItem('jwtToken') && (
								<button className="btn btn-primary" onClick={this.logout}>
									Logout
								</button>
							)}
						</h3>
						<hr />
					</div>
					<div className="panel-body">
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