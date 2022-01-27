import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/boba.png";
import styled from "styled-components";

export default function navbar() {
  return (
    <Nav>
      <div className="brand">
        <Link to="/">
          <Logo img src={logo} alt="" />
        </Link>
        <div className="toggle"></div>
      </div>
      <ul className="links">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </Nav>
  );
}

// styling
const Nav = styled.nav`
  background-color: #000;
  display: flex;
  justify-content: space-evenly;
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
