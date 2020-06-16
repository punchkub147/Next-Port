import Header from "./Header";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  color: {
    main: "red",
    background: "#eee",
    container: "white",
    textHeader: "white"
  },
  space: {
    default: "20px"
  },
  border: {
    radius: "15px"
  },
  shadow: [
    "0px 6px 10px -4px rgba(135,135,135,0.55)",
    "0px 6px 10px -4px rgba(80,80,80,1)"
  ]
};

const Background = styled.div`
  padding: ${props => props.theme.space.default};
  background-image: radial-gradient(
    circle 859px at 10% 20%,
    rgba(245, 220, 154, 1) 0%,
    rgba(164, 78, 51, 1) 90%
  );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 700px;
  background-color: ${props => props.theme.color.container};
  padding: ${props => props.theme.space.default};
  box-shadow: ${props => props.theme.shadow[0]};
  border-radius: ${props => props.theme.border.radius};
`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Background {...props}>
        <Header />
        <Container className="page">{props.children}</Container>
      </Background>
    </ThemeProvider>
  );
};

export default Layout;
