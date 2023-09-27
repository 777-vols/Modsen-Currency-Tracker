/* eslint-disable import/no-import-module-exports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '@store/index.js';

import ErrorBoundary from './components/ErrorBoundary/Index.jsx';
import App from './App.jsx';
import Global from './GlobalStyled.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <HashRouter>
      <Global />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </ErrorBoundary>
);

if ('development' && module && module.hot) {
  module.hot.accept();
}
