import React from 'react';
import styled from 'styled-components';
import { shade, stripUnit } from 'polished';

import Input from '../UI/Input';
import Button from '../UI/Button';

const Try = () => (
  <TryNow>
    <h2>Try Forkee today</h2>
    <p>
      Experience the simple and effective way of handling your table bookings.
    </p>
    <div className="bottom">
      <Input />
      <Button white>Try now</Button>
    </div>
  </TryNow>
);

export default Try;

const TryNow = styled.div`
  text-align: center;

  h2 {
    margin-bottom: ${props => props.theme.margin};
    font-size: 2.2em;
    font-size: 400;
  }

  p {
    margin-bottom: ${props => props.theme.margin};
    font-size: 1.4em;
  }

  input {
    background: ${props => shade(0.1, props.theme.colors.primary)};
    border-color: ${props => props.theme.colors.gray};
    outline: none;
    color: #fff;
    min-width: 20%;
    margin-right: ${props => stripUnit(props.theme.margin) / 2}px;

    &:hover {
      border-color: ${props => props.theme.colors.gray};
    }

    &:focus {
      border-color: #fff;
    }
  }

  .bottom {
  }
`;
