import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Transaction from './Transaction';

afterEach(cleanup);

describe('Transaction Component', () => {
  test('Does not error given no props', () => {
    expect(() => render(<Transaction />)).not.toThrowError();
  });

  test('Renders the correct text for the correct prop ', () => {
    const details = {
      description: 'Purchase of 20Ltrs of petroluem',
      amount: -40000,
      date: '26-Nov-2019',
    };
    const { getByText, rerender } = render(<Transaction details={details} />);

    expect(getByText(/Purchase of 20Ltrs of petroluem/)).not.toBeNull();
    expect(getByText(/40000/)).not.toBeNull();
    expect(getByText(/26-Nov-2019/)).not.toBeNull();

    const details1 = {
      description: 'Advanced payment',
      amount: 50000,
      date: '26-Nov-2019',
    };
    rerender(<Transaction details={details1} />);
    expect(getByText(/50000/)).toThrowError();
  });

});
