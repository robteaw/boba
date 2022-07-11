import React from "react";
import styled from "styled-components";
import Boba from "./Boba";
import Dessert from "./Dessert";

export default function Menu() {
  return (
    <Container>
      <h1>Menu</h1>
      <div className="card_container">
        <Boba />
        <Dessert />
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
    gap: 5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .card {
    color: var(--subTextHover);
    background-color: var(--btnColor);
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
  @media (max-width: 1050px) {
    .card_container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
