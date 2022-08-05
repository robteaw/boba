import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustItemQty,
} from "../../redux/Shopping/shopping-actions";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const CartItem = ({ item, removeFromCart, adjustItemQty }) => {
  // Change price when quantity is adjusted
  const [input, setInput] = useState(item.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustItemQty(item.id, e.target.value);
  };

  return (
    <Container>
      <div className="items">
        <div>
          <img src={item.img} alt={item.title} />
          <p className="title">{item.title}</p>
          <p>$ {item.price.toFixed(2)}</p>
        </div>
        <div className="right">
          <input
            type="number"
            id="qty"
            value={input}
            min="0"
            max="100"
            onChange={onChangeHandler}
          />
          <button className="trash" onClick={() => removeFromCart(item.id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

// Styling
const Container = styled.div`
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  .items {
    height: 100%;
    width: 20rem;
    display: flex;
    padding: 1rem;
    gap: 5rem;
    align-items: end;
    justify-content: center;
  }
  img {
    height: 5rem;
    margin-top: 4rem;
  }
  .title {
    font-weight: bold;
  }
  .right {
    display: flex;
    flex-direction: column;
    .trash {
      width: 3.5rem;
      margin-top: 1rem;
      cursor: pointer;
    }
    input[type="number"] {
      background-color: #f3f3f3;
      width: 4rem;
      margin: 0.5rem 0;
      padding: 0.75rem;
      appearance: none;
      outline: none;
      border: none;
      border-radius: 0.5rem;
      transition: 0.4s;
      &:focus {
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
      }
    }
    input[type="number"]::-webkit-inner-spin-button {
      /* -webkit-appearance: none; */
      cursor: pointer;
      display: block;
      width: 8px;
      color: #333;
      position: relative;
    }
  }
`;
