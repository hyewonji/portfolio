import React from "react";

import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Navigation from './Navigation';

import Introduce from '../Pages/Introduce';

import About from '../Pages/About';

import Projects from '../Pages/Projects';

import Contact from './Contact';

import { Helmet } from 'react-helmet';


export default () => (
    <Router>
      <Helmet>
        <link rel='icon' href="https://img.icons8.com/doodle/50/000000/tulip.png" />
        <title>CodeMon</title>
      </Helmet>
      <Navigation />
      <Switch>
        <Route path = '/' exact component={Introduce}></Route>
        <Route path = '/about' component={About}></Route>
        <Route path = '/projects' component={Projects}></Route>
        <Redirect from = "*" to = "/" />
      </Switch>
      <Contact />
    </Router>
);