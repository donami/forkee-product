import React from 'react';
import styled from 'styled-components';
import { shade, stripUnit } from 'polished';

import Hero from '../../components/Hero/Hero';
import Container from '../../components/UI/Container';
import Section from '../../components/Section/Section';
import Hub from '../../components/Hub/Hub';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />

        <Section>
          <Container>
            <Hub />
          </Container>
        </Section>

        <Container>
          <h1>Home</h1>
          <p>Content</p>
        </Container>

        <Section primary>
          <Container>
            <TryNow>
              <h2>Build what's next</h2>
              <p>
                Experience the most lightweight, enjoyable way for your team to
                work.
              </p>
              <div className="bottom">
                <Input />
                <Button white>Try now</Button>
              </div>
            </TryNow>
          </Container>
        </Section>
      </div>
    );
  }
}

export default Home;

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
    min-width: 20%;
    margin-right: ${props => stripUnit(props.theme.margin) / 2}px;

    &:hover {
      border-color: ${props => props.theme.colors.gray};
    }
  }

  .bottom {
  }
`;
