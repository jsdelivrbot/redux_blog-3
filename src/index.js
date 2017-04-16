import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//tells react router how to interpret changes to the URL
//browser history - react interprets everything after the protocol
//hash history - everything after a hash gets interpreted
//memory history - doesn't use the URL at all
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
