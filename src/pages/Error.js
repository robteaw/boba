import React from "react";
import styled from "styled-components";
import image from "../images/error.png";

export default function Error() {
  return (
    <Container>
      <h1>Error! Page not found.</h1>
      <img src={image} alt="" />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 3rem auto 5rem auto;
  padding: 5rem 20%;
  align-items: center;
  text-align: center;
  img {
    height: 20rem;
    margin-top: 3rem;
  }
`;
