import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import Register from './Components/Register';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</div>
	</Router>,
	document.getElementById('root')
);
