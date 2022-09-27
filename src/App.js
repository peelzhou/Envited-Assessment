import LandingPage from "./apps/LandingPage/LandingPage";
import styled from "styled-components";
import EventPage from "./apps/EventPage/EventPage";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <LandingPage />
    </Wrapper>
  );
}

export default App;
