import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Service from './Service';

afterEach(cleanup);

describe('ServiceCard Component', () => {
    test('Does not error given no props', () => {
      expect(() => render(<Service />)).not.toThrowError();
    });
  
    test('Renders the correct text for the correct prop ', () => {
      const details = {
        status: false,
        dateCreated: '12-Dec-29',
        balance: 50000000,
        initialCharge: 4350000
      };
      const { getByText, rerender } = render(<Service details={details} />);
  
      expect(getByText(/50000000/)).not.toBeNull();
      expect(getByText(/Completed/)).not.toBeNull();
      expect(getByText(/12-Dec-29/)).not.toBeNull();
  
      const details1 = {
        status: true,
        dateCreated: '12-Jan-29',
        balance: 4000000,
        initialCharge: 4350000
      };
      rerender(<Service details={details1} />);
      expect(getByText(/In-Progress/)).not.toBeNull();
      expect(getByText(/4000000/)).not.toBeNull();
      expect(getByText(/12-Jan-29/)).not.toBeNull();
    });
  
  });