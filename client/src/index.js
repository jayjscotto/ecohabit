import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Appbar from './Components/Appbar';
import Login from './Components/Login';
import Register from './Components/Register';
import IntakeSurvey from './Pages/IntakeSurvey';
import Title from './Components/Title';

ReactDOM.render(
	<Router>
		<Appbar />
		<div>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/" component={App} />
			{/* changed */}
			<Route exact path="/survey" component={IntakeSurvey} />
			<Route exact path="/title" component={Title} />
		</div>
	</Router>,
	document.getElementById('root')
);
