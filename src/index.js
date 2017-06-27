import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {Provider} from 'react-redux';

import Store from './store';
import App from './components/app/app';
import Dashboard from './components/dashboard/index.js';
import Settings from './components/settings/index.js';
import Users from './components/users/index.js';
import Error404 from './components/404/index';

const history = createHistory()
const middleware = routerMiddleware(history)
const Root = () => (
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/users" component={Users}/>
      </App>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
