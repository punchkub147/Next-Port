import Link from "next/link";
import styled from "styled-components";

const Header = styled.div`
  padding: ${props => props.theme.space.default} 0;
  margin-top: -${props => props.theme.space.default};
  margin-bottom: -${props => props.theme.space.default};
  width: 100%;
  color: ${props => props.theme.color.textHeader};
  display: flex;
  justify-content: space-between;
`;

const Navbar = styled.ul`
  display: flex;
  li {
    margin-right: ${props => props.theme.space.default};
    cursor: pointer;
  }
`;

export default props => {
  return (
    <Header>
      <Link href="/">
        <h5>PUNCH</h5>
      </Link>
      <Navbar>
        <Link href="/">
          <li>Portfolio </li>
        </Link>
      </Navbar>
    </Header>
  );
};
