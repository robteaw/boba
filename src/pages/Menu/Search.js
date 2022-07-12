import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="search_bar">
      <input type="text" placeholder="Search" />
      <div className="search_btn">
        <FaSearch />
      </div>
    </div>
  );
}
