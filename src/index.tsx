import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Routes } from './routes';

import './index.scss';

const history = createBrowserHistory();

const App: FC = () => (
  <Router history={history}>
    <Routes/>
  </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'));

declare const module: any;

if (module.hot) {
  module.hot.accept();
}