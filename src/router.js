import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import MainLayout from './routes/MainLayout'
import HomePage from './routes/HomePage'
import CompetitionPage from './routes/CompetitionPage'
import CompetitionList from './routes/CompetitionList'
import ActivityPage from './routes/ActivityPage'
import LoginPage from './routes/LoginPage'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/competition" component={CompetitionPage}/>
        <Route path="/activity" component={ActivityPage} />
      </Route>
    </Router>
  );
};
