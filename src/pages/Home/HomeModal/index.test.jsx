import { constAllCurrenciesListMock, contsUsdCourseMock } from '@constants/constCurrenciesMock';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Modal from './index';

describe('Modal Currency Card rendering', () => {
  test('Should check the items', () => {
    render(
      <Modal
        isOpen={true}
        closeModalWindow={() => {}}
        convertFromTo={{ from: 'usd', to: 'usd' }}
        allCurrenciesList={constAllCurrenciesListMock}
        usdCourse={contsUsdCourseMock}
      />
    );

    expect(screen.getByText('Currency Converter')).toBeTruthy();
    expect(screen.getByText('X')).toBeTruthy();
    expect(screen.getByText('Sum')).toBeTruthy();
    expect(screen.getByText('From')).toBeTruthy();
    expect(screen.getByText('To')).toBeTruthy();
  });
});
