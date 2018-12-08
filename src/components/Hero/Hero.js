import React from 'react';
import styled from 'styled-components';
import { stripUnit } from 'polished';

import Container from '../UI/Container';
import Input from '../UI/Input';
import Button from '../UI/Button';

const Hero = () => (
  <Wrapper>
    <Container>
      <Content className="hero-content">
        <h1 className="hero-heading">
          Time to create. <span>Together</span>.
        </h1>
        <div className="hero-body">
          <p>
            The first project management platform for software development that
            brings everyone on every team together to build better products.
          </p>
        </div>
        <div className="hero-bottom">
          <Input />
          <Button primary>Sign up</Button>
        </div>
      </Content>
    </Container>
  </Wrapper>
);

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
