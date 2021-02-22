import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const OVAL_MODIFIERS = {
  gradient: ({ theme }) => css`
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 250px;
    left: -63px;
    ${theme.backgroundGradient}
    @media only screen and (max-width: 767px) {
      left: -122px;
    }
  `,
  gray: () => css`
    border-top-left-radius: 250px;
    border-top-right-radius: 180px;
    right: -170px;
    bottom: 0px;
    background-color: hsl(270deg 19% 93%);
    @media only screen and (max-width: 767px) {
      bottom: -210px;
    }
  `,
};

export const Oval = styled.div`
  width: 35vw;
  height: 85vh;
  position: fixed;
  content: "";
  background-repeat: no-repeat;
  z-index: -1;

  @media only screen and (max-width: 767px) {
    width: 85vw;
    height: 73vh;
  }

  ${applyStyleModifiers(OVAL_MODIFIERS)}
`;
