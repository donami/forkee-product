import styled, { css } from 'styled-components';

const Input = styled.input`
  background-color: #fff;
  padding: 10px 15px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  border: #eaeaea 1px solid;
  outline: 0;
  margin-bottom: 10px;
  color: #636e72;
  border-radius: 3px;

  ${props =>
    props.fluid &&
    css`
      width: calc(100% - 30px);
    `} &:focus {
    border-color: #85b7d9;
    box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.35) inset;
  }
`;

export default Input;
