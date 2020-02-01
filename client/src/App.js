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
    clientAuth.userToken();
    clientAuth.giveUserAccess()
      .then(res => {
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push('/login');
        }
      });
    clientAuth.getUserData('mattpigs@gmail.com')
      .then(res => {
        console.log(res);
      })
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
