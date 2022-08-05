import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes, // Switch has been replaced with Routes
  Route,
  Navigate,
} from "react-router-dom"; // npm i react-router-dom
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Location from "./pages/Location/Location";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer";
import Error from "./pages/Error"; // Error Page
import ScrollToTop from "./components/ScrollToTop"; // Page stays on top when link clicked
import {connect} from 'react-redux';

export default function App({currentItem}) {
  return (
    <Router>
      <ScrollToTop />
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {!currentItem ? (
            <Route path="/" />
            ) : (<Route path="/menu" element={<Menu />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  }
}

connect(mapStateToProps)(App);