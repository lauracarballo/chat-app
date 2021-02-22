import styled from "styled-components";
import { violet } from "../utils/colors";
import { typeScale } from "../utils/typography";

export default function MessageBox({ children, onRight }) {
  return (
    <Container onRight={onRight}>
      <Text>{children}</Text>
    </Container>
  );
}

export const Container = styled.div`
  max-width: 60%;
  width: fit-content;
  height: auto;
  border-radius: ${(props) =>
    props.onRight ? "7px 7px 4px 7px" : "7px 7px 7px 4px"};
  background-color: ${(props) =>
    props.onRight ? "#fff" : "hsl(270deg 61% 92%)"};
  margin: 8px;
  margin-left: ${(props) => (props.onRight ? "auto" : "none")};
  padding: 4px 10px;
`;

export const Text = styled.p`
  color: ${(props) => (props.onRight ? violet[200] : violet[300])};
  font-size: ${typeScale.messageText};
`;
