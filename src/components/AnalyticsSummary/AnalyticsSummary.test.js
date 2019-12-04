import React from 'react'
import {render, cleanup} from '@testing-library/react'
import AnalyticsSummary  from './AnalyticsSummary'



afterEach(cleanup);

describe('Analytics component', () => {

    test('Does not error given no props', () => {

        expect(() => render(<AnalyticsSummary/>)).not.toThrowError();

    });

    test('Renders the correct text for the correct prop ',() => {

        const data = {
            analyticSummary: [{service:"caterine", amountReceived: 35000, profit: 15000, proftPercentage: 45},
            {service:"House wiring", amountReceived: 65000, profit: 25000, proftPercentage: 65},
            {service:"House cleaning", amountReceived: 445000, profit: 115000, proftPercentage: 45}],

        }

          const {getByText, rerender} = render(<AnalyticsSummary data={data}/>);

        expect(getByText(/caterine/)).not.toBeNull();
        expect(getByText(/65,000/)).not.toBeNull();
        expect(getByText(/House wiring/)).not.toBeNull();
        expect(getByText(/445,000/)).not.toBeNull();


    });

})

