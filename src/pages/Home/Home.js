import React from "react";
import Hero from "./Hero";
import Bottom from "./Bottom";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Bottom />
    </Container>
  );
}

// styling
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
`;
