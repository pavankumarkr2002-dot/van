import { Link } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm";
import { MapPin, Mail, Phone, Smartphone, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="contact-page-container">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span className="current">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Info & Map Section */}
      <section className="contact-info-map-section section-padding">
        <div className="container">
          <div className="contact-grid-layout">
            
            {/* Map Column */}
            <div className="map-column-wrapper">
              <iframe
                title="Vintop Products Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.307223933391!2d77.5444315!3d12.9522194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e1f55555555%3A0xe54e6669911e3b6a!2sVintop%20Products%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin"
                className="google-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Address Info Column */}
            <div className="info-column-wrapper">
              <div className="address-overlay-card">
                <h2>Address / Contact</h2>
                <div className="card-separator"></div>
                
                <div className="contact-detail-items">
                  <div className="detail-item">
                    <MapPin className="contact-icon" size={24} />
                    <div>
                      <strong>Vintop Products Pvt. Ltd.</strong>
                      <p>14/7, #2, K.H.Ranganatha Colony,</p>
                      <p>Mysore Road, Bangalore - 560026</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <Mail className="contact-icon" size={20} />
                    <div>
                      <strong>Email Addresses</strong>
                      <p><a href="mailto:sales@vintop.co.in">sales@vintop.co.in</a></p>
                      <p><a href="mailto:info@vintop.co.in">info@vintop.co.in</a></p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <Phone className="contact-icon" size={20} />
                    <div>
                      <strong>Landline Phone</strong>
                      <p><a href="tel:08026750908">080-26750908</a></p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <Smartphone className="contact-icon" size={20} />
                    <div>
                      <strong>Mobile Support</strong>
                      <p><a href="tel:9538893157">9538893157</a></p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <Clock className="contact-icon" size={20} />
                    <div>
                      <strong>Business Hours</strong>
                      <p>Monday – Saturday: 9:30 AM – 6:30 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="form-section section-padding">
        <div className="container form-container-width">
          <h2 className="form-section-title">Enquiry</h2>
          <p className="form-section-subtitle">
            Fill out the details below to submit a product query or request a custom formulation.
          </p>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
