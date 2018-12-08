/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <Wrapper role="navigation">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Log in</Link>
      </Wrapper>
    );
  }
}

export default Navigation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  > * {
    display: block;
    padding: 30px;
  }

  a {
    color: ${props => props.theme.colors.text};
    font-weight: 600;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
