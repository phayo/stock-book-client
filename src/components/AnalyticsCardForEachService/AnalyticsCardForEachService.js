import React from 'react'
import {FaConciergeBell} from 'react-icons/fa'
import styled from "styled-components"
import PropTypes from 'prop-types';

export default function AnalyticsCardForEachService({details}) {
    const {icon, description, amount} = details;
    return (
        <Component>
            <div className="icon">
                {icon}
            </div>
            <h3 >{description}</h3>
            <p>₦ {amount}</p>
        </Component>
    )
}

const Component = styled.div`
    width: 200px;
    box-shadow: 0px 8px 35px -2px #b2cee9;
    border-radius: 12px;
    padding: 15px 16px;

    .icon{
        font-size: 400%;
        color: rgb(248, 125, 9);
    }
    h3{
        margin-top:10px;
        font-size: 1.5em;
        font-weight:bolder;
    }
    p{
        font-size: 1.2em;
    }

`
AnalyticsCardForEachService.defaultProps = {
    details: {
        icon : <FaConciergeBell/>,
        description: "Catering",
        amount:"235"
    }

}
AnalyticsCardForEachService.propTypes = {
    details: PropTypes.object
}
