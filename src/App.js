import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Screens/'
import Login from './Screens/login'
import Daftar from './Screens/daftar'


export default class RouterApp extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/daftar">
            <Daftar />
          </Route>
        </Switch>
      </Router>
    )
  }
}

