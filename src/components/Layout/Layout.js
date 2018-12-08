/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
// import normalizeCss from 'normalize.css';
import s from './Layout.css';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyle } from '../global.css';
import { theme } from '../../theme/theme';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Wrapper>
            <Header />
            <MainContent>{this.props.children}</MainContent>
            <Footer />
          </Wrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

export default Layout;
// export default withStyles(normalizeCss, s)(Layout);
