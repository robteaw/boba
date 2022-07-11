import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export default function Top() {
  const [show, toggleShow] = useState(true);

  return (
    <Container>
      {show && (
        <InnerContainer>
          Free delivery on all orders over $25!
          <button
            onClick={() => {
              toggleShow(!show);
            }}
          >
            <FaTimes />
          </button>
        </InnerContainer>
      )}
    </Container>
  );
}

// styling
const Container = styled.div`
  position: sticky;

  button {
    color: var(--textColor2);
    background-color: transparent;
    height: 1.7rem;
    width: 2rem;
    float: right;
    margin-right: 1rem;
    border: none;
    cursor: pointer;
    &:hover {
      color: var(--navHover);
    }
  }
`;

const InnerContainer = styled.div`
  color: var(--textColor2);
  background-color: var(--topBottom);
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
`;
