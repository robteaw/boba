import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import image from "../../images/barista.jpg"

export default function Career() {
  let navigate = useNavigate();

  return (
    <Container>
        <h1>Career</h1>
        <p>Are you an enthusiastic individual?</p>
        <p>Like working with people in a chill setting?</p>
        <p>Apply for our barista position below.</p>
        <button
        onClick={() => {
          navigate("/contact");
        }}
        >
          Apply
        </button>
        <InnerContainer>
          <div><img src={image} alt="" /></div>
          <Right>
            <h2>Job Description</h2>
            <p>Prepare and serve boba teas.</p>
            <p>Clean and sanitize work areas, utensils and equipments.</p>
            <p>Assist customer questions and needs.</p>
            <p>Process customer payments.</p>
            <p>Order, recieve and distribute stock supplies.</p>
          </Right>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 3rem auto 10rem auto;
  padding: 5rem 20%;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  button {
    color: var(--subText);
    background: var(--subColor);
    font-size: 1rem;
    font-weight: 600;
    width: 10rem;
    padding: 0.7rem;
    margin: 1.5rem auto 5rem auto;
    display: block;
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
  }
`

const InnerContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  column-gap: 10rem;
  h2, p {
    text-align: left;
  }
  img {
    height: 23rem;
    width: 20rem;
  }
`

const Right = styled.div`

`