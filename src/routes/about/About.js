import React from 'react';

import Container from '../../components/UI/Container';
import Hero from '../../components/Hero/Hero';
import Try from '../../components/Try/Try';
import Feature from '../../components/Feature/Feature';
import Section from '../../components/Section/Section';
import bookings from './forkee-bookings.JPG';
import loginPage from './login-page.JPG';

const About = () => (
  <div>
    <Hero title="Bookings done with ease.">
      Let Forkee to take care of your table bookings. Forkee makes table
      bookings simpler and easier than ever before.
    </Hero>

    <Section gray>
      <Container>
        <Feature title="Plug and Play." imageAlign="right" image={bookings}>
          <p>
            Forkee is extremely easy to use. Almost no programming knowledge is
            needed. It only takes 5 minutes to get started!
          </p>
        </Feature>
      </Container>
    </Section>

    <Section>
      <Container>
        <Feature title="Administration." imageAlign="left" image={loginPage}>
          <p>
            Configuring your booking implementation is really ease, using the
            administrator page.
          </p>
        </Feature>
      </Container>
    </Section>

    <Section>
      <Container>
        <Feature
          title="Customize Appearance"
          imageAlign="right"
          image={bookings}
        >
          <p>Customize the look and feel with ease, using the admin page.</p>
        </Feature>
      </Container>
    </Section>

    <Section>
      <Container>
        <Feature
          title="Opening Times &amp; Capacity"
          imageAlign="left"
          image={loginPage}
        >
          <p>
            Configure the days when the resturant is open for booking. Provide
            the opening times and set up custom dates when the resturants
            opening time differ.
          </p>

          <p>
            You can also configure the amount of guests you can have booked at
            one time.
          </p>
        </Feature>
      </Container>
    </Section>

    <Section primary>
      <Container>
        <Try />
      </Container>
    </Section>
  </div>
);

export default About;
