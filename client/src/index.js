import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Appbar from './Components/Appbar';
import Tabs from './Components/Tabs';

ReactDOM.render(
  <Router>
    <Appbar />
    <App />
    {/* <Tabs /> */}
  </Router>,
  document.getElementById('root')
);
