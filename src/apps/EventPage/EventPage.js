import styled from "styled-components";
import EventImg from "./assets/Birthday cake.png";
import EventInfo from "./EventInfo/EventInfo";

const Wrapper = styled.div`
  height: 680px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 1);
`;

const EventImage = styled.img`
  width: 375px;
  height: 375px;
`;

const EventPage = () => {
  return (
    <Wrapper>
      <EventImage alt="Event page img" src={EventImg} />
      <EventInfo />
    </Wrapper>
  );
};

export default EventPage;
