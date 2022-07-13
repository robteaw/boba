import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Data from "./Data";

export default function Search() {
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

  return (
    <>
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={searchText.bind(this)}
        />
        <div className="search_btn">
          <FaSearch />
        </div>
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
