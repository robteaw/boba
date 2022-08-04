import React from "react";
import Product from "./Product/Product";
import { connect } from "react-redux";

const Products = ({ products }) => {
  return (
    <Container>
      <h1>Menu</h1>
      {products.map((product) => {
        <Product key={product.id} product={product} />;
      })}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
