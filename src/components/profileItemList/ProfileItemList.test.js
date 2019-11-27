import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react'
import ProfileItemList from './ProfileItemList';

afterEach(cleanup);

describe('ProfileItemList Component', () => {
    test('Does not error given no props', () => {
        expect(() => render(<ProfileItemList />)).not.toThrowError();
    });

    test('Renders using the default prop when no props are passed', () => {
        const { getByText, rerender } = render(<ProfileItemList />);

        expect(getByText(/Victor/)).not.toBeNull();
        expect(getByText(/\+2348085492459/)).not.toBeNull();
        expect(getByText(/ovisco360@gmail.com/)).not.toBeNull();

    })

    test('Renders correctly for a given prop', () => {
        const info1 = {
            name: "Daniel",
            phone: "+2348012345678",
            email: "peter@gmail.com"
        };
        const info2 = {
            name: "Francisca",
            phone: "+2348030035142",
            email: "philipfrancisca@gmail.com"
        };
        const { getByText, rerender } = render(<ProfileItemList info={info1} />);

        expect(getByText(/Daniel/)).not.toBeNull();
        expect(getByText(/\+2348012345678/)).not.toBeNull();
        expect(getByText(/peter@gmail.com/)).not.toBeNull();

        rerender(<ProfileItemList info={info2} />);
        expect(getByText(/Francisca/)).not.toBeNull();
        expect(getByText(/\+2348030035142/)).not.toBeNull();
        expect(getByText(/philipfrancisca@gmail.com/)).not.toBeNull();
    })
})