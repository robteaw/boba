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
        <img src={item.img} alt={item.title} />
        <p className="title">{item.title}</p>
        <p>$ {item.price.toFixed(2)}</p>
        <input
          type="number"
          id="qty"
          value={input}
          onChange={onChangeHandler}
        />
        <span className="trash" onClick={() => removeFromCart(item.id)}>
          <FaTrashAlt />
        </span>
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
  img {
    height: 5rem;
  }
  .title {
    font-weight: bold;
  }
  .trash {
    width: 4rem;
    cursor: pointer;
  }
  input,
  select {
    width: 4rem;
    margin: 0.5rem 0;
    padding: 0.75rem;
    border-radius: 0.5rem;
  }
`;
