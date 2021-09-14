import React, { useState } from "react";
import styled from "styled-components";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <Section>
      <div className="counter">this is {counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        minus
      </button>
    </Section>
  );
}

const Section = styled.div`
  width: 300px;
`;

export default Counter;
