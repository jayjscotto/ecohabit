import React, { Component, useContext, useEffect } from 'react';
import Daily from './Pages/Daily';
import UserDash from './Components/userDash/userDash';
import Login from './Components/Login';
import Register from './Components/Register';
import Utilities from './Pages/Utilities';
import { withRouter, Switch, Route } from 'react-router-dom';
import API from './Utils/clientauth';
import  {UserContext, UserContextProvider} from './Components/UserContext';
import { CheckinContextProvider } from './Components/CheckinContext';

const App = props => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userObj = JSON.parse(API.getLocalStorage('eco-user'));
    if (userObj) {
      API.getDailyCheck().then(res => {
        setUser(userObj);
        this.props.history.push('/');
      });
    } else {
      this.props.history.push('/login');
    }
  });

  return (
    <UserContextProvider>
      <CheckinContextProvider>
          <div className='container'>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/utilities' component={Utilities} />
              <Route exact path='/' component={Daily} />
              <Route exact path='/account' component={UserDash} />
            </Switch>
          </div>
      </CheckinContextProvider>
    </UserContextProvider>
  );
};

export default withRouter(App);
