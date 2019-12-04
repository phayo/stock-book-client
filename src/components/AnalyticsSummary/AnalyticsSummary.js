import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';



const formatAmount = (amount)=> {
    return ( amount.toLocaleString( { style: 'currency' }));
}

export default function AnalyticSummary({data}) {
    const {analyticSummary} = data;
    return (
        <>
            <Component>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Amount Received</th>
                            <th>Profit</th>
                            <th>profit (%)</th>
                        </tr>
                    </thead>
                    {analyticSummary.map((analytic, index) => (
                    <tbody>
                        <tr key = {index}>
                            <td key= {analytic.service}>{analytic.service}</td>
                            <td key = {analytic.amountReceived}>{formatAmount(analytic.amountReceived) }</td>
                            <td key = {analytic.profit}>{formatAmount(analytic.profit) }</td>
                            <td key = {analytic.proftPercentage}>{analytic.proftPercentage}</td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </Component>
        </>
    )
}

const Component = styled.div`
    background-color: white;
    border-radius: 13px;
    padding:15px;

    font-size:0.8em;
    box-shadow:5px 8px 30px -8px #b2cee9;

    table{
        border-collapse: collapse;
        width: 100%;
    }

     td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th{
    padding: 8px;
  text-align: left;
}

`

AnalyticSummary.defaultProps = {
    data: {
        analyticSummary: [{service:"caterine", amountReceived: 35000, profit: 15000, proftPercentage: 45},
        {service:"House wiring", amountReceived: 65000, profit: 25000, proftPercentage: 65},
        {service:"House cleaning", amountReceived: 445000, profit: 115000, proftPercentage: 45}],

    }


}

AnalyticSummary.propTypes = {
    data : PropTypes.object
}