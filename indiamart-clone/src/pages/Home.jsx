import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  CheckCircle, 
  Truck, 
  FlaskConical, 
  Award, 
  Star,
  Layers,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Volume2
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: "linear-gradient(135deg, #13306B, #1a3a6e)",
      title: "India's #1 Food Premix Manufacturer",
      sub: "Bakery • Beverages • Ice Cream • HoReCa",
      btnText: "Explore Products",
      link: "/products",
      image: "./images/bakery_banner.png"
    },
    {
      bg: "linear-gradient(135deg, #ff6a00, #ff8c00)",
      title: "Contract Manufacturing Available",
      sub: "Your Brand. Our Formulation. Our Manufacturing.",
      btnText: "Get a Quote",
      link: "/contact",
      image: "./images/factory_banner.png"
    },
    {
      bg: "linear-gradient(135deg, #1e468a, #13306B)",
      title: "Pioneer in Softy Ice Cream Premix Since 2001",
      sub: "20+ Flavours | High Yield | Best Mouthfeel",
      btnText: "View Ice Cream Range",
      link: "/products",
      image: "./images/icecream_banner.png"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Form State
  const [leadProduct, setLeadProduct] = useState("");
  const [leadMobile, setLeadMobile] = useState("");
  const [leadCity, setLeadCity] = useState("");
  const [leadCategory, setLeadCategory] = useState("Bakery");
  const [formSuccess, setFormSuccess] = useState(false);

  // Bottom Form State
  const [botName, setBotName] = useState("");
  const [botPhone, setBotPhone] = useState("");
  const [botProduct, setBotProduct] = useState("");
  const [botSuccess, setBotSuccess] = useState(false);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (leadProduct && leadMobile && leadCity) {
      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        setLeadProduct("");
        setLeadMobile("");
        setLeadCity("");
      }, 4000);
    }
  };

  const handleBotSubmit = (e) => {
    e.preventDefault();
    if (botName && botPhone && botProduct) {
      setBotSuccess(true);
      setTimeout(() => {
        setBotSuccess(false);
        setBotName("");
        setBotPhone("");
        setBotProduct("");
      }, 4000);
    }
  };

  const trendingProducts = [
    { name: "Bread Improver", img: "🍞" },
    { name: "Eggless Cake Premix", img: "🎂" },
    { name: "Softy Ice Cream Mix", img: "🍦" },
    { name: "Rose Milk Powder", img: "🌹" },
    { name: "Drinking Chocolate", img: "🍫" },
    { name: "Frappe Coffee Blend", img: "☕" },
    { name: "Custard Powder", img: "🍮" },
    { name: "Jaljeera Premix", img: "🎯" },
    { name: "Brownie Premix", img: "🧁" },
    { name: "Milkshake Premix", img: "🍨" },
    { name: "Vegetarian Jelly", img: "🍬" },
    { name: "Badam Milk Powder", img: "🥛" }
  ];

  const popularProducts = [
    { name: "TopBake Bread Improver 500gm", price: "₹180/kg", badge: "BESTSELLER", image: "./images/bread_improver.png" },
    { name: "Goldy's Cake Gel 1kg Jar", price: "₹320/kg", badge: "BESTSELLER", image: "./images/cake_gel.png" },
    { name: "Softee Ice Cream Premix", price: "₹450/kg", badge: "BESTSELLER", image: "./images/icecream_banner.png" },
    { name: "Rose Milk Powder 500gm", price: "₹220/kg", badge: "NEW", image: "./images/rose_milk.png" },
    { name: "Eggless Cake Premix 1kg", price: "₹280/kg", badge: "BESTSELLER", image: "./images/cake_gel.png" },
    { name: "Whipping Cream Powder", price: "₹380/kg", badge: "", image: "./images/bread_improver.png" },
    { name: "Jaljeera Drink Premix", price: "₹160/kg", badge: "", image: "./images/ragi_malt.png" },
    { name: "Milkshake Premix 1kg", price: "₹420/kg", badge: "BESTSELLER", image: "./images/icecream_banner.png" },
    { name: "Drinking Chocolate 500gm", price: "₹290/kg", badge: "NEW", image: "./images/drinking_chocolate.png" },
    { name: "VinJel Vegetarian Jelly", price: "₹140/kg", badge: "", image: "./images/rose_milk.png" },
    { name: "Badam Milk Powder 500gm", price: "₹310/kg", badge: "", image: "./images/ragi_malt.png" },
    { name: "Frappe Coffee Blend 1kg", price: "₹390/kg", badge: "NEW", image: "./images/drinking_chocolate.png" }
  ];

  const newLaunches = [
    { name: "Eggless Chocolava Premix", price: "₹290/kg", badge: "NEW", image: "./images/cake_gel.png" },
    { name: "Sprouted Ragi Malt Drink", price: "₹180/kg", badge: "NEW", image: "./images/ragi_malt.png" },
    { name: "Frappe Coffee Blend Sachet", price: "₹22/sachet", badge: "NEW", image: "./images/drinking_chocolate.png" },
    { name: "Instant Pudding Premix", price: "₹260/kg", badge: "NEW", image: "./images/rose_milk.png" },
    { name: "GlucoVin Glucose D", price: "₹145/kg", badge: "NEW", image: "./images/ragi_malt.png" },
    { name: "DiaSweet Premium Sweetener", price: "₹580/kg", badge: "NEW", image: "./images/cake_gel.png" }
  ];

  const testimonials = [
    {
      quote: "Tied up with Vintop since inception. Never had any issue with quality and service.",
      name: "Sanjay",
      city: "Pune",
      biz: "Bakery Owner"
    },
    {
      quote: "Vintop's Bread Improver and Whipping Cream Powder is my favourite. No other brand matches theirs.",
      name: "Meena",
      city: "Bangalore",
      biz: "Home Baker"
    },
    {
      quote: "Their softy powder blends do well with our machine. Excellent mouthfeel, yield and taste.",
      name: "Jaykumar",
      city: "Chennai",
      biz: "Ice Cream Parlour"
    },
    {
      quote: "Wide range of products. Sourcing made very easy. They support prompt deliveries.",
      name: "Prem",
      city: "Bangalore",
      biz: "Hotel Chain Owner"
    },
    {
      quote: "The quality of their glaze gel is one of the best I have tried till date.",
      name: "Rishab",
      city: "Kolkata",
      biz: "Pastry Chef"
    }
  ];

  const industries = [
    "Bread", "Bakery", "Beverages", "Soft Drink & Juice", "Ice Cream", 
    "Sweets & Namkeen", "HoReCa", "Snack Foods", "Neutraceutical", 
    "Confectionery", "Cookies", "Biscuits"
  ];

  return (
    <div className="im-home-page">
      
      {/* SECTION 1: HERO BANNER + LEAD FORM */}
      <section className="im-hero-lead-section">
        <div className="container hero-lead-container">
          
          {/* Left Banner Slider */}
          <div className="hero-slider-wrapper">
            <div 
              className="hero-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div 
                  key={idx} 
                  className="hero-slide-item"
                  style={{ background: slide.bg }}
                >
                  <div className="slide-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.sub}</p>
                    <Link to={slide.link} className="btn-slide-cta">
                      {slide.btnText} <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="slide-image-box">
                    <img src={slide.image} alt={slide.title} className="slide-image" />
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Dots */}
            <div className="slider-dots-indicator">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-btn ${idx === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="hero-lead-card">
            <h3>Get Best Price</h3>
            <p className="sub-txt">from Verified Supplier</p>
            <div className="lead-card-divider"></div>

            {formSuccess ? (
              <div className="lead-success-state">
                <CheckCircle size={40} className="success-icon" />
                <h4>Requirement Received!</h4>
                <p>We are matching your details. You will receive quotes shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="lead-capture-form">
                <div className="lead-form-group">
                  <input
                    type="text"
                    placeholder="Enter Product Name (e.g. Bread Improver)"
                    value={leadProduct}
                    onChange={(e) => setLeadProduct(e.target.value)}
                    required
                  />
                </div>
                
                <div className="lead-form-group input-with-prefix">
                  <span className="mobile-prefix">+91</span>
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    value={leadMobile}
                    onChange={(e) => setLeadMobile(e.target.value)}
                    required
                  />
                </div>

                <div className="lead-form-group">
                  <input
                    type="text"
                    placeholder="Your City"
                    value={leadCity}
                    onChange={(e) => setLeadCity(e.target.value)}
                    required
                  />
                </div>

                <div className="lead-form-group">
                  <select 
                    value={leadCategory}
                    onChange={(e) => setLeadCategory(e.target.value)}
                  >
                    <option value="Bakery">Bakery</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Ice Cream">Ice Cream</option>
                    <option value="HoReCa">HoReCa</option>
                    <option value="Contract Mfg">Contract Mfg</option>
                  </select>
                </div>

                <button type="submit" className="lead-submit-btn">
                  Get Quotes
                </button>
              </form>
            )}

            <div className="lead-badges-footer">
              <span>✓ Trusted by 500+ Businesses</span>
              <span>✓ FSSAI Approved | 100% Veg</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: TOP PRODUCT CATEGORIES */}
      <section className="im-top-categories-section section-padding">
        <div className="container">
          <div className="section-header-row">
            <h2>Top Categories</h2>
            <Link to="/products" className="view-all-link">View All Categories →</Link>
          </div>

          <div className="categories-2x2-grid">
            {/* BLOCK 1: Bakery */}
            <div className="category-block card">
              <div className="block-header">
                <h3>🍞 Bakery Products</h3>
                <Link to="/products" state={{ category: "Bakery" }} className="block-view-all">View All</Link>
              </div>
              <div className="sub-items-grid">
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}bread_improver.png`} alt="Bread Improvers" />
                  </div>
                  <div>
                    <h4>Bread Improvers</h4>
                    <p>TopBake Bread, Rusk, Pav, Bun Improvers</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}cake_gel.png`} alt="Cake Products" />
                  </div>
                  <div>
                    <h4>Cake Products</h4>
                    <p>Goldy's Cake Gel, VinSoft, Eggless Premix, Brownie</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}baking_powder.png`} alt="Baking Agents" />
                  </div>
                  <div>
                    <h4>Baking Agents</h4>
                    <p>Double Action, Triple Action, Aluminium Free</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}flavours_colours.png`} alt="Flavours & Colours" />
                  </div>
                  <div>
                    <h4>Flavours & Colours</h4>
                    <p>Vanilla Powder, Murari Milk, Rangoli Colours</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}whipping_cream.png`} alt="Whipping & Cream" />
                  </div>
                  <div>
                    <h4>Whipping & Cream</h4>
                    <p>Whipping Powder, Glazing Gel, Custard Powder</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}cookies_biscuits.png`} alt="Cookies & Biscuits" />
                  </div>
                  <div>
                    <h4>Cookies & Biscuits</h4>
                    <p>Cookies Improver, Micro Fine Sugar, Corn Flour</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2: Beverages */}
            <div className="category-block card">
              <div className="block-header">
                <h3>🥤 Beverages & Ice Cream</h3>
                <Link to="/products" state={{ category: "Beverages" }} className="block-view-all">View All</Link>
              </div>
              <div className="sub-items-grid">
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}rose_milk.png`} alt="Milk Beverages" />
                  </div>
                  <div>
                    <h4>Milk Beverages</h4>
                    <p>Rose Milk, Pista Milk, Badam Milk, Chocolate</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}iced_tea.png`} alt="Cold Beverages" />
                  </div>
                  <div>
                    <h4>Cold Beverages</h4>
                    <p>Ice Tea Premix, Jaljeera, Coffee Frappe, GlucoVin</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}drinking_chocolate.png`} alt="Milkshakes" />
                  </div>
                  <div>
                    <h4>Milkshakes</h4>
                    <p>Vanilla, Chocolate, Kesar Badam, Butterscotch</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}icecream_banner.png`} alt="Ice Cream Mixes" />
                  </div>
                  <div>
                    <h4>Ice Cream Mixes</h4>
                    <p>Softee Ice Cream Premix, Wonder 4, 20+ Flavours</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}ragi_malt.png`} alt="Health Drinks" />
                  </div>
                  <div>
                    <h4>Health Drinks</h4>
                    <p>Sprouted Ragi Malt, DiaSweet, Ultra Gel, PulpTex</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}flavours_colours.png`} alt="Emulsions" />
                  </div>
                  <div>
                    <h4>Emulsions</h4>
                    <p>Soft Drink Emulsions, Cola, Grape, Mango</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 3: HoReCa */}
            <div className="category-block card">
              <div className="block-header">
                <h3>🍽️ HoReCa & Savouries</h3>
                <Link to="/products" state={{ category: "HoReCa" }} className="block-view-all">View All</Link>
              </div>
              <div className="sub-items-grid">
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}spice_boosters.png`} alt="Spice Boosters" />
                  </div>
                  <div>
                    <h4>Spice Boosters</h4>
                    <p>NatVin Cardamom, Garlic, Ginger, Onion, Pepper</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}indian_speciality.png`} alt="Indian Speciality" />
                  </div>
                  <div>
                    <h4>Indian Speciality</h4>
                    <p>Biryani Flavour Powder, Tea Masala, Liquid Essences</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}jelly_crystals.png`} alt="Jelly Crystals" />
                  </div>
                  <div>
                    <h4>Jelly Crystals</h4>
                    <p>VinJel Strawberry, Mango, Pineapple, Peach</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}chapathi_softener.png`} alt="Chapathi & Roti" />
                  </div>
                  <div>
                    <h4>Chapathi & Roti</h4>
                    <p>Vinsmooth Chapathi Improver, Naan, Paratha Softener</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}namkeen_snacks.png`} alt="Namkeen & Savouries" />
                  </div>
                  <div>
                    <h4>Namkeen & Savouries</h4>
                    <p>Goldsberg Namkeen Improver, Oil Saver, Fry Mix</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}pudding_dessert.png`} alt="Instant Puddings" />
                  </div>
                  <div>
                    <h4>Instant Puddings</h4>
                    <p>Pudding Premix Vanilla, Chocolate, Kesar Badam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 4: Contract Mfg */}
            <div className="category-block card">
              <div className="block-header">
                <h3>🏭 Contract Manufacturing</h3>
                <Link to="/products" state={{ category: "Contract Mfg" }} className="block-view-all">View All</Link>
              </div>
              <div className="sub-items-grid">
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}drinking_chocolate.png`} alt="Private Label Drinks" />
                  </div>
                  <div>
                    <h4>Private Label Drinks</h4>
                    <p>Jaljeera, Rose Milk, Pista Milk, Drinking Chocolate</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}bakery_banner.png`} alt="Private Label Bakery" />
                  </div>
                  <div>
                    <h4>Private Label Bakery</h4>
                    <p>Bread Improver, Cake Premixes, Glazing Gels</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}icecream_banner.png`} alt="Private Label Ice Cream" />
                  </div>
                  <div>
                    <h4>Private Label Ice Cream</h4>
                    <p>Softee Premix, Milkshake Powder, Custard, Jellies</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}factory_banner.png`} alt="Pouch Packing" />
                  </div>
                  <div>
                    <h4>Pouch Packing</h4>
                    <p>10gm, 20gm, 30gm Sachet Packaging Facility</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}factory_banner.png`} alt="Bulk Manufacturing" />
                  </div>
                  <div>
                    <h4>Bulk Manufacturing</h4>
                    <p>25 Kg Bulk Packing, 1500 MT Annual Capacity</p>
                  </div>
                </div>
                <div className="sub-item-card">
                  <div className="sub-img">
                    <img src={`${window.location.protocol === 'file:' ? './images/' : '/images/'}factory_banner.png`} alt="R&D Services" />
                  </div>
                  <div>
                    <h4>R&D Services</h4>
                    <p>Custom Blends, Technologist Testing, Reformulation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: TRENDING PRODUCTS */}
      <section className="im-trending-products-section">
        <div className="container">
          <h2 className="im-section-title-underlined">Trending Products</h2>
          <div className="trending-products-scroll-wrapper">
            {trendingProducts.map((prod, idx) => (
              <div key={idx} className="trending-square-card card" onClick={() => navigate("/products", { state: { search: prod.name } })}>
                <span className="trending-icon">{prod.img}</span>
                <span className="trending-name">{prod.name}</span>
                <span className="trending-cta">Get Quotes</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: POPULAR PRODUCTS GRID */}
      <section className="im-popular-products-section section-padding">
        <div className="container">
          <div className="section-header-row">
            <h2>Popular Products</h2>
            <Link to="/products" className="view-all-link">View All →</Link>
          </div>

          <div className="popular-products-scroll-wrapper">
            {popularProducts.map((prod, idx) => (
              <div key={idx} className="popular-product-card card">
                <div className="popular-img-box">
                  <img src={prod.image} alt={prod.name} className="popular-img-file" />
                  {prod.badge && (
                    <span className={`popular-badge ${prod.badge === "NEW" ? "badge-red" : "badge-green"}`}>
                      {prod.badge}
                    </span>
                  )}
                </div>
                <div className="popular-card-body">
                  <h3 className="popular-card-name" title={prod.name}>{prod.name}</h3>
                  <span className="popular-card-price">{prod.price}</span>
                  <span className="popular-card-location"><MapPin size={12} /> Bangalore, Karnataka</span>
                  <Link to="/contact" className="popular-card-call-btn">
                    <Phone size={12} /> Call Supplier
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SUPPLIER TRUST BANNER */}
      <section className="im-trust-banner-section">
        <div className="container trust-banner-flex">
          <div className="trust-item">
            <CheckCircle className="trust-icon" size={24} />
            <span>FSSAI Approved Facility</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Award className="trust-icon" size={24} />
            <span>100% Vegetarian Products</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Truck className="trust-icon" size={24} />
            <span>Pan-India Delivery</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <FlaskConical className="trust-icon" size={24} />
            <span>In-House R&D Lab</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Star className="trust-icon" size={24} />
            <span>Trusted Since 1970s</span>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED CATEGORIES BANNER CARDS */}
      <section className="im-featured-banners-section section-padding">
        <div className="container banners-grid-3">
          <div className="banner-promo-card card-bakery">
            <h3>Bakery Range</h3>
            <p>15+ Premium Bakery Ingredients</p>
            <Link to="/products" state={{ category: "Bakery" }} className="promo-btn">Shop Now →</Link>
          </div>
          
          <div className="banner-promo-card card-beverage">
            <h3>Ice Cream & Beverages</h3>
            <p>20+ Flavour Variants Available</p>
            <Link to="/products" state={{ category: "Beverages" }} className="promo-btn">Explore →</Link>
          </div>

          <div className="banner-promo-card card-contract">
            <h3>Contract Manufacturing</h3>
            <p>Your Brand. Our Expertise.</p>
            <Link to="/products" state={{ category: "Contract Mfg" }} className="promo-btn">Get Quote →</Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE VINTOP */}
      <section className="im-why-vintop-section section-padding">
        <div className="container">
          <h2 className="section-title">Why Buy from Vintop?</h2>
          
          <div className="grid-3">
            <div className="why-us-card card">
              <Star className="why-icon" size={32} />
              <h3>Pioneer Since 2001</h3>
              <p>First to launch Softy Ice Cream Premix in South India. 20+ years of active formulation expertise.</p>
            </div>
            
            <div className="why-us-card card">
              <ShieldCheck className="why-icon" size={32} />
              <h3>FSSAI Approved</h3>
              <p>100% Vegetarian facility. Stringent batch records. Sourcing raw materials primarily from India.</p>
            </div>

            <div className="why-us-card card">
              <FlaskConical className="why-icon" size={32} />
              <h3>In-House R&D</h3>
              <p>Qualified team of technologists testing and developing new powder blends as per customer demand.</p>
            </div>

            <div className="why-us-card card">
              <Truck className="why-icon" size={32} />
              <h3>Pan-India Delivery</h3>
              <p>Fast delivery across all major states. Automated belting ensures packing material is safe and zero-error.</p>
            </div>

            <div className="why-us-card card">
              <Award className="why-icon" size={32} />
              <h3>Competitive Pricing</h3>
              <p>Family-run business structure with controlled overheads. Delivers premium outcomes at reasonable rates.</p>
            </div>

            <div className="why-us-card card">
              <Layers className="why-icon" size={32} />
              <h3>Contract Manufacturing</h3>
              <p>Low MOQ and flexible packaging. NDA protection signed before starting third-party labeling projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INDUSTRIES WE SERVE */}
      <section className="im-industries-section section-padding">
        <div className="container">
          <h2 className="section-title">Industries We Cater To</h2>
          <div className="industries-flex-wrap">
            {industries.map((ind, idx) => (
              <span key={idx} className="industry-tag-pill" onClick={() => navigate("/products")}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="im-testimonials-section section-padding">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          
          <div className="grid-3">
            {testimonials.slice(0, 3).map((item, idx) => (
              <div key={idx} className="testimonial-grid-card card">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FFC107" color="#FFC107" />)}
                </div>
                <p className="test-quote">"{item.quote}"</p>
                <div className="test-author-info">
                  <span className="author-name">— {item.name}</span>
                  <span className="author-details">{item.city} | {item.biz}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: NEW LAUNCHES */}
      <section className="im-new-launches-section section-padding">
        <div className="container">
          <div className="section-header-row">
            <h2>New Launches</h2>
            <Link to="/products" className="view-all-link">View All →</Link>
          </div>

          <div className="popular-products-scroll-wrapper">
            {newLaunches.map((prod, idx) => (
              <div key={idx} className="popular-product-card card">
                <div className="popular-img-box launch-color">
                  <img src={prod.image} alt={prod.name} className="popular-img-file" />
                  <span className="popular-badge badge-red">NEW</span>
                </div>
                <div className="popular-card-body">
                  <h3 className="popular-card-name" title={prod.name}>{prod.name}</h3>
                  <span className="popular-card-price">{prod.price}</span>
                  <span className="popular-card-location"><MapPin size={12} /> Bangalore, Karnataka</span>
                  <Link to="/contact" className="popular-card-call-btn">
                    <Phone size={12} /> Call Supplier
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: STATS BAR */}
      <section className="im-stats-bar-section section-padding">
        <div className="container stats-bar-container">
          <div className="stat-card">
            <span className="val">1,500 MT</span>
            <span className="lbl">Annual Production Capacity</span>
          </div>
          <div className="stat-card">
            <span className="val">20,000 Sq.ft</span>
            <span className="lbl">Manufacturing Facility</span>
          </div>
          <div className="stat-card">
            <span className="val">100+</span>
            <span className="lbl">Distributors Across South India</span>
          </div>
          <div className="stat-card">
            <span className="val">500+</span>
            <span className="lbl">Happy Business Clients</span>
          </div>
        </div>
      </section>

      {/* SECTION 12: CONTACT + ENQUIRY STRIP */}
      <section className="im-contact-strip-section">
        <div className="container strip-grid-2">
          <div className="strip-left-details">
            <h3>Ready to Place a Bulk Order?</h3>
            <p>Get best price directly from the manufacturer</p>
            <p className="strip-address">
              <MapPin size={14} className="inline-icon" /> 14/7, #2, K.H.Ranganatha Colony, Mysore Road, Bangalore - 560026
            </p>
          </div>

          <div className="strip-right-form">
            {botSuccess ? (
              <div className="bot-form-success">
                <CheckCircle size={20} /> Requirement Submitted Successfully!
              </div>
            ) : (
              <form onSubmit={handleBotSubmit} className="bot-inline-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={botName}
                  onChange={(e) => setBotName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Mobile/Phone"
                  value={botPhone}
                  onChange={(e) => setBotPhone(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Product Name"
                  value={botProduct}
                  onChange={(e) => setBotProduct(e.target.value)}
                  required
                />
                <button type="submit" className="bot-submit-btn">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
