import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import Mobile from "./components/Mobile";
import { GlobalStyle } from "./utils/Global";
import { defaultTheme } from "./utils/themes";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Background />
      <Wrapper>
        <Mobile />
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export const Wrapper = styled.div`
  position: relative;
  top: 100px;
  left: 330px;
  width: 250px;
  height: 500px;
  content: "";
`;

// note: change height to detect window height and width
