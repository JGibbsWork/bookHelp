import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Feed from '../SearchFeed/Feed';
import Form from '../SearchForm/Form'
import Home from '../Home/Home'

export default function Routee () {
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
