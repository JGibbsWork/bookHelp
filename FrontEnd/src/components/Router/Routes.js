import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header.js';
import Feed from '../SearchFeed/Feed.js';
import Form from '../SearchForm/Form.js'
import Home from '../Home/Home.js'

export default function AppRouter () {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/post" component={Form} />
      </Switch>
    </Router>
  )
}
