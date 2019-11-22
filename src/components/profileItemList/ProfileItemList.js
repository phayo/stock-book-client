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


const Container = styled.div`
padding: 10px;
    div{
        font-size: 20px;
        color: #1b1f73;
        p{
            display: flex;
            align-items: center;
            margin: 0;
            padding: 10px 0;
            border-bottom: 1px solid #cccccc;
            span{
                margin-left: 10px;
            }
        }
    }
`;

ProfileItemList.defaultProps = {
    info: {
        name: "Victor",
        phone: "+2348085492459",
        email: "ovisco360@gmail.com"
    }
  };
  
  ProfileItemList.propTypes= {
    info: PropTypes.object
  };