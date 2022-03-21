import React from "react";
import styled from "styled-components";
import image from "../../images/about_boba.png";

export default function About() {
  return (
    <Section>
      <div>
        <h1>About Boba Drunk</h1>
        <p>
          Boba Drunk was founded on February 2021 in Houston, TX. The name, Boba
          Drunk, came from the idea that boba tea is so delicious that it is
          addicting. We provide a variety of boba teas. No worries, there is no
          alcohol. The shop is maintained to be a family-friendly environment.
        </p>
      </div>

      <div>
        <img src={image} alt="" />
      </div>
    </Section>
  );
}

const Section = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 2;
    margin: 20px 0 32px 0;
  }
  img {
    height: 16rem;
  }
`;
