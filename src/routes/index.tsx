import React, { FC } from 'react';
import { Switch, Route } from 'react-router';

import { HomePage } from '../pages/HomePage';

export const Routes: FC = () => (
  <Switch>
    <Route path="/"><HomePage/></Route>
    <Route path="/:teamName"><HomePage/></Route>
  </Switch>
);