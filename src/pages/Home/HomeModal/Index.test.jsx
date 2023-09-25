import React from 'react';

import { allCurrenciesListMock, usdCourseMock } from '@constants/currenciesMock';
import { render, screen } from '@testing-library/react';

import Modal from './Index';

describe('Modal Currency Card rendering', () => {
  test('Should check the items', () => {
    render(
      <Modal
        isOpen={true}
        closeModalWindow={() => {}}
        convertFromTo={{ from: 'usd', to: 'usd' }}
        allCurrenciesList={allCurrenciesListMock}
        usdCourse={usdCourseMock}
      />
    );

    expect(screen.getByText('Currency Converter')).toBeTruthy();
    expect(screen.getByText('X')).toBeTruthy();
    expect(screen.getByText('Sum')).toBeTruthy();
    expect(screen.getByText('From')).toBeTruthy();
    expect(screen.getByText('To')).toBeTruthy();
  });
});
