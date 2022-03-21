import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa"; // npm install react-icons --save
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { logoAnim, linkAnim } from "../animations";
import { useScroll } from "../components/useScroll";

export default function Navbar() {
  const [element, controls] = useScroll();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!false);

  return (
    <Nav as={motion.nav} initial="hidden" animate={controls} ref={element}>
      <div className="brand">
        <Link to="/">
          <Logo
            as={motion.img}
            img
            src={logo}
            alt="logo"
            variants={logoAnim}
            onClick={closeMobileMenu}
          />
        </Link>
        <div className="toggle"></div>
      </div>
      <ul className="links">
        <motion.li>
          {/* <Link to="/" className="active">
            Home
          </Link> */}
        </motion.li>
        <motion.li variants={linkAnim}>
          <Link to="/about">About</Link>
        </motion.li>
        <motion.li variants={linkAnim}>
          <Link to="/menu">Menu</Link>
        </motion.li>
        <motion.li variants={linkAnim}>
          <Link to="/contact">Contact</Link>
        </motion.li>
        <div className="cart">
          <motion.li variants={linkAnim}>
            <Link to="/order">
              <FaShoppingCart />
            </Link>
          </motion.li>
        </div>
      </ul>
    </Nav>
  );
}

// styling
const Nav = styled(motion.nav)`
  background-color: #000;
  display: flex;
  justify-content: space-around;
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
        text-align: center;
        margin: 0 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c7f4;
        }
      }
      .active {
      }
      .cart {
        align-items: right;
        justify-content: right;
      }
    }
  }
`;

const Logo = styled.img`
  height: 70px;
  margin-top: 1rem;
  align-items: left;
  cursor: pointer;
`;
