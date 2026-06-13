import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const industries = [
    "Bread", "Bakery", "Beverages", "Soft Drink & Juice", "Ice Cream", 
    "Sweets & Namkeen", "HoReCa", "Snack Foods", "Neutraceutical", 
    "Confectionery", "Cookies", "Biscuits"
  ];

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('./images/bakery_banner.png')" }}>
        <div className="hero-background-overlay"></div>
        <div className="container hero-content-container">
          <div className="hero-card">
            <h1 className="hero-title">Vintop Products Pvt. Ltd.</h1>
            <p className="hero-subtitle">Food Ingredients, Premix & Instant Powder Blends</p>
            <p className="hero-body-text">
              Based in Bangalore, Vintop Products is a premier food ingredients, premix, and instant powder blends manufacturing company catering to the hotel, bakery, confectionery, neutraceutical, and allied industries. We are one of the oldest family-run businesses, dating back to the 1970s, with tremendous experience in the food industry. We are 100% committed to "Make in India" — our raw materials are sourced primarily within India.
            </p>
            <div className="hero-cta-buttons">
              <Link to="/products" className="btn btn-orange">
                Explore Products <ArrowRight size={16} className="cta-icon" />
              </Link>
              <Link to="/contact-us" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="vision-card">
              <h2 className="vision-mission-heading">Vision</h2>
              <div className="heading-separator"></div>
              <p className="vision-mission-text">
                Vintop Products Pvt. Ltd. intends to be the top recognised brand for ready premixes, instant blends and a-one-stop shop for any instant blends needed by the food & beverage, and neutraceutical sectors with the perfect combination of quality, price and service for all level of users from manufacturers and consumers.
              </p>
            </div>
            <div className="mission-card">
              <h2 className="vision-mission-heading">Mission</h2>
              <div className="heading-separator"></div>
              <p className="vision-mission-text">
                By 2021 and beyond, Vintop Products Pvt. Ltd. intends to be present in every individual's mind related to the food industry in India; be it manufacturers, distributors, traders and end consumers, by delivering exceptional products and support daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section (Aesthetics booster) */}
      <section className="value-prop-section section-padding">
        <div className="container">
          <h2 className="section-title">Why Choose Vintop</h2>
          <div className="grid-3">
            <div className="prop-card">
              <Leaf className="prop-icon" size={40} />
              <h3>100% Vegetarian</h3>
              <p>FSSAI approved facility specialized in pure vegetarian formulations, complying with strict food standards.</p>
            </div>
            <div className="prop-card">
              <Zap className="prop-icon" size={40} />
              <h3>High Efficiency Blends</h3>
              <p>Carefully formulated blends designed to reduce baking times, improve texture, and optimize raw material yields.</p>
            </div>
            <div className="prop-card">
              <ShieldCheck className="prop-icon" size={40} />
              <h3>Rigorous QC</h3>
              <p>Stringent quality controls on both raw materials and finished goods, following strict FIFO policy in warehouse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Cater To Section */}
      <section className="industries-section section-padding">
        <div className="container">
          <h2 className="section-title">Industries We Cater To</h2>
          <div className="industries-badges-container">
            {industries.map((ind, idx) => (
              <span key={idx} className="industry-badge-pill">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
