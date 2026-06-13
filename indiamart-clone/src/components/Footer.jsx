import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="im-footer">
      <div className="container footer-grid-wrapper">
        {/* Column 1: Brand details & Socials */}
        <div className="footer-col col-brand-info">
          <Link to="/" className="footer-brand-title">Vintop Products</Link>
          <p className="footer-tagline">
            "Top in Quality, Service, Integrity, Creativity & Pricing"
          </p>
          <div className="footer-social-row">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://wa.me/919538893157" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products Range</Link></li>
            <li><Link to="/products" state={{ category: "Contract Mfg" }}>Contract Manufacturing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Product Categories */}
        <div className="footer-col">
          <h3>Product Categories</h3>
          <ul className="footer-links-list">
            <li><Link to="/products" state={{ category: "Bakery" }}>Bakery Products</Link></li>
            <li><Link to="/products" state={{ category: "Beverages" }}>Beverages & Drinks</Link></li>
            <li><Link to="/products" state={{ category: "Ice Cream" }}>Ice Cream Blends</Link></li>
            <li><Link to="/products" state={{ category: "HoReCa" }}>HoReCa Range</Link></li>
            <li><Link to="/products" state={{ category: "All" }}>New Launches</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <address className="footer-address">
            <p><strong>Address:</strong> 14/7, #2, K.H.Ranganatha Colony, Mysore Road, Bangalore - 560026</p>
            <p><strong>Email:</strong> <a href="mailto:info@vintop.co.in">info@vintop.co.in</a> / <a href="mailto:sales@vintop.co.in">sales@vintop.co.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:08026750908">080-26750908</a></p>
            <p><strong>Mobile:</strong> <a href="tel:9538893156">9538893156</a> / <a href="tel:9538893157">9538893157</a></p>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-container">
          <p>&copy; {currentYear} Vintop Products Pvt. Ltd. All Rights Reserved.</p>
          <div className="bottom-bar-rights">
            <span>FSSAI Approved Facility</span>
            <span className="divider">•</span>
            <span>Make in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
