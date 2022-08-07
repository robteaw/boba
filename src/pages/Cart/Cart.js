import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import styled from "styled-components";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  let navigate = useNavigate();

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

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <div className="inner-container">
        {totalItems === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
            <button onClick={() => navigate("/menu")}>View Menu</button>
          </div>
        ) : (
          <>
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="total">
              <p>
                <b>Items:</b> {totalItems}
              </p>
              <p>
                <b>Total:</b> ${totalPrice.toFixed(2)}
              </p>
              <button onClick={() => alert("Checkout Complete!") ? "" : window.location.reload()}>Checkout</button>
            </div>
          </>
        )}
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

// Styling
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 8rem 10%;
  align-items: center;
  justify-content: center;
  text-align: center;
  .inner-container {
    display: flex;
    justify-content: space-around;
  }
  h1 {
    margin-bottom: 5rem;
  }
  .empty button {
    margin: 1.5rem 0;
  }
  .total {
    position: -webkit-sticky;
    position: sticky;
    top: 25px;
    p {
      margin: 1.5rem 0;
      text-align: left;
      word-spacing: 2rem;
    }
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
