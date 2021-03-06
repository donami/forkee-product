import styled, { css } from 'styled-components';

const Section = styled.div`
  padding: ${props => props.theme.padding};
  /* margin: ${props => props.theme.margin} 0;

  &:last-of-type {
    margin-bottom: 0;
  } */

  ${props => {
    if (props.primary) {
      return css`
        background: ${props.theme.colors.primary};
        color: #fff;
      `;
    }
    if (props.gray) {
      return css`
        background: ${props.theme.colors.gray};
      `;
    }
    return null;
  }};
`;

export default Section;
