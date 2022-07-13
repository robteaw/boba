import React from "react";
import { useNavigate } from "react-router-dom";
import app from "../../images/app.png";
import location from "../../images/location.png";
import yellow from "../../images/boba_yellow.png";
import styled from "styled-components";

export default function Card() {
  let navigate = useNavigate();

  return (
    <Container>
      <div className="card_container">
        <div
          className="card"
          onClick={() => {
            navigate("/location");
          }}
        >
          <img src={location} alt="" />
          <h2>Location</h2>
          <p>Check out our shops</p>
        </div>
        <div
          className="card"
          onClick={() => {
            navigate("/menu");
          }}
        >
          <img src={yellow} alt="" />
          <h2>Jackfruit</h2>
          <p>Boba of the month</p>
        </div>
        <div className="card">
          <img src={app} alt="" />
          <h2>App</h2>
          <p>Coming soon</p>
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
    gap: 5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .card {
    color: var(--subTextHover);
    background-color: var(--btnColor);
    height: 100%;
    width: 20rem;
    padding: 2rem;
    cursor: pointer;
    position: relative;
    border: 1px;
    border-radius: 10px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .card p {
    color: var(--subTextHover);
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

  @media (max-width: 1250px) {
    .card_container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
