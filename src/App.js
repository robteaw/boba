import "./index.css";
import {
  BrowserRouter as Router,
  Routes, // Switch has been replaced with Routes
  Route,
} from "react-router-dom"; // npm i react-router-dom
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Location from "./pages/Location/Location";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer";
import Error from "./pages/Error"; // Error Page
import ScrollToTop from "./components/ScrollToTop"; // Page stays on top when link clicked

export default function App() {
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
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
