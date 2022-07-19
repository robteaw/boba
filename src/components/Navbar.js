import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"; // npm install react-icons --save
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { logoAnim, linkAnim } from "../animations";
import { useScroll } from "../components/useScroll";

export default function Navbar() {
  // Setting nav mobile
  const [element, controls] = useScroll();
  const [click, setClick] = useState(false);

  // Close nav menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Change nav color
  const [color, setColor] = useState(false);
  const [icon, setIcon] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 65) {
      setColor(true);
      setIcon(true);
    } else {
      setColor(false);
      setIcon(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Nav
      as={motion.nav}
      initial="hidden"
      animate={controls}
      ref={element}
      className={color ? "navbar nav-scroll" : "navbar"}
    >
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
        <MenuIcon
          onClick={handleClick}
          className={icon ? "icon icon-scroll" : "icon"}
        >
          {click ? <FaTimes /> : <FaBars />}
        </MenuIcon>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <motion.li variants={linkAnim}>
          <Link to="/about" onClick={closeMobileMenu} className="nav-links">
            About
          </Link>
        </motion.li>
        <motion.li variants={linkAnim}>
          <Link to="/menu" onClick={closeMobileMenu} className="nav-links">
            Menu
          </Link>
        </motion.li>
        <motion.li variants={linkAnim}>
          <Link to="/location" onClick={closeMobileMenu} className="nav-links">
            Locations
          </Link>
        </motion.li>
        <motion.li variants={linkAnim}>
          <Link to="/career" onClick={closeMobileMenu} className="nav-links">
            Careers
          </Link>
        </motion.li>
        <motion.li variants={linkAnim}>
          <Link to="/contact" onClick={closeMobileMenu} className="nav-links">
            Contact
          </Link>
        </motion.li>
        <div className="cart">
          <motion.li variants={linkAnim}>
            <Link to="/cart" onClick={closeMobileMenu} className="nav-links">
              <FaShoppingCart />
            </Link>
          </motion.li>
        </div>
      </ul>
    </Nav>
  );
}

// styling
const Nav = styled.nav`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 4vw;
  position: sticky;
  top: 0;
  z-index: 99;
  .nav-menu {
    display: flex;
    list-style-type: none;
    gap: 0 2rem;
    li {
      a {
        font-family: "proxima-nova", sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        text-align: center;
        margin: 0 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: var(--navHover);
          .cart {
            align-items: right;
            justify-content: right;
          }
        }
      }
      .nav-item {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
      }
    }
  }
  @media (max-width: 1100px) {
    .navbar {
      height: 65px;
      position: relative;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 4rem; /* removes the spacing in navbar and menu */
      left: -100%;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background-color: var(--selectColor);
      padding: 1.5rem;
      left: 0;
      transition: all 0.6s ease;
      opacity: 98%;
      z-index: 999;
      outline: none;
      border: 0;
    }
    .nav-links {
      text-align: center;
      padding: 1.5rem;
      top: 0;
      width: 100%;
      display: table;
    }
  }
`;

const Logo = styled.img`
  height: 50px;
  align-items: left;
  cursor: pointer;

  @media (max-width: 1100px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 15%);
  }
`;

const MenuIcon = styled.div`
  color: var(--subColor);
  display: none;

  @media (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
