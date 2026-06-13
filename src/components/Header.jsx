import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronDown, User, FileText, Store, Menu, X } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/products", { 
      state: { 
        search: searchQuery, 
        category: selectedCategory !== "All Categories" ? selectedCategory : "All" 
      } 
    });
  };

  const handleTrendingClick = (term) => {
    setSearchQuery(term);
    navigate("/products", { state: { search: term, category: "All" } });
  };

  const categories = ["All Categories", "Bakery", "Beverages", "Ice Cream", "HoReCa", "Contract Mfg"];

  return (
    <header className="im-header">
      {/* ROW 1: Utility Bar */}
      <div className="im-utility-bar">
        <div className="container utility-container">
          <div className="utility-left">
            <span className="utility-link">For Buyers</span>
            <span className="utility-divider">|</span>
            <span className="utility-link">For Suppliers</span>
            <span className="utility-divider">|</span>
            <span className="utility-link">Help Center</span>
          </div>
          <div className="utility-right">
            <span className="utility-link highlight">Download App</span>
            <span className="utility-divider">|</span>
            <span className="utility-link">Login</span>
            <span className="utility-divider">|</span>
            <span className="utility-link">Register Free</span>
          </div>
        </div>
      </div>

      {/* ROW 2: Main Navbar */}
      <div className="im-main-navbar">
        <div className="container navbar-container">
          {/* Brand Logo */}
          <div className="navbar-logo-area">
            <Link to="/" className="navbar-logo-link">
              <img 
                src={window.location.protocol === 'file:' ? './images/logo.png' : '/images/logo.png'} 
                alt="Vintop Products" 
                className="navbar-logo-img" 
              />
              <span className="logo-tagline">India's Food Ingredients Marketplace</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="navbar-search-section">
            <form onSubmit={handleSearchSubmit} className="search-bar-form">
              <div className="search-category-dropdown">
                <span>{selectedCategory}</span>
                <ChevronDown size={14} />
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="search-category-select-hidden"
                >
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                placeholder="Search for Bread Improver, Cake Premix, Ice Cream Mix..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              <button type="submit" className="search-submit-btn">
                <Search size={18} />
                <span>Search</span>
              </button>
            </form>

            {/* Trending Tags */}
            <div className="search-trending-tags">
              <span>Trending:</span>
              <button onClick={() => handleTrendingClick("Bread Improver")}>Bread Improver</button>
              <span className="tag-dot">•</span>
              <button onClick={() => handleTrendingClick("Cake Premix")}>Cake Premix</button>
              <span className="tag-dot">•</span>
              <button onClick={() => handleTrendingClick("Softy Ice Cream Mix")}>Softy Ice Cream Mix</button>
              <span className="tag-dot">•</span>
              <button onClick={() => handleTrendingClick("Custard Powder")}>Custard Powder</button>
              <span className="tag-dot">•</span>
              <button onClick={() => handleTrendingClick("Rose Milk Powder")}>Rose Milk Powder</button>
            </div>
          </div>

          {/* B2B Action Buttons */}
          <div className="navbar-actions-section">
            <Link to="/contact" className="im-btn im-btn-orange-outline">
              <FileText size={16} />
              <span>Post Requirement</span>
            </Link>
            <Link to="/contact" className="im-btn im-btn-teal">
              <Store size={16} />
              <span>List Your Products</span>
            </Link>
            <div className="my-account-trigger">
              <User size={18} className="account-icon" />
              <span>My Account</span>
              <ChevronDown size={12} />
            </div>
            
            <button className="mobile-menu-toggle-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ROW 3: Categories Strip */}
      <div className="im-categories-strip">
        <div className="container strip-container">
          <nav className="strip-nav-links">
            <Link to="/products" state={{ category: "Bakery" }}>Bakery Products</Link>
            <Link to="/products" state={{ category: "Beverages" }}>Beverages</Link>
            <Link to="/products" state={{ category: "Ice Cream" }}>Ice Cream Range</Link>
            <Link to="/products" state={{ category: "HoReCa" }}>HoReCa & Savouries</Link>
            <Link to="/products" state={{ category: "Contract Mfg" }}>Contract Manufacturing</Link>
            <Link to="/products" state={{ category: "All" }}>New Launches</Link>
            <Link to="/contact">Bulk Orders</Link>
            <Link to="/about">About Us</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="im-mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="im-mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="drawer-logo">Vintop Products</span>
              <button className="drawer-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="drawer-links">
              <Link to="/products" state={{ category: "Bakery" }} onClick={() => setIsMobileMenuOpen(false)}>Bakery Products</Link>
              <Link to="/products" state={{ category: "Beverages" }} onClick={() => setIsMobileMenuOpen(false)}>Beverages & Soft Drinks</Link>
              <Link to="/products" state={{ category: "Ice Cream" }} onClick={() => setIsMobileMenuOpen(false)}>Ice Cream Products</Link>
              <Link to="/products" state={{ category: "HoReCa" }} onClick={() => setIsMobileMenuOpen(false)}>HoReCa Solutions</Link>
              <Link to="/products" state={{ category: "Contract Mfg" }} onClick={() => setIsMobileMenuOpen(false)}>Contract Manufacturing</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us / Post Requirement</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
