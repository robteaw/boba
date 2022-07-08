import React from "react";
import blue from "../../images/boba_blue.png";
import brown from "../../images/boba_brown.png";
import cyan from "../../images/boba_cyan.png";
import green from "../../images/boba_green.png";
import pink from "../../images/boba_pink.png";
import purple from "../../images/boba_purple.png";
import red from "../../images/boba_red.png";
import yellow from "../../images/boba_yellow.png";
import styled from "styled-components";

export default function Menu() {
  return (
    <Container>
      <h1>Menu</h1>
      <div className="card_container">
        <div className="card">
          <img src={blue} alt="" />
          <h2>Blueberry</h2>
        </div>
        <div className="card">
          <img src={brown} alt="" />
          <h2>Milk Tea</h2>
        </div>
        <div className="card">
          <img src={cyan} alt="" />
          <h2>Hawaiian</h2>
        </div>
        <div className="card">
          <img src={green} alt="" />
          <h2>Avocado</h2>
        </div>
        <div className="card">
          <img src={pink} alt="" />
          <h2>Hibiscus</h2>
        </div>
        <div className="card">
          <img src={purple} alt="" />
          <h2>Grape</h2>
        </div>
        <div className="card">
          <img src={red} alt="" />
          <h2>Strawberry</h2>
        </div>
        <div className="card">
          <img src={yellow} alt="" />
          <h2>Jackfruit</h2>
        </div>
      </div>
    </Container>
  );
}

// styling
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 8rem 20%;

  .card_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .card {
    width: 15rem;
    padding: 2rem;
    cursor: pointer;
    position: relative;
    border: 1px;
    border-radius: 10px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .card:hover {
    color: var(--navHover);
    border-radius: 2.5%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  img {
    height: 10rem;
  }
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
  h2 {
    margin-top: 2rem;
  }
`;
