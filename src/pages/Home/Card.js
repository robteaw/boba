import React from "react";
import styled from "styled-components";

export default function Card() {
  return (
    <Container>
      <Cards>
        <img src="" alt="" />
        <h5>1</h5>
        <p></p>
      </Cards>
      <Cards>
        <img src="" alt="" />
        <h5>2</h5>
        <p></p>
      </Cards>
      <Cards>
        <img src="" alt="" />
        <h5>3</h5>
        <p></p>
      </Cards>
    </Container>
  );
}

const Container = styled.div``;

const Cards = styled.div`
  background-color: gray;
`;
