import styled from "styled-components";
import Description from "./components/Description/Description";
import HighLightText from "./components/HighLightText/HighLightText";
import LandingPageImg from "./assets/Landing page image.svg";
import CreateEvenButton from "./components/CreateEventButton/CreateEventButton";

const Wrapper = styled.div`
  height: 95vh;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingPageImage = styled.img`
  width: 165.63px;
  height: 292px;
  margin-top: 36px;
`;

const MainInfo = () => {
  return (
    <Wrapper>
      <HighLightText />
      <Description />
      <LandingPageImage alt="Landing page img" src={LandingPageImg} />
      <CreateEvenButton />
    </Wrapper>
  );
};

export default MainInfo;
