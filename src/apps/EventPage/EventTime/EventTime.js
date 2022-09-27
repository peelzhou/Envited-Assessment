import styled from "styled-components";

const Wrapper = styled.div`
  height: 48px;
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background: rgba(255, 255, 255, 1);
`;

const EventTime = () => {
  return <Wrapper>Time: 18 August 6:00PM to 19 August 1:00PM UTC +10</Wrapper>;
};

export default EventTime;
