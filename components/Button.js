import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

export default props => {
  return <Button {...props}>{props.children}</Button>;
};
