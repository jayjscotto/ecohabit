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

  componentDidMount() {
    console.log('hello')
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    axios
      .get('/api/survey')
      .then(res => {
        this.props.history.push('/');
        console.log(res);
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push('/login');
        }
      });
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
