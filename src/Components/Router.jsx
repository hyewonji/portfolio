import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';

export default () => (
    <Router>
      <Navigation />
      <Switch>
        <Route path = '/' exact component={Home}></Route>
        <Route path = '/about' component={About}></Route>
        <Route path = '/projects' component={Projects}></Route>
        <Redirect from = "*" to = "/" />
      </Switch>
    </Router>
);