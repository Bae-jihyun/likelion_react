import React, { useCallback } from "react";
import styled from "styled-components";
import Post from "../../Post/Post";

function Body() {
  const Data = [
    {
      postId: "3179b28c-47cb-4195-a3d0-04f6c52a2c2b",
      userId: "govl6113",
      title: "안녕하세요",
      content: "저는 배지현입니다.",
      Date: "2021-09-02T00:00:00Z",
    },
    {
      postId: "9ffae45a-97f9-40a7-9b83-9b49366b0033",
      userId: "happy22",
      title: "안녕하세요",
      content: "저는 단국대학생입니다. 앞으로 잘 부탁드립니다!",
      Date: "2021-07-31T15:00:00.000Z",
    },
  ];
  const handleToDoSubmit = useCallback((event) => {}, []);

  return (
    <Section>
      <Form id="todo-form">
        <Input
          type="text"
          placeholder="Write a To Do and Press Enter"
          required
        />
        <button onClick={handleToDoSubmit}>제출</button>
      </Form>
      <Ul>
        {Data.map((value, index) => (
          <li key={index}>
            <Post
              userId={value.userId}
              title={value.title}
              content={value.content}
              Date={value.Date}
            />
            <hr />
          </li>
        ))}
      </Ul>
    </Section>
  );
}

const Section = styled.section`
  flex: 1;
  margin-top: 10px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 200px;
  margin-right: 8px;
`;
const Ul = styled.ul`
  padding: 10px;
  list-style: none;
`;

export default Body;
