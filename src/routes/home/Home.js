import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero/Hero';
import Container from '../../components/UI/Container';
import Section from '../../components/Section/Section';
import Hub from '../../components/Hub/Hub';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Try from '../../components/Try/Try';

const Home = () => (
  <div>
    <Hero
      title={
        <>
          Let <span>Forkee</span> handle your bookings.
        </>
      }
      bottom={
        <>
          <Input />
          <Button primary>Sign up</Button>
        </>
      }
    >
      <p>
        The all you need booking platform that takes care of your resturant
        bookings need.
      </p>
    </Hero>

    <Section gray>
      <Container>
        <Hub />
      </Container>
    </Section>

    <Section>
      <Container>
        <Hero title="Why use Forkee?">
          <p>Save time using Forkee.</p>
        </Hero>
        <FeatureList>
          <FeatureBox>
            <h3>Easy to setup</h3>
            <p>
              Getting started with Forkee is easy. Within 5 minutes after
              signing up you should be ready to go. No tech experience is
              needed.
            </p>
          </FeatureBox>
          <FeatureBox>
            <h3>Save Time</h3>
            <p>
              Save time by using Forkee by letting your guests do their booking
              online instead of answering phone calls or replying to emails.
            </p>
          </FeatureBox>
          <FeatureBox>
            <h3>Support</h3>
            <p>
              We have support ready to answer your questions and help you in
              case you experience any problems.
            </p>
          </FeatureBox>
        </FeatureList>
      </Container>
    </Section>

    <Section primary>
      <Container>
        <Try />
      </Container>
    </Section>
  </div>
);

export default Home;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.padding};

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled.div`
  padding: ${props => props.theme.padding};
  border: ${props => props.theme.colors.gray} 1px solid;
  background: #fafafa;
  border-radius: 10px;
  color: #777;

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.margin};
    font-weight: 400;
  }
`;
