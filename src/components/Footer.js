import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Foot>© 2022 Boba Drunk. All Rights Reserved.</Foot>;
}

// styling
const Foot = styled.div`
  color: #fff;
  background-color: var(--topBottom);
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1.5rem;
  top: 100%;
  bottom: 0;
  position: relative;
  clear: both;
`;
