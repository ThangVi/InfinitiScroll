import styled from 'styled-components'

const Input = styled.input`
  margin: 10px 5px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  padding: 15px 30px;
  font-size: 15px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 999px;
  background-color: #fff;
  &:focus, &:hover {
  	outline: none !important;
  	box-shadow: none;
  	outline-offset: 0;
  }
`;

export default Input