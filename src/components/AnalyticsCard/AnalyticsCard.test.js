import React from 'react'
import {render, cleanup} from '@testing-library/react'
import Analytics  from './AnalyticsCard'



afterEach(cleanup);

describe('Analytics component', () => {

    test('Does not error given no props', () => {

        expect(() => render(<Analytics/>)).not.toThrowError();

    });

    test('Renders the correct text for the correct prop ',() => {

        const details = {
            leftDescription: 'M Expenses',
            rightDescription: 'M Income',
            expensesAmount: 850,
            incomeAmount: 2750
          };

          const {getByText, rerender} = render(<Analytics details={details}/>);

        expect(getByText(/M Expenses/)).not.toBeNull();
        expect(getByText(/M Income/)).not.toBeNull();
        expect(getByText(/850/)).not.toBeNull();
        expect(getByText(/2,750/)).not.toBeNull();

        const details1 = {
            leftDescription: 'M Expenses',
            rightDescription: 'M Income',
            expensesAmount: 7850,
            incomeAmount: 38750
          };

          rerender(<Analytics details={details1} />);

          expect(getByText(/38,750/)).not.toBeUndefined();
    })

})

