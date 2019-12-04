import React from 'react';
import {render, cleanup} from '@testing-library/react';
import AnalyticsCardForEachService from './AnalyticsCardForEachService';
import {FaConciergeBell} from 'react-icons/fa';


afterEach(cleanup);

describe('AnalyticsCardForEachService component', () => {

    test('Does not error given no props', () => {
        expect(() => render(<AnalyticsCardForEachService/>)).not.toThrowError();
    })

    test('Renders correct text for the correct prop', () => {

        const details = {
            icon : <FaConciergeBell/>,
            description: "Catering",
            amount:"235"
        }

        const {getByText} = render(<AnalyticsCardForEachService details={details}/>)
        expect(getByText(/Catering/)).not.toBeNull();
        expect(getByText(/235/)).not.toBeNull();
    })
} )