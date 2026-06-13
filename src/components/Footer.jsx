import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Left Column */}
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <img 
              src="https://vintop.co.in/wp-content/uploads/2020/02/VinLogo.png" 
              alt="Vintop Products" 
              className="footer-logo-img"
            />
          </Link>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://wa.me/919538893157" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
          <p className="copyright-text">
            &copy; {currentYear} Vintop Products Pvt. Ltd. All Rights Reserved.
          </p>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          <h3 className="footer-heading">Vintop Products Pvt. Ltd.</h3>
          <address className="footer-address">
            14/7, #2, K.H.Ranganatha Colony,<br />
            Mysore Road, Bangalore - 560026
          </address>
          <div className="footer-contact-info">
            <p><strong>Email:</strong> <a href="mailto:info@vintop.co.in">info@vintop.co.in</a> / <a href="mailto:sales@vintop.co.in">sales@vintop.co.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:08026750908">080-26750908</a></p>
            <p><strong>Mobile:</strong> <a href="tel:9538893156">9538893156</a> / <a href="tel:9538893157">9538893157</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
