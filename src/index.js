import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


import Store from './store';
import App from './components/app/app';
import Login from './components/login/index.js';
import Dashboard from './components/dashboard/index.js';
import Error404 from './components/404/index';

const Root = () => (
  <Provider store={Store}>
    <App>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </App>
  </Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
