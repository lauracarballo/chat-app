import styled from "styled-components";
import { magenta } from "../utils/colors";
import { typeScale } from "../utils/typography";

export default function PriceBox({ text, price }) {
  return (
    <Container>
      <Wrapper>
        <Icon />
        <Text>{text}</Text>
      </Wrapper>
      <Price>{price}</Price>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  height: auto;
  border-radius: 7px 7px 7px 4px;
  ${(props) => props.theme.backgroundGradientInvert}
  margin: 10px;
  padding: 10px 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.div`
  content: "";
  width: 12px;
  height: 12px;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid ${magenta[200]};
`;

export const Text = styled.p`
  color: #fff;
  font-size: ${typeScale.messageText};
`;

export const Price = styled.p`
  color: #fff;
  font-size: ${typeScale.helperText};
  font-weight: 700;
`;
