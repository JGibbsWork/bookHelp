import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Feed from '../SearchFeed/Feed.js';
import Form from '../SearchForm/form.js'

export default function AppRouter () {
  return (
    <Router>
          <Switch>
            <Route path="/feed" component={Feed} />
            <Route path="/post" component={Form} />
          </Switch>
    </Router>
  )
}
//<Route exact path="/" component={Home} />