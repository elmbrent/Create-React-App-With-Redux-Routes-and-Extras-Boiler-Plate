import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import * as reducers from './ducks';

const middleware = applyMiddleware(promise(), thunk);

export default createStore(
  combineReducers(
    {
      ...reducers,
      router: routerReducer
    }
  ),
  middleware
);
