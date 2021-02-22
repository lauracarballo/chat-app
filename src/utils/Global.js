import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";
import { defaultTheme } from "./themes";
import { typeScale } from "../utils/typography";
import { neutral, violet } from "../utils/colors";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
  height: 100%;
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
  height: 100%;
  
}

main {
  min-height: 100%;
  width: 90%;
  margin: 0 auto;
}

p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-weight: 400;
  font-size: ${typeScale.helperText};
  color: ${neutral[100]};
  line-height: 1.75;
}

h1 {
  color: ${violet[100]};
  font-weight: 500;
  font-size: ${typeScale.header1};
}

`;
