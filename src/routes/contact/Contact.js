import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { stripUnit } from 'polished';

import Container from '../../components/UI/Container';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Hero from '../../components/Hero/Hero';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .required('Name is required'),
  message: Yup.string()
    .min(2, 'Message is too short!')
    .required('Message is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('Email is required'),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <ContactContainer>
      <Container>
        <Hero title="Give us a shout.">Let us know how we can help.</Hero>

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            setSubmitted(true);
            actions.setSubmitting(false);
          }}
          render={({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <ContactForm onSubmit={handleSubmit}>
              {submitted && (
                <Submitted>
                  Thank you for your message! We will get back to you as soon as
                  possible.
                </Submitted>
              )}

              <Field>
                {errors.name &&
                  touched.name && <Feedback>{errors.name}</Feedback>}
                <h4>Name</h4>
                <Input
                  fluid
                  id="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                />
              </Field>

              <Field>
                {errors.email &&
                  touched.email && <Feedback>{errors.email}</Feedback>}
                <h4>Email</h4>
                <Input
                  fluid
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                />
              </Field>
              <Field>
                {errors.message &&
                  touched.message && <Feedback>{errors.message}</Feedback>}
                <h4>Message</h4>
                <Input
                  as="textarea"
                  fluid
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  name="message"
                />
              </Field>
              <Button type="submit" primary>
                Send
              </Button>
            </ContactForm>
          )}
        />
      </Container>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div``;

const ContactForm = styled.form`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.margin};
  max-width: 400px;
`;

const Field = styled.div`
  margin-bottom: ${props => stripUnit(props.theme.margin) / 2};
`;

const Feedback = styled.div`
  float: right;
  color: ${props => props.theme.colors.primary};
`;

const Submitted = styled.div`
  margin-bottom: ${props => props.theme.margin};
`;
