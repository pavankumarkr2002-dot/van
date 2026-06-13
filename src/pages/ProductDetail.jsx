import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, CheckCircle, Phone, Share2, MessageSquare, Check } from "lucide-react";

const getProductImage = (name, category) => {
  const n = name.toLowerCase();
  const cat = category.toLowerCase();
  let img = "bread_improver.png";
  if (n.includes("bread") || n.includes("bake") || n.includes("flour") || n.includes("improver")) img = "bread_improver.png";
  else if (n.includes("cake") || n.includes("gel") || n.includes("softener") || n.includes("premix") || n.includes("brownie") || n.includes("mousse") || n.includes("donut") || n.includes("tiramisu")) img = "cake_gel.png";
  else if (n.includes("rose") || n.includes("jelly") || n.includes("pudding") || n.includes("colour")) img = "rose_milk.png";
  else if (n.includes("chocolate") || n.includes("coffee") || n.includes("frappe") || n.includes("cocoa")) img = "drinking_chocolate.png";
  else if (n.includes("ragi") || n.includes("glucose") || n.includes("jaljeera") || n.includes("sweetener") || n.includes("cardamom") || n.includes("garlic") || n.includes("ginger") || n.includes("onion") || n.includes("pepper") || n.includes("biryani") || n.includes("tea") || n.includes("masala") || n.includes("savouries") || n.includes("namkeen") || n.includes("fry")) img = "ragi_malt.png";
  else if (cat.includes("ice cream") || cat.includes("beverage") || n.includes("ice cream") || n.includes("softy") || n.includes("shake") || n.includes("softee")) img = "icecream_banner.png";
  else if (cat.includes("contract") || cat.includes("label") || n.includes("pouch") || n.includes("bulk") || n.includes("sachet")) img = "factory_banner.png";

  const prefix = window.location.protocol === 'file:' ? './images/' : '/images/';
  return prefix + img;
};

// Product dataset (matching Products list)
const productsData = [
  { id: "bakery-1", name: "TopBake Bread, Rusk, Pav, Bun Improver", category: "Bakery", price: 180, pack: "500gm Pouch", app: "Bread & Buns", badge: "BESTSELLER", desc: "Premium enzymes and reducing agents. Improves machinability, texture, volume, and gold color. Bromate & Iodate Free.", rate: 4.8, reviews: 32, dosage: "3% of the flour weight", form: "Dry Powder" },
  { id: "bakery-2", name: "Goldy's Cake Gel (Cake Emulsifier)", category: "Bakery", price: 320, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "BESTSELLER", desc: "Improves sponge cake aeration, raises baked volume, and maintains crumb softness and moisture.", rate: 4.9, reviews: 28, dosage: "4-8% on flour weight", form: "Viscous Gel" },
  { id: "bakery-3", name: "Vinsoft Cake Softener Liquid", category: "Bakery", price: 190, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "NEW", desc: "Premium blend of liquid humectants. Reduces sugar crystallization and extends internal crumb moisture.", rate: 4.7, reviews: 15, dosage: "Replace 10-15% of sugar with VinSoft", form: "Liquid Syrup" },
  { id: "bakery-4", name: "Vincrispy Cookies & Biscuits Improver", category: "Bakery", price: 210, pack: "1 Kg Pack", app: "Cookies & Biscuits", badge: "", desc: "Protease enzyme formulation. Makes cookies, crackers and wafers crisp, tasty, and increases stack strength.", rate: 4.6, reviews: 12, dosage: "3-5% of flour weight", form: "Liquid Emulsion" },
  { id: "bakery-5", name: "Premium Eggless Custard Powder", category: "Bakery", price: 150, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "", desc: "Rich taste and body for fruit salads and fillings. Primarily thickeners that give a pudding-like structure.", rate: 4.5, reviews: 18, dosage: "As per recipe requirements", form: "Dry Powder" },
  { id: "bakery-6", name: "Baking Powder - Double Action", category: "Bakery", price: 140, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "BESTSELLER", desc: "High-performing leavening agent. Delivers unmatched volume, lightness, and fine texture.", rate: 4.8, reviews: 24, dosage: "1.5 to 3% of flour weight", form: "Dry Powder" },
  { id: "bakery-11", name: "Eggless Vanilla Cake Premix", category: "Bakery", price: 260, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "BESTSELLER", desc: "100% vegetarian sponge premix. Requires only water and oil. Delivers outstanding yield and softness.", rate: 4.9, reviews: 40, dosage: "Add water and oil as instructed", form: "Dry Powder Mix" },
  { id: "bev-1", name: "Instant Rose Milk Premix", category: "Beverages", price: 220, pack: "500gm Pouch", app: "Beverages", badge: "NEW", desc: "Ready to mix rose beverage with pure milk solids and cooling herbs. Best enjoyed chilled.", rate: 4.8, reviews: 15, dosage: "20 gm in 200 ml cold milk", form: "Dry Powder" },
  { id: "bev-9", name: "Vanilla Milkshake Premix 1kg", category: "Beverages", price: 420, pack: "1 Kg Pack", app: "Beverages", badge: "BESTSELLER", desc: "Provides thick, frothy vanilla milkshakes. Directions: Mix 1 Kg premix in 8 liters of cold milk.", rate: 4.8, reviews: 35, dosage: "1 Kg in 8 Liters cold milk", form: "Dry Powder" },
  { id: "bev-15", name: "Softee Ice Cream Premix Vanilla", category: "Ice Cream", price: 450, pack: "1 Kg Pack", app: "Ice Cream", badge: "BESTSELLER", desc: "Soft-serve premix using imported milk fat. High yield with maximum cones. Mix 1 Kg in 5L milk.", rate: 4.9, reviews: 45, dosage: "1 Kg in 5 Liters cold milk", form: "Dry Powder" },
  { id: "horeca-7", name: "Goldsberg Namkeen & Savouries Oil Saver", category: "HoReCa", price: 280, pack: "1 Kg Pack", app: "Savouries & Namkeen", badge: "BESTSELLER", desc: "Revolutionary oil saver blend. Forms micro-barrier to reduce frying oil absorption in namkeens.", rate: 4.9, reviews: 36, dosage: "30 ml in 1 Liter water, add to batter", form: "Dry Powder" }
];

