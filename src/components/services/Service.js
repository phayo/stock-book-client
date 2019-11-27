import React from 'react';
import styled from 'styled-components';
import { Column } from '../../commons/Grid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaMoneyCheckAlt,
  FaClock,
  FaQuestionCircle,
  FaHandHoldingUsd,
  FaAngleDoubleRight,
} from 'react-icons/fa';

export default function Service({ details }) {
  console.log(details);
  const {
    status,
    dateCreated,
    balance,
    initialCharge,
  } = details;
  return (
    <Container>
      <div className="row">
        <Column xs={1}>
          <FaQuestionCircle />
        </Column>
        <Column xs={7}>
          <h4 className="desc">Status</h4>
        </Column>
        <Column xs={4}>
          <h4 className="initial-charge col">
            {status ? 'In-Progress' : 'Completed'}
          </h4>
        </Column>
      </div>

      <div className="row">
        <Column xs={1}>
          <FaClock />
        </Column>
        <Column xs={7}>
          <h4 className="desc">Date created</h4>
        </Column>
        <Column xs={4}>
          <h4 className="date-created col">{dateCreated}</h4>
        </Column>
      </div>

      <div className="row">
        <Column xs={1}>
          <FaMoneyCheckAlt />
        </Column>
        <Column xs={7}>
          <h4 className="desc">Initial Charge</h4>
        </Column>
        <Column xs={4}>
          <h4 className="initial-charge col">₦{initialCharge}</h4>
        </Column>
      </div>

      <div className="row">
        <Column xs={1}>
          <FaHandHoldingUsd />
        </Column>
        <Column xs={7}>
          <h4 className="desc">Balance Remaining</h4>
        </Column>
        <Column xs={4}>
          <h4 className="initial-charge col">₦{balance}</h4>
        </Column>
      </div>
      <div className="row next">
        <Link to="/"> More <FaAngleDoubleRight /> </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  background-image: linear-gradient( 135deg, #0797ff, #006ab0);
  background-color: #0797ff;
  color: #43cea2;
  margin: 0 auto;
  border-radius: 5px;
  padding: 1rem;
  -webkit-box-shadow: 1px -2px 21px -5px rgba(0, 106, 176, 1);
  -moz-box-shadow: 1px -2px 21px -5px rgba(0, 106, 176, 1);
  box-shadow: 1px -2px 21px -5px rgba(0, 106, 176, 1);
  .row {
    margin-bottom: 0.8rem;
    &::after {
      content: '';
      clear: both;
      display: table;
    }
    h4.desc {
      text-align: left;
      font-weight: lighter;
      color: white;
    }
    .initial-charge {
      text-align: right;
    }
    .date-created {
      /* font-size: 1rem; */
      font-weight: lighter;
      text-align: right;
    }
  }
  .next {
    text-align: center;
    a{
      color: wheat;
    }
  }
  .col{
    color: wheat;
  }
`;

Service.defaultProps = {
  details: {
    status: true,
    dateCreated: '12-Dec-19',
    balance: 25678,
    initialCharge: 25678
  },
};

Service.propotype = {
  details: PropTypes.object,
};
