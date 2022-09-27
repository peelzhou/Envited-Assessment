import styled from "styled-components";

const DescriptionInfo = styled.p`
  font-weight: 300;
  font-size: 16px;
  margin: 0 27px;
  display: flex;
  text-align: center;
`;

const Description = () => {
  return (
    <DescriptionInfo>
      Easily host and share events with your friends across any social media.
    </DescriptionInfo>
  );
};

export default Description;
