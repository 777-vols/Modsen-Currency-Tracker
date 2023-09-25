import React from 'react';

import { render, screen } from '@testing-library/react';

import Home from './Index';

import '@testing-library/jest-dom';

describe('rendering HomePage', () => {
  test('check text', async () => {
    render(<Home />);

    const headingAction = await screen.findByText('Stocks');
    expect(headingAction).toBeInTheDocument();
    const headingQuote = await screen.findByText('Quotes');
    expect(headingQuote).toBeInTheDocument();
  });
});
