import React from "react";
import Product from "./Product/Product";
import Data from "./../Data";
import { connect } from "react-redux";

export default function Products({ item }) {
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

  return (
    <Container>
      <h1>Menu</h1>
      {dataSearch.map((item) => {
        <Product key={item.id} cardData={item} />;
      })}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    dataSearch: state.shop.item,
  };
};

connect(mapStateToProps)(Products);
