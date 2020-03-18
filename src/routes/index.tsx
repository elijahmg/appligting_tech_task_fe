import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';

export const Routes: FC = () => (
  <Switch>
    <Route path="/:teamName" children={<HomePage/>}/>
    <Route path="/" children={<HomePage/>}/>
  </Switch>
);