import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Hero() {
  let navigate = useNavigate();

  return (
    <Container>
      <h1>Boba Drunk</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        voluptatum, eos illo in dolorem facere exercitationem quam pariatur vero
        non?
      </p>
      <button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Menu
      </button>
    </Container>
  );
}

// styling
const Container = styled.div`
  background-color: gray;
  height: 60vh;
  width: 100%;
  padding: 0 20%;
  display: grid;
  gap: 1rem;
  grid-even-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));

  h1 {
    color: blue;
  }

  button {
    background-color: var(--btnColor);
    font-weight: bold;
    height: 3rem;
    width: 8rem;
    border-radius: 50px;
    cursor: pointer;
  }

  button:hover {
    color: var(--textHover);
    background-color: var(--btnHover);
  }

  @media (min-width: 50em) {
    .grid-auto-flow {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
`;
