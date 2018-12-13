import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyle } from '../global.css';
import { theme } from '../../theme/theme';
import history from '../../history';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cancel = history.listen(() => {
      setMenuOpen(false);
    });

    return () => {
      cancel();
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          <MainContent>{children}</MainContent>
          <Footer />
        </Wrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

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
