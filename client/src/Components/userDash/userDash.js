import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import clientauth from '../Utils/clientauth';

class UserDash extends Component {
 componentDidMount () => {
  const localStorageObject = clientauth.getLocalStorage('eco-user');
  const user = JSON.parse(localStorageObject)._id;
 } 
}

export default UserDash;