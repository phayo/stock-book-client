import React from 'react'
import styled from 'styled-components'
import { FaHome, FaChartLine, FaUserCircle, FaList } from 'react-icons/fa'

export default function Navbar() {
    return (
        <Container>
            <div>
            <FaHome />
            <FaList />
            <FaChartLine />
            <FaUserCircle />
            </div>
        </Container>
    )

}


const Container = styled.div`
padding: 10px 0px;
position: absolute;
bottom: 0px;
width: 100vw;
-webkit-box-shadow: 0px -1px 6px 0px rgba(230,230,230,1);
-moz-box-shadow: 0px -1px 6px 0px rgba(230,230,230,1);
box-shadow: 0px -1px 6px 0px rgba(230,230,230,1);
/* border: 1px solid black; */
    div{
        font-size: 20px;
        display: flex;
        justify-content: space-evenly
    }
`;