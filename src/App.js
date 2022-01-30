import "./index.css";
import {
  BrowserRouter as Router,
  Routes, // Switch has been replaced with Routes
  Route,
} from "react-router-dom"; // npm i react-router-dom
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import Error from "./pages/Error"; // Page appears when it is a mistype or not exist page

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
