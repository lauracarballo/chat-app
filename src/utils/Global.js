import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";
import { defaultTheme } from "./themes";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${defaultTheme.backgroundColor};
  
}

main {
  width: 90%;
  margin: 0 auto;
}
`;
