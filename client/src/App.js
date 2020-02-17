import React, { useContext, useEffect } from 'react';
import Daily from './Pages/Daily';
import UserDash from './Components/userDash/userDash';
import Login from './Components/Login';
import Register from './Components/Register';
import Utilities from './Pages/Utilities';
import { withRouter, Switch, Route } from 'react-router-dom';
import API from './Utils/clientauth';
import { UserContext } from './Components/UserContext';
import { CheckinContext } from './Components/CheckinContext';


const App = props => {
  const { setUser } = useContext(UserContext);
  const { setDailyCheck } = useContext(CheckinContext);

  useEffect(() => {
    const userObj = JSON.parse(API.getLocalStorage('eco-user'));
    if (userObj) {
      setUser(userObj);
      API.getDailyCheck().then(results => {
        setDailyCheck(results.data);
      })
      
    } else {
      props.history.push('/login')
    }
  }, // eslint-disable-next-line 
  []);

  return (

      <div className='container'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/utilities' component={Utilities} />
          <Route exact path='/' component={Daily} />
          <Route exact path='/account' component={UserDash} />
        </Switch>
      </div>

  );
};

export default withRouter(App);
