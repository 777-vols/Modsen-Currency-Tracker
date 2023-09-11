import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Global from './GlobalStyled.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>
);

if ('development' && module && module.hot) {
  module.hot.accept();
}
