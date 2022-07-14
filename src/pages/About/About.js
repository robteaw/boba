import React from "react";
import styled from "styled-components";
import image from "../../images/about_boba.png";

export default function About() {
  return (
    <Container>
      <Left>
        <h1>About Boba Drunk</h1>
        <p>
          Boba Drunk was founded on February 2021 in Houston, TX. The name, Boba
          Drunk, came from the idea that boba tea is so delicious that it is
          addicting. We provide a variety of boba teas. No worries, there is no
          alcohol. The shop is maintained to be a family-friendly environment.
        </p>
      </Left>

      <div>
        <img src={image} alt="" />
      </div>
    </Container>
  );
}

// styling
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  padding: 8rem 10%;
  align-items: center;
  justify-content: center;
  column-gap: 10rem;
  p {
    margin: 20px 0 32px 0;
    line-height: 2;
  }
  img {
    height: 16rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 825px) {
    img {
      display: none;
    }
  }
`;

const Left = styled.div`
  text-align: left;
`;
