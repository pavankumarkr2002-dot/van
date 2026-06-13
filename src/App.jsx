import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Bakery from "./pages/Bakery";
import BeveragesIceCreams from "./pages/BeveragesIceCreams";
import HoReCa from "./pages/HoReCa";
import ContractManufacturing from "./pages/ContractManufacturing";
import ContactUs from "./pages/ContactUs";

import "./App.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/beverages-and-ice-creams" element={<BeveragesIceCreams />} />
          <Route path="/horeca" element={<HoReCa />} />
          <Route path="/contract-manufacturing" element={<ContractManufacturing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
