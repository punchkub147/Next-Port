import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import ReactToPrint from "react-to-print";
import Paper from "../pages/index";

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
  const componentRef = useRef();
  return (
    <Header>
      <Link href="/">
        <h5>PUNCH</h5>
      </Link>
      <Navbar>
        <Link href="/">
          <li>Portfolio</li>
        </Link>
        {/* <ReactToPrint
          trigger={() => (
            <button>
              <FontAwesomeIcon icon={faPrint} />
            </button>
          )}
          content={() => componentRef.current}
        />
        <div style={{ display: "none" }}>
          <Paper />
        </div> */}
      </Navbar>
    </Header>
  );
};
