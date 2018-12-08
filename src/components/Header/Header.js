import React from 'react';
import styled, { css } from 'styled-components';

import Navigation from '../Navigation';
import Link from '../Link';
import Button from '../UI/Button';
import Container from '../UI/Container';

class Header extends React.Component {
  state = {
    active: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20 && !this.state.active) {
      this.setState({ active: true });
    } else if (window.scrollY < 20 && this.state.active) {
      this.setState({ active: false });
    }
  };

  render() {
    const { active } = this.state;

    return (
      <Wrapper active={active}>
        <Container>
          <HeaderContainer active={active}>
            <Left>
              <Link to="/">
                <h3>Forkee</h3>
              </Link>
            </Left>
            <Middle>
              <Navigation />
            </Middle>
            <Right>
              <Button primary>Start free trial</Button>
            </Right>
          </HeaderContainer>
        </Container>
      </Wrapper>
    );
  }
}

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
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.4em;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default Header;
