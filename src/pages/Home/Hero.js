import React from "react";
import HeroText from "./HeroText";
import heroImg from "../../images/hero.png";
import styled from "styled-components";

export default function Hero() {
  return (
    <Container
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="center">
        <HeroText />
      </div>
    </Container>
  );
}

// styling
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.09);
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .center {
    color: var(--subText);
    background-color: rgba(0, 0, 0, 0.5);
    height: 60vh;
    padding: 10rem 2rem;
  }
  h1 {
    /* color: var(--selectColor); */
  }
  h1,
  p {
    text-align: center;
  }
  button {
    color: var(--subText);
    background: var(--subColor);
    font-size: 1rem;
    font-weight: 600;
    height: 3rem;
    width: 10rem;
    padding: 0.7rem;
    margin: 2.5rem auto;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    display: block;
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
