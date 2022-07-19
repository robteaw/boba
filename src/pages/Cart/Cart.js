import React from "react";
import styled from "styled-components";
import useCart from "react-use-cart";

export default function Cart() {
  // const {item} = useCart();

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <p>Your cart is empty.</p>
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
  text-align: center;
  p {
    margin: 20px 0 32px 0;
    line-height: 2;
  }
`;