export default function ProductDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");

  // Form states
  const [qty, setQty] = useState("100");
  const [unit, setUnit] = useState("Kilogram");
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerCity, setBuyerCity] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  // Find product by id or default to first
  const product = useMemo(() => {
    return productsData.find(p => p.id === id) || productsData[0];
  }, [id]);

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    if (buyerName && buyerPhone && buyerCity) {
      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        setBuyerName("");
        setBuyerPhone("");
        setBuyerCity("");
      }, 4000);
    }
  };

  const reviews = [
    { rating: 5, user: "Sanjay - Bakery Owner, Pune", comment: "Outstanding batch consistency. The rise and texture are identical every single time." },
    { rating: 5, user: "Rishab - Pastry Chef, Kolkata", comment: "We use their ingredients for our premium line and have never had service complaints." },
    { rating: 4, user: "Prem - Hotel Owner, Bangalore", comment: "Very fast delivery across South India. Reasonable pricing on bulk orders." }
  ];

  return (
    <div className="im-product-detail-page">
      {/* Breadcrumbs */}
      <div className="detail-breadcrumbs-strip">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <Link to="/products" state={{ category: product.category }}>{product.category}</Link>
            <span>&gt;</span>
            <span className="current">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container detail-content-layout">
        
        {/* LEFT COLUMN: Gallery & Tabs */}
        <div className="detail-left-pane">
          {/* Main Showcase Grid */}
          <div className="gallery-showcase card">
            <div className="main-image-placeholder">
              <img src={getProductImage(product.name, product.category)} alt={product.name} className="detail-main-img-file" />
            </div>
            
            <div className="thumbnail-strip">
              <div className="thumb-box active"><span>📦</span></div>
              <div className="thumb-box"><span>🌾</span></div>
              <div className="thumb-box"><span>🧪</span></div>
              <div className="thumb-box"><span>✨</span></div>
            </div>

            {/* Social Share icons */}
            <div className="share-row">
              <span>Share product:</span>
              <button className="share-btn" aria-label="Share Facebook">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button className="share-btn" aria-label="Share WhatsApp"><MessageSquare size={14} /></button>
              <button className="share-btn" aria-label="Share LinkedIn">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
              <button className="share-btn" aria-label="Copy Link"><Share2 size={14} /></button>
            </div>
          </div>

          {/* IndiaMart Style Tabs */}
          <div className="detail-tabs-container card">
            <div className="detail-tabs-header">
              <button 
                className={`tab-link ${activeTab === "details" ? "active" : ""}`}
                onClick={() => setActiveTab("details")}
              >
                Product Details
              </button>
              <button 
                className={`tab-link ${activeTab === "specs" ? "active" : ""}`}
                onClick={() => setActiveTab("specs")}
              >
                Specifications
              </button>
              <button 
                className={`tab-link ${activeTab === "company" ? "active" : ""}`}
                onClick={() => setActiveTab("company")}
              >
                Company Details
              </button>
              <button 
                className={`tab-link ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({product.reviews})
              </button>
            </div>

            <div className="detail-tabs-body">
              {/* Tab 1: Details */}
              {activeTab === "details" && (
                <div className="tab-pane-content">
                  <h4>Product Description</h4>
                  <p className="desc-text">{product.desc}</p>
                  
                  <h4 className="mt-3">Application Specifications</h4>
                  <table className="details-specs-table">
                    <tbody>
                      <tr>
                        <td className="spec-title">Main Application</td>
                        <td>{product.app}</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Recommended Dosage</td>
                        <td>{product.dosage || "As per requirements"}</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Packaging Format</td>
                        <td>{product.pack}</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Product Category</td>
                        <td>{product.category} Food Additive</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tab 2: Specs */}
              {activeTab === "specs" && (
                <div className="tab-pane-content">
                  <h4>Technical Specifications</h4>
                  <table className="details-specs-table">
                    <tbody>
                      <tr>
                        <td className="spec-title">Physical Form</td>
                        <td>{product.form || "Powder"}</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Shelf Life</td>
                        <td>12 Months (from date of packaging)</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Storage Temperature</td>
                        <td>Ambient temperature. Store in dry, cool, pest-controlled warehouse.</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Minimum Order Qty</td>
                        <td>50 Kilograms</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Quality Standard</td>
                        <td>FSSAI Certified, 100% Vegetarian facility</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tab 3: Company */}
              {activeTab === "company" && (
                <div className="tab-pane-content">
                  <h4>Supplier Profile</h4>
                  <p className="desc-text">
                    Vintop Products Pvt. Ltd. is one of the oldest family-run food manufacturing businesses in Bangalore, Karnataka. Operating since the 1970s, Vintop is a trusted B2B supplier of raw materials, powder blends, soft-serve ice cream bases, and chapathi softeners across South India.
                  </p>
                  <table className="details-specs-table mt-2">
                    <tbody>
                      <tr>
                        <td className="spec-title">Year of Establishment</td>
                        <td>1970s</td>
                      </tr>
                      <tr>
                        <td className="spec-title">FSSAI License No.</td>
                        <td>Verified FSSAI Manufacturer Certificate</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Production Capacity</td>
                        <td>1,500 Metric Tonnes per Annum</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Facility Size</td>
                        <td>20,000 Sq.ft area in Bangalore</td>
                      </tr>
                      <tr>
                        <td className="spec-title">Business Type</td>
                        <td>Manufacturer, Packer & Exporter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tab 4: Reviews */}
              {activeTab === "reviews" && (
                <div className="tab-pane-content reviews-pane">
                  <h4>Client Reviews</h4>
                  <div className="reviews-list">
                    {reviews.map((rev, idx) => (
                      <div key={idx} className="detail-review-card">
                        <div className="stars-row">
                          {[...Array(rev.rating)].map((_, i) => <Star key={i} size={12} fill="#FFC107" color="#FFC107" />)}
                        </div>
                        <p className="comment-text">"{rev.comment}"</p>
                        <span className="user-lbl">{rev.user}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Enquiry Card & Supplier Card */}
        <div className="detail-right-pane">
          {/* Main Info Card */}
          <div className="detail-info-card card">
            <span className="cat-lbl">{product.category}</span>
            <h2>{product.name}</h2>
            
            <div className="rating-summary-row">
              <span className="rating-badge">{product.rate} <Star size={12} fill="#fff" /></span>
              <span className="reviews-count">({product.reviews} Buyer Reviews)</span>
            </div>

            <div className="price-tag-block">
              <span className="amount">₹{product.price}</span>
              <span className="unit">/ Kilogram</span>
            </div>

            <div className="lead-form-box">
              <h4>Get Custom Quotations</h4>
              {formSuccess ? (
                <div className="lead-success-msg">
                  <CheckCircle size={24} /> Enquiry Submitted Successfully!
                </div>
              ) : (
                <form onSubmit={handleSubmitEnquiry} className="details-enquiry-form">
                  <div className="qty-row">
                    <div className="form-group flex-1">
                      <label>Quantity needed</label>
                      <input 
                        type="number" 
                        value={qty} 
                        onChange={(e) => setQty(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="form-group flex-1">
                      <label>Unit</label>
                      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                        <option value="Kilogram">Kilogram (kg)</option>
                        <option value="Tonne">Metric Tonne (mt)</option>
                        <option value="Pack">Pack</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Your Name*</label>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={buyerName} 
                      onChange={(e) => setBuyerName(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number*</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 9538893157" 
                      value={buyerPhone} 
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Your City*</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Bangalore" 
                      value={buyerCity} 
                      onChange={(e) => setBuyerCity(e.target.value)}
                      required 
                    />
                  </div>

                  <button type="submit" className="details-form-submit-btn">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Supplier Info Card */}
          <div className="detail-supplier-card card">
            <div className="supplier-logo-box">
              <span className="supplier-avatar">🏭</span>
              <div>
                <h3>Vintop Products Pvt. Ltd.</h3>
                <span className="loc"><MapPin size={12} /> Bangalore, Karnataka</span>
              </div>
            </div>
            
            <div className="supplier-trust-lines">
              <div className="trust-item">
                <CheckCircle size={14} className="icon-green" />
                <span>FSSAI Approved Supplier</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={14} className="icon-green" />
                <span>100% Vegetarian Certified</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={14} className="icon-green" />
                <span>Trusted Supplier since 1970s</span>
              </div>
            </div>

            <div className="supplier-action-links">
              <Link to="/products" className="view-all-products-link">View All Products →</Link>
              <a href="tel:08026750908" className="call-supplier-btn">
                <Phone size={14} /> Call: 080-26750908
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
