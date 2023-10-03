import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@store/index.js';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar rendering', () => {
  test('Should check nav items values', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Timeline')).toBeTruthy();
    expect(screen.getByText('Bank card')).toBeTruthy();
    expect(screen.getByText('Contato')).toBeTruthy();
  });
});
