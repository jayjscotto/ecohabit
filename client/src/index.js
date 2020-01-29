import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Appbar from './Components/Appbar';
import Daily from './Pages/Daily';
import Login from './Components/Login';
import Register from './Components/Register';
import IntakeSurvey from './Pages/IntakeSurvey';
import Title from './Components/Title';
import Tabs from './Components/Tabs';

ReactDOM.render(
	<Router>
		<div>
			<Appbar />
		</div>

			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/" component={Daily} />
				<Route exact path="/survey" component={IntakeSurvey} />
				<Route exact path="/title" component={Title} />
			</Switch>
		<Tabs/>
	</Router>,
	document.getElementById('root')
);
