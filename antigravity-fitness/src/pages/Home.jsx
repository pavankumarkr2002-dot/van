import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { 
  ArrowRight, 
  Dumbbell, 
  Truck, 
  Wrench, 
  CreditCard, 
  Zap, 
  Trophy, 
  Check,
  ShoppingBag
} from "lucide-react";

export default function Home() {
  const [enquiryCount, setEnquiryCount] = useState(0);
  const [addedProduct, setAddedProduct] = useState(null);

  const handleAddEnquiry = (productName) => {
    setEnquiryCount(prev => prev + 1);
    setAddedProduct(productName);
    setTimeout(() => setAddedProduct(null), 3000);
  };

  const categories = [
    {
      title: "CARDIO",
      desc: "Treadmills, Bikes, Ellipticals",
      key: "TREADMILL",
      prompt: "Premium black and orange commercial treadmill, studio product shot, white background, sharp shadows, 3D render quality",
      hash: "cardio"
    },
    {
      title: "STRENGTH",
      desc: "Barbells, Dumbbells, Multi-Gyms",
      key: "BARBELL SET",
      prompt: "Olympic barbell with weight plates set, black iron, studio product shot white background, photorealistic",
      hash: "strength"
    },
    {
      title: "MACHINES",
      desc: "Cable, Smith, Functional",
      key: "CABLE MACHINE",
      prompt: "Professional cable crossover machine black and orange, studio product shot white background, commercial gym",
      hash: "machines"
    },
    {
      title: "ACCESSORIES",
      desc: "Bands, Mats, Rollers",
      key: "RESISTANCE BANDS",
      prompt: "Set of premium loop resistance bands in orange and black packaging, studio product shot white background",
      hash: "accessories"
    }
  ];

  const bestsellers = [
    {
      id: "T-500",
      name: "AntiGravity Pro Treadmill T-500",
      cat: "Cardio",
      price: "45,999",
      imgKey: "TREADMILL",
      imgPrompt: "Premium black and orange commercial treadmill, studio product shot, white background, sharp shadows, 3D render quality"
    },
    {
      id: "E-200",
      name: "Commercial Elliptical E-200",
      cat: "Cardio",
      price: "38,500",
      imgKey: "ELLIPTICAL",
      imgPrompt: "Sleek black elliptical cross trainer machine, orange accents, studio product shot on white background, photorealistic"
    },
    {
      id: "B-100",
      name: "Magnetic Exercise Bike B-100",
      cat: "Cardio",
      price: "22,999",
      imgKey: "EXERCISE BIKE",
      imgPrompt: "Premium upright exercise bike black and orange color, studio product shot white background, 3D render"
    },
    {
      id: "D-Set",
      name: "Rubber Hex Dumbbell Set (5-50kg)",
      cat: "Strength",
      price: "28,500",
      imgKey: "DUMBBELLS",
      imgPrompt: "Set of hexagonal rubber dumbbells 5kg to 50kg on a rack, black and orange, studio product shot"
    },
    {
      id: "B-Set",
      name: "Olympic Barbell + Weight Set",
      cat: "Strength",
      price: "18,999",
      imgKey: "BARBELL SET",
      imgPrompt: "Olympic barbell with weight plates set, black iron, studio product shot white background, photorealistic"
    },
    {
      id: "MG-7",
      name: "Multi-Station Home Gym MG-7",
      cat: "Machines",
      price: "65,000",
      imgKey: "MULTI GYM",
      imgPrompt: "Heavy duty multi-station home gym machine, black powder coat finish, studio product shot white background"
    },
    {
      id: "Bench",
      name: "Adjustable FID Bench",
      cat: "Strength",
      price: "12,500",
      imgKey: "BENCH",
      imgPrompt: "Adjustable weight training bench black vinyl and orange frame, studio product shot white background"
    },
    {
      id: "Cable",
      name: "Cable Crossover Machine",
      cat: "Machines",
      price: "85,000",
      imgKey: "CABLE MACHINE",
      imgPrompt: "Professional cable crossover machine black and orange, studio product shot white background, commercial gym"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Dumbbell size={32} />,
      title: "Commercial Grade",
      desc: "Built to withstand 8+ hours of daily use in professional gym environments."
    },
    {
      icon: <Truck size={32} />,
      title: "Pan-India Delivery",
      desc: "Free delivery and installation at your gym or home anywhere in India."
    },
    {
      icon: <Wrench size={32} />,
      title: "2 Year Warranty",
      desc: "Full warranty on all machines with dedicated service support."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Easy EMI",
      desc: "0% EMI options available on all products above ₹15,000."
    },
    {
      icon: <Zap size={32} />,
      title: "Quick Setup",
      desc: "Professional installation team at your doorstep within 72 hours."
    },
    {
      icon: <Trophy size={32} />,
      title: "15+ Years Trust",
      desc: "Serving 500+ gyms and fitness studios across India since 2008."
    }
  ];

  return (
    <div className="anti-home-page">
      {/* Toast Notification */}
      {addedProduct && (
        <div className="toast-notification">
          <Check size={16} className="toast-success-icon" />
          <span>Added <strong>{addedProduct}</strong> to Enquiry list!</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="anti-hero-section">
        <div className="hero-img-container">
          <ImagePlaceholder
            promptKey="HERO"
            promptText="Ultra-muscular athlete doing heavy barbell squat in a dark premium gym, orange dramatic lighting from above, cinematic, photorealistic, 16:9"
            alt="AntiGravity Heavy Squat Workout"
            className="hero-backdrop"
            aspectRatio="16/9"
          />
          <div className="hero-gradient-overlay"></div>
        </div>

        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <span className="hero-tag">PREMIUM FITNESS EQUIPMENT — INDIA</span>
            <h1 className="hero-main-title">DEFY LIMITS.</h1>
            <h2 className="hero-sec-title">BUILT TO PERFORM.</h2>
            <p className="hero-paragraph">
              Professional-grade fitness equipment for gyms, studios, and serious home training. Engineered for results.
            </p>
            <div className="hero-button-row">
              <Link to="/products" className="btn btn-orange btn-lg">
                Shop All Products <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Counter Stats Overlay at bottom of Hero */}
        <div className="hero-stats-bar">
          <div className="container stats-flex">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Units Sold</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Gyms Equipped</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="marquee-strip-bar">
        <div className="marquee-content-track">
          <span>FREE INSTALLATION • PAN-INDIA DELIVERY • COMMERCIAL GRADE QUALITY • EMI AVAILABLE • 2 YEAR WARRANTY • FREE INSTALLATION • PAN-INDIA DELIVERY • </span>
          <span>FREE INSTALLATION • PAN-INDIA DELIVERY • COMMERCIAL GRADE QUALITY • EMI AVAILABLE • 2 YEAR WARRANTY • FREE INSTALLATION • PAN-INDIA DELIVERY • </span>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="featured-categories-section section-padding">
        <div className="container">
          <h2 className="section-title text-white">Shop By Category</h2>
          <p className="section-subtitle">Everything you need to build your perfect gym</p>
          
          <div className="categories-row-grid">
            {categories.map((cat, idx) => (
              <Link to={`/categories#${cat.hash}`} key={idx} className="category-promo-card card">
                <div className="cat-promo-img-box">
                  <ImagePlaceholder
                    promptKey={cat.key}
                    promptText={cat.prompt}
                    alt={cat.title}
                    aspectRatio="4/3"
                  />
                  <div className="cat-promo-overlay"></div>
                </div>
                <div className="cat-promo-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span className="cat-promo-link">Shop Now ➔</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestselling Products */}
      <section className="bestselling-products-section section-padding">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <h2 className="section-title text-white left-align">Bestselling Products</h2>
              <p className="section-subtitle left-align">Trusted by 500+ gyms across India</p>
            </div>
            {enquiryCount > 0 && (
              <Link to="/contact" className="floating-enquiry-cart">
                <ShoppingBag size={18} />
                <span>Enquiries: {enquiryCount}</span>
              </Link>
            )}
          </div>

          <div className="bestsellers-horizontal-scroll">
            {bestsellers.map((prod) => (
              <div key={prod.id} className="bestseller-product-card card">
                <div className="product-image-box">
                  <ImagePlaceholder
                    promptKey={prod.imgKey}
                    promptText={prod.imgPrompt}
                    alt={prod.name}
                    aspectRatio="16/10"
                  />
                  <span className="bestseller-card-badge">BESTSELLER</span>
                </div>
                <div className="product-card-body">
                  <span className="product-card-category">{prod.cat}</span>
                  <h3 className="product-card-name">{prod.name}</h3>
                  <div className="product-card-price-row">
                    <span className="price-label">Price</span>
                    <span className="price-val">₹{prod.price}</span>
                  </div>
                  <button 
                    onClick={() => handleAddEnquiry(prod.name)}
                    className="btn btn-orange btn-card-enquiry"
                  >
                    Add to Enquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AntiGravity */}
      <section className="why-antigravity-section section-padding">
        <div className="why-pattern-overlay"></div>
        <div className="container relative-z">
          <h2 className="section-title text-white">Why Choose AntiGravity?</h2>
          
          <div className="why-us-3x2-grid">
            {whyChooseUs.map((box, idx) => (
              <div key={idx} className="why-feature-box">
                <div className="why-icon-circle">
                  {box.icon}
                </div>
                <h3>{box.title}</h3>
                <p>{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Split */}
      <section className="lifestyle-split-section">
        <div className="lifestyle-left-image-pane">
          <ImagePlaceholder
            promptKey="HERO_LIFESTYLE"
            promptText="Fit Indian woman doing intense dumbbell workout in dark premium gym, orange lighting, cinematic, photorealistic"
            alt="AntiGravity Training Athlete"
            aspectRatio="1/1"
          />
        </div>
        <div className="lifestyle-right-text-pane">
          <div className="lifestyle-text-inner">
            <span className="lifestyle-tag">FOR SERIOUS ATHLETES</span>
            <h2 className="lifestyle-title">TRAIN LIKE A PRO.</h2>
            <p className="lifestyle-body">
              Whether you're setting up a commercial gym, a boutique studio, or your dream home gym — AntiGravity has the equipment that serious fitness demands.
            </p>
            <Link to="/products" className="btn btn-orange btn-lg">
              Build Your Gym <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <h2 className="section-title text-white">What Our Clients Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="anti-cta-banner-section section-padding">
        <div className="container text-center">
          <h2 className="cta-banner-title">READY TO BUILD YOUR GYM?</h2>
          <p className="cta-banner-subtitle">
            Get a free consultation and customized quote for your gym setup
          </p>
          <Link to="/contact" className="btn btn-black-cta btn-lg">
            Get Free Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}
