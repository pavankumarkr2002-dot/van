import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ImageCacheProvider } from "./context/ImageCacheContext";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  return (
    <ImageCacheProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <main className="anti-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} /> {/* Fallback route */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </ImageCacheProvider>
  );
}
