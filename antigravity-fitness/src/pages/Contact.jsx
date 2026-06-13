import { useState } from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    businessType: "",
    products: [],
    budget: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productOptions = [
    { label: "Treadmills", value: "Treadmills" },
    { label: "Ellipticals", value: "Ellipticals" },
    { label: "Exercise Bikes", value: "Exercise Bikes" },
    { label: "Rowing Machine", value: "Rowing Machine" },
    { label: "Dumbbells", value: "Dumbbells" },
    { label: "Barbells", value: "Barbells" },
    { label: "Weight Bench", value: "Weight Bench" },
    { label: "Pull-Up Station", value: "Pull-Up Station" },
    { label: "Multi-Station Gym", value: "Multi-Station Gym" },
    { label: "Cable Machine", value: "Cable Machine" },
    { label: "Kettlebells", value: "Kettlebells" },
    { label: "Accessories", value: "Accessories" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleCheckboxChange = (value) => {
    const updatedProducts = [...formData.products];
    if (updatedProducts.includes(value)) {
      const idx = updatedProducts.indexOf(value);
      updatedProducts.splice(idx, 1);
    } else {
      updatedProducts.push(value);
    }
    setFormData({ ...formData, products: updatedProducts });
    if (errors.products) {
      setErrors({ ...errors, products: "" });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.businessType) tempErrors.businessType = "Please select your business type";
    if (formData.products.length === 0) {
      tempErrors.products = "Select at least one product of interest";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("AntiGravity Quote Request Submitted:", formData);
    }
  };

  return (
    <div className="anti-contact-page">
      {/* Hero Banner */}
      <section className="anti-contact-hero-section">
        <div className="contact-hero-img-box">
          <ImagePlaceholder
            promptKey="CONTACT_BG"
            promptText="Dark premium gym background with orange mood lighting and heavy equipment silhouettes, cinematic wide shot"
            alt="AntiGravity HQ"
            aspectRatio="16/5"
            className="contact-hero-bg"
          />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="contact-hero-content container text-center">
          <h1>Get In Touch</h1>
          <p>Request quotes, customized layout blueprints, and commercial catalogs.</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mt-3">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span className="current">Contact Us</span>
        </div>
      </div>

      {/* Main Grid Contact Content */}
      <section className="contact-layout-section section-padding">
        <div className="container contact-grid-wrapper">
          
          {/* Left Column: Details & Map */}
          <div className="contact-details-column">
            <div className="contact-details-card">
              <h2>AntiGravity HQ</h2>
              <div className="details-card-separator"></div>

              <address className="details-address-list">
                <div className="detail-item">
                  <MapPin className="icon" size={20} />
                  <div>
                    <strong>Office & Warehouse Address</strong>
                    <p>AntiGravity Fitness Equipment Pvt. Ltd.</p>
                    <p>45, Industrial Area, Peenya Phase 1,</p>
                    <p>Bangalore, Karnataka - 560058</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Phone className="icon" size={20} />
                  <div>
                    <strong>Sales Helpline</strong>
                    <p><a href="tel:+919845012345">+91 98450 XXXXX</a></p>
                  </div>
                </div>

                <div className="detail-item">
                  <Mail className="icon" size={20} />
                  <div>
                    <strong>Sales Support Email</strong>
                    <p><a href="mailto:sales@antigravity.in">sales@antigravity.in</a></p>
                  </div>
                </div>

                <div className="detail-item">
                  <Clock className="icon" size={20} />
                  <div>
                    <strong>Business Hours</strong>
                    <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </address>

              {/* Social Row */}
              <div className="details-social-wrapper">
                <h4>Follow Our Training Feed</h4>
                <div className="social-row-icons">
                  <a href="https://instagram.com" className="social-circle" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://youtube.com" className="social-circle" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                  <a href="https://facebook.com" className="social-circle" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://wa.me/919845012345" className="social-circle" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="contact-map-box card">
              <iframe
                title="AntiGravity Peenya Warehouse Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.025345719943!2d77.5034638!3d13.0340578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d9555555555%3A0x8e5ea6868dfd6a50!2sPeenya%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="contact-map-iframe"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="contact-form-column">
            <div className="quote-form-card">
              {isSubmitted ? (
                <div className="quote-success-view">
                  <CheckCircle2 size={64} className="success-icon" />
                  <h3>Quote Requested!</h3>
                  <p>✅ Thank you! Our commercial sales team will review your requirements and contact you within 24 hours.</p>
                  <button 
                    onClick={() => {
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        city: "",
                        businessType: "",
                        products: [],
                        budget: "",
                        message: ""
                      });
                      setIsSubmitted(false);
                    }}
                    className="btn btn-orange mt-2"
                  >
                    Request Another Quote
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="anti-quote-form">
                  <h3>Get A Free Quote</h3>
                  <p className="form-helper-txt">Fill in the fields below. Asterisk (*) denotes required fields.</p>

                  <div className="form-group">
                    <label htmlFor="name">Full Name <span className="req">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? "input-err" : ""}
                    />
                    {errors.name && <span className="err-msg">{errors.name}</span>}
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. 9845012345"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? "input-err" : ""}
                      />
                      {errors.phone && <span className="err-msg">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="req">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. buyer@gymname.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? "input-err" : ""}
                      />
                      {errors.email && <span className="err-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="city">City <span className="req">*</span></label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="e.g. Bangalore"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={errors.city ? "input-err" : ""}
                      />
                      {errors.city && <span className="err-msg">{errors.city}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="businessType">Business Type <span className="req">*</span></label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className={errors.businessType ? "input-err" : ""}
                      >
                        <option value="">-- Select Type --</option>
                        <option value="Commercial Gym">Commercial Gym</option>
                        <option value="Home Gym">Home Gym</option>
                        <option value="Boutique Studio">Boutique Studio</option>
                        <option value="Hotel/Resort">Hotel/Resort</option>
                        <option value="Corporate">Corporate Office</option>
                      </select>
                      {errors.businessType && <span className="err-msg">{errors.businessType}</span>}
                    </div>
                  </div>

                  {/* Multi-Select Products Checkboxes */}
                  <div className="form-group">
                    <label className="checkbox-section-label">Products Interested In <span className="req">*</span></label>
                    <div className="checkboxes-grid-layout">
                      {productOptions.map((opt) => (
                        <label key={opt.value} className="checkbox-item-label">
                          <input
                            type="checkbox"
                            checked={formData.products.includes(opt.value)}
                            onChange={() => handleCheckboxChange(opt.value)}
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.products && <span className="err-msg">{errors.products}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">-- Choose Budget Range --</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000–₹2,00,000">₹50,000–₹2,00,000</option>
                      <option value="₹2,00,000–₹5,00,000">₹2,00,000–₹5,00,000</option>
                      <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Setup Requirements / Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your facility space, branding preference, or timeline..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-navy-submit mt-1">
                    Send Enquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
