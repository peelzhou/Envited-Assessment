import styled from "styled-components";

const Wrapper = styled.div`
  height: 48px;
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background: rgba(255, 255, 255, 1);
`;

const EventLocation = () => {
  return <Wrapper>Location: Street name, Suburb, State, Postcode </Wrapper>;
};

export default EventLocation;
