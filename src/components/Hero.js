import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Hero() {
  let navigate = useNavigate();

  return (
    <Section>
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
    </Section>
  );
}

// styling
const Section = styled.div`
  background-color: white;
  height: 100vh;
  h1 {
    color: blue;
  }
`;
