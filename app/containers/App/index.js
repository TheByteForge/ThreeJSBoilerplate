/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import StyleGuide from 'containers/StyleGuide/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import AppWrapper from './AppWrapper';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/StyleGuide" component={StyleGuide} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
