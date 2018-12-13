import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero/Hero';
import Plan from '../../components/Plan/Plan';
import Section from '../../components/Section/Section';
import Container from '../../components/UI/Container';
import Accordion from '../../components/Accordion/Accordion';

const plans = [
  {
    id: 1,
    title: 'Free Trial',
    description: 'Just getting started? Try out the platform for free.',
    price: '$0',
    content: 'For customers who wants to try out the platform.',
  },
  {
    id: 2,
    title: 'Small',
    description: 'Accept up to 150 bookings a month.',
    price: '$29',
    content:
      'For smaller restaurants who accepts less than 150 bookings per month',
  },
  {
    id: 3,
    title: 'Premium',
    description: 'In need of unlimited bookings? Choose the premium plan.',
    price: '$49',
    content: 'For larger restaurants you needs unlimited bookings for month.',
  },
];

const faqs = [
  {
    id: 1,
    title: 'Can I upgrade my plan?',
    body: `Yes, it is possible to upgrade your plan to another package if you find that you need more bookings.`,
  },
  {
    id: 2,
    title: 'Can I cancel my subscription whenever I want?',
    body:
      'Yes, you may cancel the subscription whenever, and your account will remain active for the billed period.',
  },
];

const Pricing = () => (
  <React.Fragment>
    <Hero title="Forkee booking platform pricing plans.">
      <p>
        Choose a plan that fits you. No installation cost, easy setup with
        updates included.
      </p>
    </Hero>

    <Container>
      <Plans>{plans.map(plan => <Plan key={plan.id} {...plan} />)}</Plans>
    </Container>

    <Section gray>
      <Container>
        <Accordion title="Billing FAQs" items={faqs} />
      </Container>
    </Section>
  </React.Fragment>
);

export default Pricing;

const Plans = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.margin};
`;
