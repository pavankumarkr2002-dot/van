import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

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
    "Cake Preservative",
    "Corn Flour Super Fine",
    "TopBake Eggless Vanilla",
    "TopBake Muffin Premix",
    "TopBake Donut Premix",
    "TopBake Brownie Premix",
    "TopBake Chocolava Cake Premix",
    "TopBake Tiramisu Premix",
    "TopBake Chocolate Mousse Premix",
    "Whipping Cream Powder",
    "Goldy's Glazing Gel"
  ],
  "Beverages and Ice Cream": [
    "Softee Ice Cream Premix",
    "Milk Shake Premix",
    "Via Badam Milk Powder",
    "Via Drinking Chocolate",
    "Via Ice Tea Premix",
    "Via Jaljeera Drink Premix",
    "Via Pista / Kesar Pista Milk Powder",
    "Via Rose Milk Powder",
    "Via Sprouted Ragi Malt Drink",
    "Ultra Gel - Beverage Thickener",
    "Dry Fruit Paste",
    "Emulsion",
    "Soft Drink Concentrate",
    "GlucoVin"
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
  ]
};

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    category: "",
    product: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // If category changes, reset the selected product
      ...(name === "category" ? { product: "" } : {})
    });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.phone.trim()) tempErrors.phone = "Mobile/Phone number is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.category) tempErrors.category = "Please select a product category";
    if (!formData.product) tempErrors.product = "Please select a product";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // In a real application, you would send this to an API
      console.log("Enquiry Form Submitted:", formData);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      category: "",
      product: "",
      message: ""
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const productOptions = formData.category ? productsByCategory[formData.category] : [];

  return (
    <div className="enquiry-form-card">
      {isSubmitted ? (
        <div className="form-success-state">
          <CheckCircle2 className="success-icon" size={60} />
          <h2>Thank You!</h2>
          <p>Your enquiry for <strong>{formData.product}</strong> has been received successfully.</p>
          <p className="success-note">A member of our team will get in touch with you at <strong>{formData.email}</strong> shortly.</p>
          <button onClick={handleReset} className="btn btn-primary" id="btn-submit-another">
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="enquiry-form" id="vintop-enquiry-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="e.g. John"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="e.g. Doe"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Mobile/Phone <span className="required-asterisk">*</span></label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? "input-error" : ""}
                placeholder="e.g. 9538893157"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required-asterisk">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "input-error" : ""}
                placeholder="e.g. customer@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Select Category <span className="required-asterisk">*</span></label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={errors.category ? "input-error" : ""}
              >
                <option value="">-- Choose Category --</option>
                <option value="Bakery">Bakery</option>
                <option value="Beverages and Ice Cream">Beverages & Ice Cream</option>
                <option value="HoReCa">HoReCa</option>
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="product">Select Product <span className="required-asterisk">*</span></label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                disabled={!formData.category}
                className={errors.product ? "input-error" : ""}
              >
                <option value="">
                  {formData.category ? "-- Choose Product --" : "-- Choose Category First --"}
                </option>
                {productOptions.map((prod, idx) => (
                  <option key={idx} value={prod}>
                    {prod}
                  </option>
                ))}
              </select>
              {errors.product && <span className="error-message">{errors.product}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Tell us about your requirements, volume requirements or customized blends..."
            />
          </div>

          <button type="submit" className="btn btn-navy-submit" id="submit-enquiry-btn">
            Send Enquiry <Send size={16} className="send-icon" />
          </button>
        </form>
      )}
    </div>
  );
}
