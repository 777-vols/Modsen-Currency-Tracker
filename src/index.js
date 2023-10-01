import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import store from '@store';

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

if ('development' && import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
