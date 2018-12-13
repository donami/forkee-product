import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Navigation from '../Navigation';
import Link from '../Link';
import Button from '../UI/Button';
import Container from '../UI/Container';
import Icon from '../Icon/Icon';
import logo from './logo.png';

const Header = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20 && !active) {
      setActive(true);
    } else if (window.scrollY < 20 && active) {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Wrapper active={active} menuOpen={menuOpen}>
      <Container>
        <HeaderContainer menuOpen={menuOpen} active={active}>
          <Left menuOpen={menuOpen}>
            <Link to="/">
              <img src={logo} alt="Forkee" />
            </Link>
            <DropdownToggler>
              <Icon
                icon="bars"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
            </DropdownToggler>
          </Left>
          <Middle menuOpen={menuOpen}>
            <Navigation />
          </Middle>
          <Right menuOpen={menuOpen}>
            <SignInButton primary as="a" href="http://app.forkee.com">
              Sign in
            </SignInButton>
            <Button primary>Start free trial</Button>
          </Right>
        </HeaderContainer>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  box-shadow: 0 0 40px transparent;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  transition: 0.2s;
  transition-property: background-color, color;
  z-index: 190;

  ${props =>
    props.active &&
    css`
      box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    `};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  padding: 0 30px;
  min-height: 100px;

  ${props =>
    props.menuOpen &&
    css`
      @media only screen and (max-width: 960px) {
        flex-direction: column;
        height: 100vh;
      }
    `};
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 960px) {
    width: 100%;
    justify-content: space-between;
    margin-top: ${props => (props.menuOpen ? '17px' : 0)};
  }

  img {
    max-height: 60px;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 960px) {
    display: ${props => (props.menuOpen ? 'flex' : 'none')};

    > div {
      flex-direction: ${props => (props.menuOpen ? 'column' : 'row')};
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 960px) {
    display: ${props => (props.menuOpen ? 'flex' : 'none')};
    border-top: 1px solid #ececec;
    padding: ${props => props.theme.padding} 0;
  }
`;

const DropdownToggler = styled.div`
  display: none;

  i,
  svg {
    font-size: 2em;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media only screen and (max-width: 960px) {
    display: block;
  }
`;

const SignInButton = styled(Button)`
  margin-right: 20px;
  background-color: transparent;
  color: #555;
  font-weight: bold;
  font-size: 1em;

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
  }
`;

export default Header;
