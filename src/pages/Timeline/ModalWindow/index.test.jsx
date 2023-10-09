import { render, screen } from '@testing-library/react';
import React from 'react';

import TimelineModal from './index';

describe('Timeline Currency Card rendering', () => {
  test('Should check the items', () => {
    render(
      <TimelineModal
        isOpen={true}
        closeModalWindow={() => {}}
        handleInputLow={() => {}}
        handleInputHigh={() => {}}
        inputsData={{}}
      />
    );

    expect(screen.getByText('X')).toBeTruthy();
    expect(screen.getByText('Day: 1')).toBeTruthy();
    expect(screen.getByText('Day: 2')).toBeTruthy();
    expect(screen.getByText('Day: 3')).toBeTruthy();
    expect(screen.getByText('Day: 4')).toBeTruthy();
    expect(screen.getByText('Day: 5')).toBeTruthy();
    expect(screen.getByText('Day: 6')).toBeTruthy();
    expect(screen.getByText('Day: 7')).toBeTruthy();
    expect(screen.getByText('Day: 8')).toBeTruthy();
    expect(screen.getByText('Day: 9')).toBeTruthy();
    expect(screen.getByText('Day: 10')).toBeTruthy();
    expect(screen.getByText('Day: 11')).toBeTruthy();
    expect(screen.getByText('Day: 12')).toBeTruthy();
    expect(screen.getByText('Day: 13')).toBeTruthy();
    expect(screen.getByText('Day: 14')).toBeTruthy();
    expect(screen.getByText('Day: 15')).toBeTruthy();
    expect(screen.getByText('Day: 16')).toBeTruthy();
    expect(screen.getByText('Day: 17')).toBeTruthy();
    expect(screen.getByText('Day: 18')).toBeTruthy();
    expect(screen.getByText('Day: 19')).toBeTruthy();
    expect(screen.getByText('Day: 20')).toBeTruthy();
    expect(screen.getByText('Day: 21')).toBeTruthy();
    expect(screen.getByText('Day: 22')).toBeTruthy();
    expect(screen.getByText('Day: 23')).toBeTruthy();
    expect(screen.getByText('Day: 24')).toBeTruthy();
    expect(screen.getByText('Day: 25')).toBeTruthy();
    expect(screen.getByText('Day: 26')).toBeTruthy();
    expect(screen.getByText('Day: 27')).toBeTruthy();
    expect(screen.getByText('Day: 28')).toBeTruthy();
    expect(screen.getByText('Day: 29')).toBeTruthy();
    expect(screen.getByText('Day: 30')).toBeTruthy();
  });
});
