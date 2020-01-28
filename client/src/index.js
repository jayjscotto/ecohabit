import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Login from './Components/Login';
import Register from './Components/Register';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route path="/" component={App} />
		</div>
	</Router>,
	document.getElementById('root')
);
