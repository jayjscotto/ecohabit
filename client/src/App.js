import React, { Component } from 'react';
import axios from 'axios';
import Daily from './Pages/Daily';
import Login from './Components/Login';
import Register from './Components/Register';
import { Switch, Route, useHistory } from 'react-router-dom';
import Account from './Pages/Account';
import Appbar from './Components/Appbar';
import { Link } from 'react-router-dom';
import Tabs from './Components/Tabs';
import IntakeSurvey from './Pages/IntakeSurvey';
import Title from './Components/Title';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = props => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       books: []
  //     };
  //   }

//   let history = useHistory();

	// componentDidMount() {
	// 	axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
	// 	axios
	// 		.get('/api/survey')
	// 		.then((res) => {
	// 			this.props.history.push('/daily');
	// 			console.log('YewHaw!');
	// 		})
	// 		.catch((error) => {
	// 			if (error.response.status === 401) {
	// 				this.props.history.push('/login');
	// 			}
	// 		});
	// }

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
