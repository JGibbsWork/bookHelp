import React from
import { withRouter } from 'react-router-dom';
import ResList from '../SearchFeed/ResList';
import AppRouter from './Routes.js';


const WithRouterApp = withRouter(ResList);

export default function BookHelp () {
  <AppRouter>
    <WithRouterApp />
  </AppRouter>
}