import styled from "styled-components";
import { neutral, violet } from "../utils/colors";
import { typeScale } from "../utils/typography";

export default function SendBox() {
  return (
    <Container>
      <Placeholder>Type a message...</Placeholder>
      <Button>
        <Icon>&#62;</Icon>
      </Button>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-radius: 30px;
  background-color: #fff;
  margin: 10px;
  padding-right: 5px;
  padding-left: 10px;
`;

export const Placeholder = styled.p`
  color: ${neutral[200]};
  font-size: ${typeScale.messageText};
`;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border: none;
  background-color: ${violet[100]};
  text-align: center;
`;

export const Icon = styled.p`
  color: #fff;
  font-size: ${typeScale.helperText};
  font-weight: 700;
`;
