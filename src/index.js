import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '@store';

import App from './App.jsx';
import Global from './GlobalStyled.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

if ('development' && import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
