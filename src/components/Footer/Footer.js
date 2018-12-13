import React from 'react';
import styled from 'styled-components';
import { stripUnit } from 'polished';

import Container from '../UI/Container';
import Link from '../Link';
import logo from './logo.png';

const Footer = () => (
  <FooterContainer>
    <Container>
      <FooterColumns>
        <div>
          <h4>Product</h4>
          <ul>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/enterprise">Enterprise</Link>
            </li>
            <li>
              <Link to="/integrations">Integrations</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <span>+46 27 83 12 12</span>
            </li>
            <li>
              <span>hello@forkee.com</span>
            </li>
          </ul>
        </div>
      </FooterColumns>
      <FooterBottom>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <span>All rights reserved - Forkee 2019</span>
      </FooterBottom>
    </Container>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.darkGray};
  color: #fff;
  padding: ${props => props.theme.padding};

  li {
    line-height: 2em;

    span,
    a {
      color: #fff;
      opacity: 0.5;
    }
  }

  a {
    color: #fff;

    &:hover {
      opacity: 1;
    }
  }
`;

const FooterColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  h4 {
    margin-bottom: ${props => stripUnit(props.theme.margin) / 2}px;
  }

  ul {
    list-style: none;
  }

  > div {
    @media only screen and (max-width: 960px) {
      width: 100%;
      text-align: center;
      margin-bottom: ${props => props.theme.margin};
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.margin};
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 120px;
  }
`;
