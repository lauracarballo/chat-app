import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const OVAL_MODIFIERS = {
  gradient: ({ theme }) => css`
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 250px;
    left: -63px;
    ${theme.backgroundGradient}
  `,
  gray: () => css`
    border-top-left-radius: 250px;
    border-top-right-radius: 180px;
    right: -150px;
    bottom: 0px;
    background-color: hsl(270deg 19% 93%);
  `,
};

export const Oval = styled.div`
  width: 35vw;
  height: 85vh;
  position: fixed;
  content: "";
  background-repeat: no-repeat;
  z-index: -1;

  ${applyStyleModifiers(OVAL_MODIFIERS)}
`;
