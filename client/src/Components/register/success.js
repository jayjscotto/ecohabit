import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import axios from 'axios';

export class Success extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Success!" />
					<h1>You're all signed up!</h1>
					<p>
						Please Proceed to <em>login</em>
					</p>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15
	}
};
export default Success;
