import styled from "styled-components";
import { typeScale } from "../utils/typography";

export default function Mobile({ theme }) {
  return (
    <Container>
      <Screen>
        <Header>
          <Row>
            <span>&#60;</span>
            <Avatar src="/images/avatar.jpg" alt="profile" />
            <Column>
              <Name>Samuel Green</Name>
              <Status>Available to Walk</Status>
            </Column>
          </Row>
          <Column>
            <span>.</span>
          </Column>
        </Header>
      </Screen>
    </Container>
  );
}

export const Container = styled.div`
  width: 220px;
  height: 450px;
  content: "";
  position: absolute;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 15px 15px 65px hsl(206deg 6% 79%);
`;

export const Screen = styled.div`
  border-radius: 20px;
  width: 200px;
  height: 430px;
  content: "";
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: purple;
  padding: 20px 15px;
  border-radius: 20px 20px 10px 10px;
  ${(props) => props.theme.backgroundGradient}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px;
  border: 1px solid #fff;
  border-radius: 100px;
`;

export const Name = styled.span`
  font-size: ${typeScale.helperText};
  font-weight: 500;
  color: #fff;
`;

export const Status = styled.span`
  font-size: ${typeScale.copyrightText};
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
`;
