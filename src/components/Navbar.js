import React from "react";
import logo from "../images/boba.png";
import styled from "styled-components";

export default function navbar() {
  return (
    <Nav>
      <div className="brand">
        <Logo img src={logo} alt="" />
        <div className="toggle"></div>
      </div>
      <ul className="links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#locations">Locations</a>
        </li>
        <li>
          <a href="#order">Order</a>
        </li>
      </ul>
    </Nav>
  );
}

// styling
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .toggle {
    display: none;
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: red;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c7f4;
        }
      }
      .active {
      }
    }
  }
`;

const Logo = styled.img`
  height: 90px;
  margin-top: 1rem;
  cursor: pointer;
`;
