import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Data from "../Data";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  let navigate = useNavigate();

  // Filter search
  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };
  let dataSearch = Data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  // Clear search
  const clearInput = () => {
    setFilter("");
  };

  return (
    <>
      <div className="search_bar">
        <div className="search_icon">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder=" Search"
          value={filter}
          onChange={searchText.bind(this)}
        />
        <span className="delete" onClick={clearInput}>
          &#10006;
        </span>
      </div>
      <div className="card_container">
        {dataSearch.map((product) => {
          return (
            <div className="card">
              <img src={product.img} alt="" />
              <h2>{product.title}</h2>
              <p>${product.price.toFixed(2)}</p>
              <span className="add" onClick={() => addToCart(product.id)}>
                Add to Cart
              </span>
              <span
                className="view"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                View Cart
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
