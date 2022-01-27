import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroDiv>
      <h1>Boba Drunk</h1>
    </HeroDiv>
  );
}

// styling
const HeroDiv = styled.div`
  background-color: red;
  height: 100vh;
  h1 {
    color: #fff;
  }
`;
