import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';

import { store } from './store/store';
import { Routes } from './routes';

import './index.scss';

const history = createBrowserHistory();

/**
 * Init app
 * @constructor
 */
const App: FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes/>
    </Router>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));

declare const module: any;

if (module.hot) {
  module.hot.accept();
}