import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useImageCache } from "../context/ImageCacheContext";
import { Menu, X, ChevronDown, KeyRound, Check, AlertCircle } from "lucide-react";

export default function Header() {
  const { apiKey, setApiKey } = useImageCache();
  const [tempKey, setTempKey] = useState(apiKey);
  const [isApiBarOpen, setIsApiBarOpen] = useState(!apiKey); // Open by default if no key
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveKey = (e) => {
    e.preventDefault();
    setApiKey(tempKey);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="site-header-wrapper">
      {/* Gemini API Key Bar */}
      <div className={`gemini-api-bar ${isApiBarOpen ? "open" : "collapsed"}`}>
        <div className="container api-bar-container">
          <div className="api-bar-left">
            <KeyRound size={16} className="api-key-icon" />
            <span>Gemini AI Image Engine:</span>
            {apiKey ? (
              <span className="api-status-badge active"><Check size={12} /> Key Set</span>
            ) : (
              <span className="api-status-badge inactive"><AlertCircle size={12} /> Key Missing</span>
            )}
          </div>
          
          {isApiBarOpen && (
            <form onSubmit={handleSaveKey} className="api-key-form">
              <input
                type="password"
                placeholder="Enter Gemini API Key (AIzaSy...)"
                value={tempKey}
                onChange={(e) => setTempKey(e.target.value)}
                className="api-key-input"
              />
              <button type="submit" className="api-key-save-btn">
                {isSaved ? "Saved!" : "Apply"}
              </button>
            </form>
          )}

          <button 
            className="api-bar-toggle-btn"
            onClick={() => setIsApiBarOpen(!isApiBarOpen)}
          >
            {isApiBarOpen ? "Collapse Setup ▲" : "Configure AI Engine ▼"}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="brand-logo-text" onClick={closeMenu}>
            <span className="logo-white">ANTI</span>
            <span className="logo-orange">GRAVITY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Home
            </NavLink>
            
            <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Products
            </NavLink>

            {/* Categories Hover Dropdown */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink 
                to="/categories" 
                className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }
                }}
              >
                Categories <ChevronDown size={14} className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`} />
              </NavLink>

              <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <Link to="/categories#cardio" className="dropdown-item" onClick={closeMenu}>
                  Cardio
                </Link>
                <Link to="/categories#strength" className="dropdown-item" onClick={closeMenu}>
                  Strength
                </Link>
                <Link to="/categories#machines" className="dropdown-item" onClick={closeMenu}>
                  Machines
                </Link>
                <Link to="/categories#accessories" className="dropdown-item" onClick={closeMenu}>
                  Accessories & Recovery
                </Link>
              </div>
            </div>

            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Contact
            </NavLink>
          </nav>

          {/* Quote Button */}
          <div className="navbar-right-actions">
            <Link to="/contact" className="btn btn-orange quote-nav-btn">
              Get A Quote
            </Link>
            
            {/* Mobile Toggle Button */}
            <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <nav className={`mobile-nav-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Home
          </NavLink>
          
          <NavLink to="/products" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Products
          </NavLink>

          <div className="mobile-dropdown-section">
            <button 
              className="mobile-nav-link mobile-dropdown-toggle-btn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Categories <ChevronDown size={18} className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`} />
            </button>
            <div className={`mobile-dropdown-drawer-menu ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/categories" className="mobile-dropdown-item" onClick={closeMenu}>
                All Categories
              </Link>
              <Link to="/categories#cardio" className="mobile-dropdown-item" onClick={closeMenu}>
                Cardio Range
              </Link>
              <Link to="/categories#strength" className="mobile-dropdown-item" onClick={closeMenu}>
                Strength Range
              </Link>
              <Link to="/categories#machines" className="mobile-dropdown-item" onClick={closeMenu}>
                Gym Machines
              </Link>
              <Link to="/categories#accessories" className="mobile-dropdown-item" onClick={closeMenu}>
                Accessories & Recovery
              </Link>
            </div>
          </div>

          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Contact
          </NavLink>

          <Link to="/contact" className="btn btn-orange mobile-quote-btn" onClick={closeMenu}>
            Get A Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
