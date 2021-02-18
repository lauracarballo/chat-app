import styled from "styled-components";
import { violet } from "../utils/colors";
import { typeScale } from "../utils/typography";

export default function MessageBox({ children }) {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
}

export const Container = styled.div`
  width: 60%;
  height: auto;
  border-radius: 7px 7px 7px 4px;
  background-color: hsl(270deg 61% 92%);
  margin: 10px;
  padding: 5px 10px;
`;

export const Text = styled.p`
  color: ${violet[200]};
  font-size: ${typeScale.messageText};
`;
