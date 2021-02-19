import styled from "styled-components";
import { Oval } from "./Oval";

export default function Background({ children }) {
  return (
    <Container>
      <Oval modifiers="gradient" />
      <Oval modifiers="gray" />
      {children}
    </Container>
  );
}

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
