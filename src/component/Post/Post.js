import React from "react";
import styled from "styled-components";

function Post({ userId, title, content, day }) {
  return (
    <Section>
      <Information>
        <Title>{title}</Title>
        <Write>
          <LittleInformation>{userId}</LittleInformation>
          <LittleInformation>{day}</LittleInformation>
        </Write>
      </Information>
      {content}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`;
const Title = styled.span`
  display: flex;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
`;
const Write = styled.div`
  display: flex;
  flex-direction: column;
`;
const LittleInformation = styled.span`
  font-size: 13px;
`;
export default Post;
