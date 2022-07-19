import React from "react";
import styled from "styled-components";
import Search from "./Search";

export default function Menu() {
  return (
    <Container>
      <h1>Menu</h1>
      <Search />
    </Container>
  );
}

// styling
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 8rem 10%;

  .card_container {
    width: 100%;
    margin: 5rem 0;
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
    width: 20rem;
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
  .card p {
    color: var(--subTextHover);
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
  // Button
  .add {
    color: var(--subColor);
    background-color: var(--navHover);
    font-weight: bold;
    width: 8rem;
    margin: 1rem auto;
    padding: 0.5rem;
    border-radius: 5rem;
    cursor: pointer;
    &:hover {
      color: var(--subText);
      background-color: var(--subColor);
    }
  }
  // Search
  .search_bar {
    background-color: var(--inputColor);
    width: 100%;
    max-width: 20rem;
    display: flex;
    margin: 0 auto;
    padding: 0.25rem;
    align-items: center;
    border-radius: 0.5rem 0.5rem;
    &:focus {
      background-color: var(--subText);
      appearance: none;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    }
  }
  input {
    background-color: var(--inputColor);
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0.75rem;
    appearance: none;
    border: none;
    outline: none;
    transition: 0.4s;
    &:focus {
      background-color: var(--subText);
      appearance: none;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    }
  }
  .search_icon {
    color: var(--selectColor);
    font-size: 1rem;
    padding: 0 0.75rem;
    display: flex;
  }
  .delete {
    color: var(--selectColor);
    padding: 0 0.75rem;
    cursor: pointer;
    &:hover {
      color: var(--navHover);
    }
  }
  @media (max-width: 1250px) {
    .card_container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
