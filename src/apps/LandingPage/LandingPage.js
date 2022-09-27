import styled from "styled-components";
import MainInfo from "./components/MainInfo/MainInfo";
import TopSigns from "./components/TopSigns/TopSigns";

const Wrapper = styled.div`
  height: 680px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(246, 242, 255, 1);
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <TopSigns />
      <MainInfo />
    </Wrapper>
  );
};

export default LandingPage;
