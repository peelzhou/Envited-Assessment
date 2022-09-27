import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopicText = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 41.4px;
  margin: 0;
`;

// styled-components does not support the following code.
// color: linear-gradient(to right, #8456ec, #e87bf8)
// It might take a while to adjust the css for linear-gradient
// in styled-components, so I leave it for future research.
const TopicColorText = styled(TopicText)`
  color: #8456ec;
`;

const HighLightText = () => {
  return (
    <Wrapper>
      <TopicText>Imagine if</TopicText>
      <TopicColorText>Snapchat</TopicColorText>
      <TopicText>had events</TopicText>
    </Wrapper>
  );
};

export default HighLightText;
