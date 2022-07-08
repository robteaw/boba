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
        <MenuIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MenuIcon>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <motion.li variants={linkAnim} className="nav-item">
          <Link to="/about" onClick={closeMobileMenu} className="nav-links">About</Link>
        </motion.li>
        <motion.li variants={linkAnim} className="nav-item">
          <Link to="/menu" onClick={closeMobileMenu} className="nav-links">Menu</Link>
        </motion.li>
        <motion.li variants={linkAnim} className="nav-item">
          <Link to="/location" onClick={closeMobileMenu} className="nav-links">Location</Link>
        </motion.li>
        <motion.li variants={linkAnim} className="nav-item">
          <Link to="/career" onClick={closeMobileMenu} className="nav-links">Career</Link>
        </motion.li>
        <motion.li variants={linkAnim} className="nav-item">
          <Link to="/contact" onClick={closeMobileMenu} className="nav-links">Contact</Link>
        </motion.li>
        <div className="cart">
          <motion.li variants={linkAnim} className="nav-item">
            <Link to="/order" onClick={closeMobileMenu} className="nav-links">
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
  background-color: var(--navBg);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 4vw;
  position: relative;
  top: 0;
  z-index: 99;
  .nav-menu {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: var(--navText);
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
    position: relative;

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      list-style: none;
      position: absolute;
      top: 4.375rem; /* removes the spacing in navbar and menu */
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-menu active {
      background-color: var(--selectColor);
      left: 0;
      transition: all 0.6s ease;
      opacity: 1;
      z-index: 999;
      outline: none;
      border: 0;
    }
    .nav-links {
      text-align: center;
      padding: 2rem;
      top: 0;
      width: 100%;
      display: table;
    }
    .nav-item {
      text-align: center;
      padding: 2rem;
      top: 0;
      width: 100%;
      display: table;
      
      .nav-item:nth-child(1) {
        margin-top: 3.5rem;
      }
      .nav-item:nth-child(5) {
        margin-bottom: 100%;
      }
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
    transform: translate(25%, 30%);
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1100px) {
    color: var(--subColor);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
