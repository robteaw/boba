import React, { useState } from "react";
import styled from "styled-components";

export default function Order() {
  // Cart
  const [cartItems, setCartItems] = useState([]);

  return (
    <Container>
      <h1>My Cart</h1>
      {cartItems.length === 0 && <div>Your cart is empty.</div>}
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
`;
