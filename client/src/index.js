import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Appbar from './Components/Appbar';
import { UserContextProvider } from './Components/UserContext';
import { CheckinContextProvider } from './Components/CheckinContext';

ReactDOM.render(
  <Router>
    <UserContextProvider>
      <CheckinContextProvider>
        <Appbar />
        <App />
      </CheckinContextProvider>
    </UserContextProvider>
  </Router>,
  document.getElementById('root')
);
