import React from 'react';
import styled from 'styled-components';
import { Column } from '../../commons/Grid';
import PropTypes from 'prop-types';

export default function Transaction({ details }) {
  const { description, date, amount } = details;
  return (
    <Container>
      <Column xs="8" md="7">
        <div className="trxn-desc">
          <p className="trxn-heading">{description}</p>
          <p className="trxn-date">{date}</p>
        </div>
      </Column>
      <Column xs="4" md="4">
        <div className="trxn-amt-cont">
          <p className={`trxn-amt `}>{amount}</p>
        </div>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  height: 6rem;
  margin: 0.5rem;
  padding: 0.8rem;
  background-color: #fff;
  -webkit-box-shadow: 0px 1px 300px 1px rgba(254, 254, 254, 1);
  -moz-box-shadow: 0px 1px 300px 1px rgba(254, 254, 254, 1);
  box-shadow: 0px 1px 300px 1px rgba(254, 254, 254, 1);
  border-radius: 4px;
  color: #463b3f;

  div {
    height: 100%;
  }

  .trxn-desc {
    .trxn-heading {
      font-weight: 700;
    }
    .trxn-date {
      color: #757575;
      font-size: 1rem;
    }
  }

  .trxn-amt-cont {
    display: flex;
    align-items: center;
    width: 80%;
    text-align: right;
    margin: 0 auto;

    .trxn-amt {
      font-size: 1.6rem;
      font-weight: 300;
      text-align: center;
      color: ${({ color }) => (color ? '#98bf64' : '#f35432')};
      width: 100%;
      ::before {
        content: '₦';
        font-size: 1.2rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.6rem;
    height: 7rem;

    .icon-cont {
      font-size: 3rem;
      display: flex;
      width: 50%;
      margin: 0 auto;
      align-items: center;
    }
  }
`;

Transaction.defaultProps = {
  details: {
    description: '12 dozen butter sachet',
    amount: -30000,
    date: '25-Oct-2019',
  },
};

Transaction.propotype = {
  details: PropTypes.object
};
