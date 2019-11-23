import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


export default function RoundPictureComponent({ picture }) {
    return (
        <Container>
            <div>
                <img alt="Profile picture" src={picture} />
            </div>
        </Container>
    )

}


const Container = styled.div`
padding: 10px;
background: #0797ff;
display: flex;
justify-content: center;
    img{
        width: 250px;
        border-radius: 50%;
    }
`;

RoundPictureComponent.defaultProps = {
    picture: "https://res.cloudinary.com/doctor-vee/image/upload/v1567675229/man.jpg"
  };
  
  RoundPictureComponent.propTypes= {
    info: PropTypes.string
  };