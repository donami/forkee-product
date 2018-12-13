import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const Navigation = () => (
  <Wrapper role="navigation">
    <Link to="/about">About</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/contact">Contact</Link>
  </Wrapper>
);

export default Navigation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  > * {
    display: block;
    padding: 30px;
  }

  a {
    color: ${props => props.theme.colors.text};
    font-weight: 600;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
