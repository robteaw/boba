import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Search from "./Search";
import {connect} from 'react-redux';

function Products({products}) {
  return (
    <Container>
      <h1>Menu</h1>
      <Search />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return (
    products: state.shop.products,
  )
}

export default connect(mapStateToProps)(Menu);