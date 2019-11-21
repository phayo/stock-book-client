import React from 'react'
import styled from 'styled-components'
import { FaEdit, FaPhoneSquare, FaEnvelopeSquare, FaSignOutAlt } from 'react-icons/fa'
import PropTypes from 'prop-types';

function Line(props) {
    return (
        <p>
            {props.image}
            <span>{props.text}</span>
        </p>
    )
}

export default function ProfileItemList({ info }) {
    const { name, phone, email } = info
    return (
        <Container>
            <div>
                <Line text={name} image={<FaEdit />} />
                <Line text={phone} image={<FaPhoneSquare />} />
                <Line text={email} image={<FaEnvelopeSquare />} />
                <Line text="Logout" image={<FaSignOutAlt />} />
            </div>
        </Container>
    )

}
