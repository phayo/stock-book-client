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

