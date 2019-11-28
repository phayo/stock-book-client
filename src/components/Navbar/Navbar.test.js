import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react'
import Navbar from './Navbar';

afterEach(cleanup);

describe('Navbar Component', () => {
    test('Does not error given no props', () => {
        expect(() => render(<Navbar />)).not.toThrowError();
    });
})