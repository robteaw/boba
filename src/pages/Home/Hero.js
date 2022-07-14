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
  min-height: 60vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .center {
    color: var(--btnColor);
    background-color: rgba(0, 0, 0, 0.3);
    min-height: 60vh;
    padding: 10rem 2rem;
  }
  h1 {
    color: var(--subText);
  }
  h1,
  p {
    text-align: center;
  }
  button {
    color: var(--subTextHover);
    background: var(--subHover);
    border: 2px solid var(--subTextHover);
    font-size: 1rem;
    font-weight: 600;
    height: 3rem;
    width: 10rem;
    padding: 0.7rem;
    margin: 2.5rem auto;
    border-radius: 5rem;
    display: block;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--subText);
      background: var(--subColor);
      border: 2px solid var(--subColor);
    }
  }
`;
