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
    color: var(--subText);
    background: var(--subColor);
    font-size: 1rem;
    font-weight: 600;
    height: 3rem;
    width: 10rem;
    padding: 0.7rem;
    margin-top: 1rem;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--subTextHover);
      background: var(--subHover);
      border: 2px solid var(--subTextHover);
    }
  }
  @media (min-width: 50em) {
    .grid-auto-flow {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
`;
