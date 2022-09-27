import styled from "styled-components";
import EventLocation from "../EventLocation/EventLocation";
import EventTime from "../EventTime/EventTime";

const Wrapper = styled.div`
  height: 304px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background: rgba(255, 255, 255, 1);
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 32.2px;
  margin: 11px 0 4px 0;
`;

const Organizer = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`;

const EventInfo = () => {
  return (
    <Wrapper>
      <Title>Birthday Bash</Title>
      <Organizer>Hosted by Elysia</Organizer>
      <EventTime />
      <EventLocation />
    </Wrapper>
  );
};

export default EventInfo;
