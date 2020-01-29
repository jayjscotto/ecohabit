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
			<App/>
		<Tabs/>
	</Router>,
	document.getElementById('root')
);
