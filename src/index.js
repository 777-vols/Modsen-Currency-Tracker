import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Global from './GlobalStyled.js';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/Index.jsx';
import { Provider } from 'react-redux';
import store from '@store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Global />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
);

if ('development' && module && module.hot) {
  module.hot.accept();
}
