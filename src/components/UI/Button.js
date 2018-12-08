import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { shade } from 'polished';

const Button = ({ color, fluid, children, ...rest }) => (
  <Wrapper color={color} fluid={fluid} {...rest}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fluid: PropTypes.bool,
  primary: PropTypes.bool,
  white: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: undefined,
  color: undefined,
  fluid: false,
  primary: false,
  white: false,
  disabled: false,
};

export default Button;

const Wrapper = styled.button`
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 3px;
  font-family: 0.9em;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `} ${props => {
    if (props.color === 'blue' || props.primary) {
      return css`
        background-color: ${props => props.theme.colors.primary};

        &:hover {
          background-color: ${props => shade(0.2, props.theme.colors.primary)};
        }
      `;
    }
    if (props.secondary) {
      return css`
        background-color: ${props => props.theme.colors.secondary};

        &:hover {
          background-color: ${props =>
            shade(0.2, props.theme.colors.secondary)};
        }
      `;
    }
    if (props.color === 'green') {
      return css`
        background-color: #55efc4;

        &:hover {
          background-color: #00b894;
        }
      `;
    }
    if (props.color === 'purple') {
      return css`
        background-color: #a29bfe;

        &:hover {
          background-color: #6c5ce7;
        }
      `;
    }
    if (props.color === 'gray') {
      return css`
        background-color: #dfe6e9;

        &:hover {
          background-color: #b2bec3;
        }
      `;
    }
    if (props.color === 'red') {
      return css`
        background-color: #fab1a0;

        &:hover {
          background-color: #e17055;
        }
      `;
    }
    if (props.color === 'yellow') {
      return css`
        background-color: #ffeaa7;

        &:hover {
          background-color: #fdcb6e;
        }
      `;
    }
    if (props.color === 'pink') {
      return css`
        background-color: #fd79a8;

        &:hover {
          background-color: #e84393;
        }
      `;
    }
    if (props.white) {
      return css`
        background-color: #fff;
        color: ${props.theme.colors.text};

        &:hover {
          background-color: ${props.theme.colors.gray};
        }
      `;
    }
    return css`
      background-color: ${props => props.theme.colors.gray};

      &:hover {
        background-color: ${props => shade(0.2, props.theme.colors.gray)};
      }
    `;
  }}

  @-webkit-keyframes button-spin {
    from {
      transform: rotate(0);
    }

    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes button-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  ${props => {
    if (props.disabled) {
      return css`
        cursor: default;
        opacity: 0.45 !important;
        pointer-events: none;
        box-shadow: none;
      `;
    }
    return null;
  }} ${props => {
    if (props.loading) {
      return css`
        position: relative;
        cursor: default;
        text-shadow: none !important;
        color: transparent !important;
        opacity: 1;
        pointer-events: auto;
        -webkit-transition: all 0s linear, opacity 0.1s ease;
        transition: all 0s linear, opacity 0.1s ease;

        &:before {
          position: absolute;
          content: '';
          top: 43%;
          left: 47%;
          margin: -0.5em 0 0 -0.5em;
          width: 1em;
          height: 1em;
          border-radius: 500rem;
          border: 0.2em solid rgba(0, 0, 0, 0.15);
        }
        &:after {
          position: absolute;
          content: '';
          top: 43%;
          left: 47%;
          margin: -0.5em 0 0 -0.5em;
          width: 1em;
          height: 1em;
          -webkit-animation: button-spin 0.6s linear;
          animation: button-spin 0.6s linear;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          border-radius: 500rem;
          border-color: #fff transparent transparent;
          border-style: solid;
          border-width: 0.2em;
          -webkit-box-shadow: 0 0 0 1px transparent;
          box-shadow: 0 0 0 1px transparent;
        }
      `;
    }
    return null;
  }};
`;
