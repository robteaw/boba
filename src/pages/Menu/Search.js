import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Data from "./Data";

export default function Search() {
  // Filter search
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = Data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  // Delete search
  const [remove, setRemove] = useState(false);
  const removeType = () => setRemove(!remove);

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
          onClick={removeType}
        />
        {remove ? <span className="delete">&#10006;</span> : ""}
      </div>
      <div className="card_container">
        {dataSearch.map((item, index) => {
          return (
            <div className="card">
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
