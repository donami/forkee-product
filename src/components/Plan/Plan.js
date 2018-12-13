import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../UI/Button';

const Plan = ({ title, description, price, content }) => (
  <Wrapper>
    <Inner>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
      <Content>{content}</Content>
      <Buttons>
        <Button primary>Try it for free</Button>
      </Buttons>
      <Bottom>No credit card needed</Bottom>
    </Inner>
  </Wrapper>
);

Plan.propTypes = {
  // id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Plan;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: ${props => props.theme.colors.lightGray} 1px solid;

  @media only screen and (max-width: 960px) {
    margin-bottom: ${props => props.theme.margin};
    min-width: 100%;
  }

  @media only screen and (min-width: 960px) {
    border-right-color: transparent;

    &:last-of-type {
      border-right-color: ${props => props.theme.colors.lightGray};
    }
  }
`;

const Title = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 1.4em;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 960px) {
    min-height: 80px;
  }
`;

const Buttons = styled.div`
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 3em;
  margin-bottom: 10px;
`;

const Content = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 960px) {
    min-height: 90px;
  }
`;

const Bottom = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const Inner = styled.div`
  padding: ${props => props.theme.padding};
`;
