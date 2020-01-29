import React, { Component } from 'react';
import axios from 'axios';
import Daily from './Pages/Daily';
import Login from './Components/Login';
import Register from './Components/Register';
import { Switch, Route, useHistory } from 'react-router-dom';
import Tabs from './Components/Tabs';
import IntakeSurvey from './Pages/IntakeSurvey';
import Title from './Components/Title';

const App = props => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       books: []
  //     };
  //   }

  let history = useHistory();

  const componentDidMount = () => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    axios
      .get('/api/survey')
      .then(res => {
        history.push('/daily');
        console.log('YewHaw!');
        console.log(res);
      })
      .catch(error => {
        if (error.response.status === 401) {
          history.push('/login');
        }
      });
  };

  return (
    <div className='container'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Daily} />
        <Route exact path='/survey' component={IntakeSurvey} />
        <Route exact path='/title' component={Title} />
      </Switch>
    </div>
  );
};

export default App;
