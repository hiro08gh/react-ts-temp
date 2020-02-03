import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/App';
import MainLayout from '../components/MainLayout';

const Root = () => (
  <MainLayout>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </MainLayout>
);

export default Root;
