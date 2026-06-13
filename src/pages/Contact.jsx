import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Smartphone, Send, CheckCircle2 } from "lucide-react";

const productsByCategory = {
  Bakery: [
    "TopBake Bread Improver",
    "TopBake Bun/Pav Improver",
    "TopBake Rusk Improver",
    "Goldy's Cake Gel",
    "Murari Milk Powder Flavour",
    "VinCrispy Cookies Improver",
    "VinSoft Cake Softener",
    "Custard Powder",
    "Baking Powder",
    "Vanilla Powder Flavour",
    "Whipping Cream Powder",
    "Goldy's Glazing Gel"
  ],
  Beverages: [
    "Softee Ice Cream Premix",
    "Milk Shake Premix",
    "Via Badam Milk Powder",
    "Via Drinking Chocolate",
    "Via Ice Tea Premix",
    "Via Jaljeera Drink Premix",
    "Via Pista Milk Powder",
    "Via Rose Milk Powder",
    "Via Sprouted Ragi Malt",
    "Ultra Gel - Beverage Thickener",
    "GlucoVin Glucose D"
  ],
  "Ice Cream": [
    "Softee Ice Cream Premix",
    "Wonder 4 Stabilizer Mix",
    "Creamy Softy Bases 20+ Flavours"
  ],
  HoReCa: [
    "Goldsberg Savouries/Namkeen Improver",
    "NatVin Natural Cardamom Powder",
    "NatVin Natural Garlic Powder",
    "NatVin Natural Ginger Powder",
    "NatVin Natural Onion Powder",
    "NatVin Natural Pepper Powder",
    "NatVin Tea Masala Powder",
    "VinJel Vegetarian Jelly Powder",
    "Biriyani Flavour Powder/Liquid"
  ],
  "Contract Mfg": [
    "Private Label Sachet Packing 10g",
    "Private Label Bulk Blending",
    "Private Label Drinking Chocolate",
    "Private Label Bread Improver Concentrate"
  ]
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    category: "",
    product: "",
    qty: "100",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "category" ? { product: "" } : {})
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Your Name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Mobile/Phone number is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.city.trim()) tempErrors.city = "City name is required";
    if (!formData.category) tempErrors.category = "Please select a product category";
    if (!formData.product) tempErrors.product = "Please select a product";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("IndiaMart Vintop Contact Form Submitted:", formData);
    }
  };

  const productOptions = formData.category ? productsByCategory[formData.category] : [];

  return (
    <div className="im-contact-page">
      {/* Page Header */}
      <section className="contact-page-header-banner">
        <div className="container header-banner-container">
          <h1>Contact & Enquiry</h1>
          <p>Send your requirements directly to Vintop Products sales desk</p>
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

      {/* Grid Content */}
      <section className="contact-grid-section section-padding">
        <div className="container contact-grid-container">
          
          {/* Left Column: Address Card & Map */}
          <div className="contact-details-column">
            <div className="contact-details-card card">
              <h2>Vintop Products Pvt. Ltd.</h2>
              <div className="details-card-separator"></div>

              <address className="details-address-list">
                <div className="detail-item">
                  <MapPin className="icon" size={20} />
                  <div>
                    <strong>Manufacturing Facility</strong>
                    <p>14/7, #2, K.H.Ranganatha Colony,</p>
                    <p>Mysore Road, Bangalore - 560026</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Phone className="icon" size={20} />
                  <div>
                    <strong>Office Phone</strong>
                    <p><a href="tel:08026750908">080-26750908</a></p>
                  </div>
                </div>

                <div className="detail-item">
                  <Smartphone className="icon" size={20} />
                  <div>
                    <strong>Mobile Helpline</strong>
                    <p><a href="tel:9538893156">9538893156</a> / <a href="tel:9538893157">9538893157</a></p>
                  </div>
                </div>

                <div className="detail-item">
                  <Mail className="icon" size={20} />
                  <div>
                    <strong>Support Email</strong>
                    <p><a href="mailto:sales@vintop.co.in">sales@vintop.co.in</a></p>
                    <p><a href="mailto:info@vintop.co.in">info@vintop.co.in</a></p>
                  </div>
                </div>
              </address>
            </div>

            {/* Google Map */}
            <div className="contact-map-box card">
              <iframe
                title="Vintop Products Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.307223933391!2d77.5444315!3d12.9522194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e1f55555555%3A0xe54e6669911e3b6a!2sVintop%20Products%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="contact-map-iframe"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="contact-form-column">
            <div className="quote-form-card card">
              {isSubmitted ? (
                <div className="quote-success-view">
                  <CheckCircle2 size={64} className="success-icon" />
                  <h3>Requirement Submitted!</h3>
                  <p>Thank you for submitting your enquiry for <strong>{formData.product}</strong>.</p>
                  <p className="note">Our sales desk has received your request and will call you on <strong>{formData.phone}</strong> within 2-4 hours.</p>
                  <button 
                    onClick={() => {
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        city: "",
                        category: "",
                        product: "",
                        qty: "100",
                        message: ""
                      });
                      setIsSubmitted(false);
                    }}
                    className="btn-reset-form"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="im-quote-form">
                  <h3>Get Best Price Instantly</h3>
                  <p className="subtitle">Tell us about your requirements to receive a customized quote</p>
                  
                  <div className="form-group">
                    <label>Your Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? "input-err" : ""}
                    />
                    {errors.name && <span className="err-msg">{errors.name}</span>}
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label>Mobile Number*</label>
                      <div className="mobile-input-wrapper">
                        <span className="prefix">+91</span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your 10-digit number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={errors.phone ? "input-err" : ""}
                        />
                      </div>
                      {errors.phone && <span className="err-msg">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. buyer@bakery.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? "input-err" : ""}
                      />
                      {errors.email && <span className="err-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label>Your City*</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Pune"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={errors.city ? "input-err" : ""}
                      />
                      {errors.city && <span className="err-msg">{errors.city}</span>}
                    </div>

                    <div className="form-group">
                      <label>Quantity Needed (in kg)</label>
                      <input
                        type="number"
                        name="qty"
                        value={formData.qty}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label>Select Category*</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={errors.category ? "input-err" : ""}
                      >
                        <option value="">-- Select Category --</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Ice Cream">Ice Cream</option>
                        <option value="HoReCa">HoReCa</option>
                        <option value="Contract Mfg">Contract Mfg</option>
                      </select>
                      {errors.category && <span className="err-msg">{errors.category}</span>}
                    </div>

                    <div className="form-group">
                      <label>Select Product*</label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        disabled={!formData.category}
                        className={errors.product ? "input-err" : ""}
                      >
                        <option value="">
                          {formData.category ? "-- Choose Product --" : "-- Choose Category First --"}
                        </option>
                        {productOptions.map((prod, idx) => (
                          <option key={idx} value={prod}>{prod}</option>
                        ))}
                      </select>
                      {errors.product && <span className="err-msg">{errors.product}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message / Specifications</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Add details about customized blends, packing specifications, or lead times..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="details-form-submit-btn orange-btn">
                    Send Enquiry <Send size={14} className="send-icon" />
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
