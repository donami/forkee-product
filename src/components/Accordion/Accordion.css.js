import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const AccordionContainer = styled.div`
  h3 {
    margin-bottom: ${props => props.theme.margin};
    text-align: center;
  }
`;

export const List = styled.div``;

export const ListItem = styled.div`
  padding: ${props => props.theme.padding};
  ${props => {
    if (props.active) {
      return css`
        background: #fff;
        margin-bottom: ${props.theme.margin};
      `;
    }
    return null;
  }};
`;

export const ListItemTitle = styled.div`
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: space-between;

  ${props =>
    !props.active &&
    css`
      border-bottom: ${shade(0.2, props.theme.colors.gray)} 1px solid;
      padding-bottom: ${props.theme.padding};
    `};

  i,
  svg {
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    opacity: 0.7;
  }

  .text {
    padding-right: ${props => props.theme.padding};
  }
`;

export const ListItemBody = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  margin-top: ${props => props.theme.margin};
`;
