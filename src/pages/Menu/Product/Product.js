import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Data from "../Data";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart }) => {
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
        {dataSearch.map((item) => {
          return (
            <div className="card">
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
              <p>${item.price.toFixed(2)}</p>
              <Button onClick={() => addToCart(product.id)} />
            </div>
          );
        })}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    // loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
