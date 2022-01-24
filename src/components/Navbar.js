import React from "react";
import logo from "../images/boba.png";
import styled from "styled-components";

export default function navbar() {
  return (
    <div>
      <Logo img src={logo} alt="" />
    </div>
  );
}

// styling
const Logo = styled.img`
  height: 90px;
`;
