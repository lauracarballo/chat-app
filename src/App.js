import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./utils/Global";
import { defaultTheme } from "./utils/themes";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper></AppWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

// note: change height to detect window height and width

const AppWrapper = styled.div`
  width: 30vw;
  height: 80vh;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 180px;
  position: fixed;
  left: -50px;
  content: "";
  background-color: ${(props) => props.theme.backgroundGradient};
  background-repeat: no-repeat;
`;
