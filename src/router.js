import React from 'react';
import { Router, Route } from 'dva/router';
import HjcLogin from './login/HjcLogin';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HjcLogin} />
    </Router>
  );
}

export default RouterConfig;