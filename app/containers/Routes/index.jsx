import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from '../Login';
import RedirectRoute from './RedirectRoute';

const List = Loadable({
  loader: () => new Promise(resolve => {
		import('../../components/List').then(list => resolve(list.default));
  }),
  loading: () => (<div>Loading...</div>)
});

const Repos = Loadable({
  loader: () => new Promise(resolve => {
		import('../Repos').then(repos => resolve(repos.default));
  }),
  loading: () => (<div>Loading...</div>)
});

const Main = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Redirect to="/todo" />
        )}
      />
      <RedirectRoute path="/todo" component={List} />
      <RedirectRoute path="/repos" component={Repos} />
      <Route path="*" component={Login} />
    </Switch>
  </div>
);

export default Main;
