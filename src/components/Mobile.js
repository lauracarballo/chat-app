import styled from "styled-components";
import { typeScale } from "../utils/typography";
import MessageBox from "./MessageBox";
import { MediaBox, Image } from "./MediaBox";
import PriceBox from "./PriceBox";
import SendBox from "./SendBox";

export default function Mobile() {
  return (
    <Container>
      <Screen>
        {/* <AudioBox></AudioBox> */}
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
        <MessageBox>That sounds great. I'd be happy with that.</MessageBox>
        <MessageBox>
          Could you send over some pictures of your dog, please?
        </MessageBox>
        <MediaBox>
          <Image src="/images/dog-image-1.jpg" alt="dog" />
          <Image src="/images/dog-image-2.jpg" alt="dog" />
          <Image src="/images/dog-image-3.jpg" alt="dog" />
        </MediaBox>
        <MessageBox onRight>
          Here are a few pictures. She's a happy girl!
        </MessageBox>
        <MessageBox onRight>Can you make it?</MessageBox>
        <MessageBox>
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </MessageBox>
        <PriceBox text="30 mins walk" price="$29" />
        <PriceBox text="1 hour walk" price="$49" />
        <SendBox />
      </Screen>
    </Container>
  );
}

export const Container = styled.div`
  width: 230px;
  height: 495px;
  content: "";
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 15px 15px 65px hsl(206deg 6% 79%);
`;

export const Screen = styled.div`
  border-radius: 20px;
  width: 210px;
  height: 475px;
  content: "";
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: purple;
  padding: 28px 15px 10px 15px;
  border-radius: 20px 20px 10px 10px;
  ${(props) => props.theme.backgroundGradient}
`;

// export const AudioBox = styled.div`
//   position: absolute;
//   width: 120px;
//   height: 16px;
//   border-radius: 0 0 10px 10px;
//   right: 45px;
//   background-color: #fff;
// `;

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
