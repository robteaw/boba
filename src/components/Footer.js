import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Foot>© 2022 Boba Drunk. All Rights Reserved.</Foot>;
}

// styling
const Foot = styled.div`
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
