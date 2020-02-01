import React, { Component, useEffect } from 'react';
import axios from 'axios';
import Daily from './Pages/Daily';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, withRouter, Switch, Route } from 'react-router-dom';
import IntakeSurvey from './Pages/IntakeSurvey';
import Title from './Components/Title';
import clientAuth from './Utils/clientauth';

class App extends Component {
	state = {
		user: ''
	}

  componentDidMount() {
    clientAuth.userAuth();
    clientAuth.userLogin(this.props.history);
    clientAuth.userData('mattpigs@gmail.com');
  };

  render() {
    return (
      <div className='container'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/' component={Daily} />
          <Route exact path='/title' component={Title} />
        </Switch>
      </div>
    ) 
  }
};

export default withRouter(App);
