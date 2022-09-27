import styled from "styled-components";

const EventButton = styled.button`
  width: 187px;
  height: 50px;
  margin-top: 34px;
  color: #ffffff;
  background: linear-gradient(to right, #8456ec, #e87bf8);
  border: 0 solid transparent;
  border-radius: 10px;
`;

const CreateEvenButton = () => {
  return <EventButton>🎉 Create my event</EventButton>;
};

export default CreateEvenButton;
