import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';


export default function Analytics({ details }) {
    const {leftDescription,rightDescription,expensesAmount,incomeAmount} = details;

    const total = (expensesAmount + incomeAmount);
    const percentage_right = (expensesAmount/total)*100;
    const percentage_left = (incomeAmount/total)*100;


    return (
        <Component>
            <div className="left__cover">
                <div className="icon__cover">
                    <i className="material-icons">remove_circle_outline</i>
                </div>
                <div className="amount__cover__left">
                    <h3>${expensesAmount}</h3>
                </div>
                <p className="left__m__expenses">{leftDescription}</p>
                <div style={{width: percentage_right}} className="small__horizontal__line"></div>
            </div>
            <div className="right__cover">
                <div className="icon__cover">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <div className="amount__cover__right">
                    <h3>${incomeAmount}</h3>
                </div>
                <p className="right__m__expenses">{rightDescription}</p>
                <div style={{width: percentage_left}} className="small__horizontal__line"></div>
            </div>
        </Component>
    )
}


const Component = styled.div`
    display: flex;
    width: 100%;
    justify-content:space-between;
    .left__cover{
        background-image: linear-gradient(to top, #0e54d6, #2596f8 );
        width:48%;
        border-radius:25px 5px 5px 25px;
        padding:30px 5px 30px 25px;
        box-shadow:-2px 8px 30px -8px #b2cee9;
    }
    .icon__cover{
        padding:8px;
        width:45px;
        height:45px;
        border-radius:100%;
        background-color: #7bbef7;
        /* text-align:center; */
        i{
            font-size:28px;
            color: whitesmoke;
        }
    }

    .amount__cover__left{
        margin-top:20px;
        h3{
            font-size:2.0em;
            color:whitesmoke;
        }

    }
    .left__m__expenses{
            font-size:1.5em;
            color:whitesmoke;
        }

    .small__horizontal__line{
        height:4.5px;
        background-color: rgb(43, 167, 250);
        margin-top: 8px;
        border-radius: 5px;
    }

    .right__cover{
        width:49%;
        border-radius:5px 25px 25px 5px;
        padding:30px 5px 30px 25px;
        box-shadow:5px 8px 30px -8px #b2cee9;
    }
    .right__m__expenses{
        font-size:1.5em;
    }
    .amount__cover__right{
        margin-top:20px;
        h3{
            font-size:2.0em;
        }
    }

`

Analytics.defaultProps = {
    details: {
      leftDescription: 'M Expenses',
      rightDescription: 'M Income',
      expensesAmount: 850,
      incomeAmount: 2750
    },
  };

  Analytics.propotype = {
    details: PropTypes.object
  };