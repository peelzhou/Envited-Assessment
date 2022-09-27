import LandingPage from "./apps/LandingPage/LandingPage";
import styled from "styled-components";
import EventPage from "./apps/EventPage/EventPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import EventCreatingPage from "./apps/EventCreatingPage/EventCreatingPage";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/create" element={<EventCreatingPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
