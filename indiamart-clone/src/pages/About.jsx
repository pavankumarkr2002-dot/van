import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Star, ShieldCheck, MapPin } from "lucide-react";

export default function About() {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    { rating: 5, quote: "Tied up with Vintop since inception. Never had any issue with quality and service.", name: "Sanjay", city: "Pune", biz: "Bakery Owner" },
    { rating: 5, quote: "Vintop's Bread Improver and Whipping Cream Powder is my favourite. No other brand matches theirs.", name: "Meena", city: "Bangalore", biz: "Home Baker" },
    { rating: 5, quote: "Their softy powder blends do well with our machine. Excellent mouthfeel, yield and taste.", name: "Jaykumar", city: "Chennai", biz: "Ice Cream Parlour" },
    { rating: 5, quote: "Wide range of products. Sourcing made very easy. They support prompt deliveries.", name: "Prem", city: "Bangalore", biz: "Hotel Chain Owner" },
    { rating: 5, quote: "The quality of their glaze gel is one of the best I have tried till date.", name: "Rishab", city: "Kolkata", biz: "Pastry Chef" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const advantages = [
    "Pioneers in premix manufacturing in South India.",
    "Family run business yet professional in service, reasonable pricing due to controlled overheads and marketing expenses.",
    "40 years of experience in trading in imported and local food chemicals and ingredients, with stringent quality control.",
    "FSSAI approved 100% Vegetarian manufacturing facility.",
    "Widest product spectrum and prompt shipment.",
    "In-house facility of 20,000 Sq.ft area with daily production capacity of over 5 tonnes and 1500 MT per year with spare capacity for third party labeling / job work / contract manufacturing.",
    "Full-fledged R&D facility with qualified team of technologists and in-house testing to develop new blends as per customer demands.",
    "Make in India: We manufacture locally, unlike competitors who import from China — providing employment to Indian middle class men and women.",
    "Products tried and tested by major domestic and international brands across the globe.",
    "Vigorous quality control system — very rare among competitors from India.",
    "All raw materials and finished goods stored in safe, controlled environment following strict first-in-first-out policy. Premises treated with necessary pest control measures.",
    "Good quality packing material — automated belting facility ensures zero errors.",
    "Strong dealer network across South India with over 100 distributors and dynamic marketing team."
  ];

  return (
    <div className="im-about-page">
      {/* Company Profile Header */}
      <section className="about-company-header-banner">
        <div className="container header-banner-container">
          <div className="brand-avatar-box">🏭</div>
          <div className="brand-details-box">
            <h1>Vintop Products Pvt. Ltd.</h1>
            <p className="sub-header-title">Food Ingredients & Premix Manufacturer</p>
            <div className="header-meta-row">
              <span><MapPin size={14} className="inline-icon" /> Bangalore, Karnataka</span>
              <span className="dot">•</span>
              <span>Est. 1970s</span>
              <span className="dot">•</span>
              <span className="trust-green"><ShieldCheck size={14} className="inline-icon" /> FSSAI Approved | 100% Veg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mt-3">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span className="current">About Us</span>
        </div>
      </div>

      {/* Milestone Stats */}
      <section className="about-stats-blocks-section section-padding">
        <div className="container stats-blocks-grid">
          <div className="stat-card card">
            <span className="number">20,000 Sq.ft</span>
            <span className="label">Manufacturing Facility</span>
          </div>
          <div className="stat-card card">
            <span className="number">5 Tonnes / Day</span>
            <span className="label">Production Capacity</span>
          </div>
          <div className="stat-card card">
            <span className="number">1,500 MT / Year</span>
            <span className="label">Annual Output Volume</span>
          </div>
          <div className="stat-card card">
            <span className="number">100+</span>
            <span className="label">Distributors across India</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why-us-checklist-section section-padding">
        <div className="container">
          <h2 className="section-title">Why Buy from Vintop?</h2>
          
          <div className="advantages-vertical-list">
            {advantages.map((item, idx) => (
              <div key={idx} className="advantage-check-row">
                <div className="check-circle-icon">
                  <Check size={16} />
                </div>
                <p className="advantage-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="about-carousel-reviews-section section-padding">
        <div className="container">
          <h2 className="section-title">Happy Clients Say</h2>
          
          <div className="reviews-carousel-box card">
            <div className="stars-row-centered">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFC107" color="#FFC107" />)}
            </div>
            <p className="carousel-quote">"{reviews[currentReview].quote}"</p>
            <div className="carousel-author-block">
              <span className="name">— {reviews[currentReview].name}</span>
              <span className="city">{reviews[currentReview].city} | {reviews[currentReview].biz}</span>
            </div>

            {/* Selector dots */}
            <div className="carousel-selector-dots">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === currentReview ? "active" : ""}`}
                  onClick={() => setCurrentReview(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
