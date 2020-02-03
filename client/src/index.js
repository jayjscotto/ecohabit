import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Appbar from './Components/Appbar';

ReactDOM.render(
  <Router>
    <Appbar />
    <App />
  </Router>,
  document.getElementById('root')
);
