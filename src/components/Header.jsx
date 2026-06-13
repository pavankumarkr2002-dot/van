import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`site-header ${isSticky ? "sticky" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img 
            src="./images/logo.png" 
            alt="Vintop Logo" 
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Home
          </NavLink>
          
          <NavLink to="/about-us" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            About Us
          </NavLink>

          {/* Products Dropdown */}
          <div 
            className="dropdown-wrapper"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <NavLink 
              to="/products" 
              className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? "active" : ""}`}
              onClick={(e) => {
                // Toggle dropdown on mobile/tablet if clicked directly, but allow navigation on desktop
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
            >
              Products <ChevronDown size={14} className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`} />
            </NavLink>

            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/bakery" className="dropdown-item" onClick={closeMenu}>
                Bakery
              </Link>
              <Link to="/beverages-and-ice-creams" className="dropdown-item" onClick={closeMenu}>
                Beverages & Ice Creams
              </Link>
              <Link to="/horeca" className="dropdown-item" onClick={closeMenu}>
                HoReCa
              </Link>
            </div>
          </div>

          <NavLink to="/contract-manufacturing" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Contract Manufacturing
          </NavLink>

          <NavLink to="/contact-us" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Home
          </NavLink>
          
          <NavLink to="/about-us" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            About Us
          </NavLink>

          {/* Mobile Products Sub-menu */}
          <div className="mobile-dropdown-wrapper">
            <button 
              className="mobile-nav-link mobile-dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products <ChevronDown size={16} className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`} />
            </button>
            <div className={`mobile-dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/products" className="mobile-dropdown-item" onClick={closeMenu}>
                All Products
              </Link>
              <Link to="/bakery" className="mobile-dropdown-item" onClick={closeMenu}>
                Bakery Products
              </Link>
              <Link to="/beverages-and-ice-creams" className="mobile-dropdown-item" onClick={closeMenu}>
                Beverages & Ice Creams
              </Link>
              <Link to="/horeca" className="mobile-dropdown-item" onClick={closeMenu}>
                HoReCa Products
              </Link>
            </div>
          </div>

          <NavLink to="/contract-manufacturing" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Contract Manufacturing
          </NavLink>

          <NavLink to="/contact-us" className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
