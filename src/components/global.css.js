import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`;
