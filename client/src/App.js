import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, Paper } from '@material-ui/core';
import Appbar from './Components/Appbar';
import LeftPane from './Components/LeftPane';
import RightPane from './Components/RightPane';
import Tabs from './Components/Tabs';

const style = {
	pane: {
		height: '400px',
		margin: '20px',
		textAlign: 'center',
		fontFamily: 'inherit',
		background: '#4d77f7',
		padding: '40px',
		color: '#ffffff',
		marginTop: '4em',
		marginBottom: '4em'
	}
}

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
				<Appbar 
					logout={this.logout}
				/>
				<Container>
					<Grid container>
						<LeftPane style={style.pane} />
						<RightPane style={style.pane} />
					</Grid>
				</Container>
				<Tabs />
			</div>
		);
	}
}

export default App;