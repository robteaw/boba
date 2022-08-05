import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  // Total calculation
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // If cart is empty
  // const [cartAppear, setCartAppear] = useState(false);
  // const showCart = () => setCartAppear(!cartAppear);

  return (
    <Container>
      <h1>Shopping Cart</h1>
        {/* <p>Your cart is empty.</p> */}
        
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>
        <p><b>Total:</b> ({totalItems} items)</p>
        <p>$ {totalPrice.toFixed(2)}</p>
        <button>Checkout</button>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

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
  button {
    color: var(--subText);
    background: var(--subColor);
    font-size: 1rem;
    font-weight: 600;
    width: 10rem;
    padding: 0.7rem;
    margin-top: 1rem;
    border: 2px solid transparent;
    border-radius: 5rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--subTextHover);
      background: var(--subHover);
      border: 2px solid var(--subTextHover);
    }
  }
`;
