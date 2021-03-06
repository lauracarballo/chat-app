import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import Mobile from "./components/Mobile";
import { GlobalStyle } from "./utils/Global";
import { defaultTheme } from "./utils/themes";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Background>
        <Container>
          <Wrapper>
            <Mobile />
            <Column>
              <h1>Simple Booking</h1>
              <p>
                Stay in touch with our dog walkers through the chat interface.
                This makes it easy to discuss arrangements and make bookings.
                Once the walk has been completed you can rate your walker and
                book again all through the chat.
              </p>
            </Column>
          </Wrapper>
        </Container>
      </Background>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export const Container = styled.main`
  display: grid;
  place-items: center;
  width: 90%;
  height: 670px;

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 270px;
  @media only screen and (max-width: 767px) {
    margin: 50px 10px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 144px 170px 120px;
  @media only screen and (max-width: 767px) {
    margin: 50px 0px;
  }
`;

// export const Wrapper = styled.div`
//   position: relative;
//   top: 100px;
//   left: 330px;
//   width: 250px;
//   height: 500px;
//   content: "";
// `;

// note: change height to detect window height and width
