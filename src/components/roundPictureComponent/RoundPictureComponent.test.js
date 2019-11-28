import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react'
import RoundPictureComponent from './RoundPictureComponent';

afterEach(cleanup);

describe('RoundPictureComponent Component', () => {
    test('Does not error given no props', () => {
        expect(() => render(<RoundPictureComponent />)).not.toThrowError();
    });

    test('Renders using the default prop when no props are passed', () => {
        const { getByText, getByAltText} = render(<RoundPictureComponent />);
        expect(getByAltText(/Profile picture/)).not.toBeNull();
        // expect(getByText(/man.jpg/)).not.toBeNull();
        // expect(getByText(/v1567675229/)).not.toBeNull();
        // expect(getByText(/upload/)).not.toBeNull();
    })

    // test('Renders correctly for a given prop', () => {
    //     const picture1 = "https://res.cloudinary.com/doctor-vee/image/upload/v1554915401/PIC_450px.jpg";
    //     const picture2 = "https://res.cloudinary.com/doctor-vee/image/upload/v1554362761/sample.jpg";

    //     const { getByText, rerender } = render(<RoundPictureComponent picture={picture1} />);
    //     expect(getByText(/https:\/\/res.cloudinary.com\/doctor-vee\/image\/upload\/v1554915401\/PIC_450px.jpg/)).not.toBeNull();

    //     rerender(<RoundPictureComponent info={picture2} />);
    //     expect(getByText(/https:\/\/res.cloudinary.com\/doctor-vee\/image\/upload\/v1554362761\/sample.jpg/)).not.toBeNull();
    // })
})