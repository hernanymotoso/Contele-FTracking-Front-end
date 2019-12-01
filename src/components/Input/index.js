import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  placeholder: props.InputPlaceholder,
  type: props.InputType,
}))`
  border-radius: 4px;
  border: solid 1px #b7b7b7;
  height: 28px;
  flex: 1;
  margin: 0 20px;
  margin-top: 20px;
  font-size: 12px;
  padding-left: 10px;
  background-color: #fff;
`;

export default Input;
