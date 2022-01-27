import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm i react-router-dom
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Locations from "./components/pages/Locations";
import Order from "./components/pages/Order";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* Switch has been replaced with Routes */}
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/locations" component={Locations} />
        <Route path="/order" component={Order} />
      </Routes>
      <Footer />
    </Router>
  );
}
