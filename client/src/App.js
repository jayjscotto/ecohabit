import React, { Component } from 'react';
import Daily from './Pages/Daily';
import UserDash from './Components/userDash/userDash';
import Login from './Components/Login';
import Register from './Components/Register';
import Reminder from './Pages/Reminders';
import { withRouter, Switch, Route } from 'react-router-dom';
import API from './Utils/clientauth';

class App extends Component {
  
  

  componentDidMount() {
    const user = JSON.parse(API.getLocalStorage('eco-user'));
    if (user) {
      API.getDailyCheck(user._id)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push('/login');
        }
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/reminder' component={Reminder} />
          <Route exact path='/' component={Daily} />
          <Route exact path='/account' component={UserDash} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
