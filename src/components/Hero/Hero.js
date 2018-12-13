import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { stripUnit } from 'polished';

import Container from '../UI/Container';

const Hero = ({ title, children, bottom }) => (
  <Wrapper>
    <Container>
      <Content className="hero-content">
        <h1 className="hero-heading">{title}</h1>
        <div className="hero-body">{children}</div>
        {bottom && <div className="hero-bottom">{bottom}</div>}
      </Content>
    </Container>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
  bottom: PropTypes.node,
};

Hero.defaultProps = {
  bottom: undefined,
};

export default Hero;

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.margin};
`;

const Content = styled.div`
  width: 70%;
  text-align: center;
  font-size: 1em;
  margin: 0 auto;

  h1 {
    font-size: 2.8em;
    font-weight: 400;
    margin-bottom: 10px;

    span {
      color: ${props => props.theme.colors.primary};
    }
  }

  p {
    font-size: 1.1em;
    letter-spacing: 0.1em;
    line-height: 1.5em;
  }

  .hero-body {
    margin-bottom: 30px;
  }

  .hero-bottom {
    input {
      min-width: 40%;
      margin-right: ${props => stripUnit(props.theme.margin) / 2}px;
    }
  }
`;
