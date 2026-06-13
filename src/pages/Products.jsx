import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Products() {
  const categories = [
    {
      id: 1,
      title: "Bakery Products",
      icon: "🍞",
      description: "Premium bread/bun improvers, cake gels, whipping cream powders, baking powders, and eggless premixes.",
      link: "/bakery",
      image: "./images/bakery_banner.png"
    },
    {
      id: 2,
      title: "Beverage Products",
      icon: "🥤",
      description: "Instant premixes for tea, Rose milk, pista milk, badam milk, drinking chocolate, and fruit drink stabilizers.",
      link: "/beverages-and-ice-creams",
      image: "./images/rose_milk.png"
    },
    {
      id: 3,
      title: "Ice Cream Products",
      icon: "🍨",
      description: "Creamy softee ice cream mixes in over 20 flavors, fat-stabilizers, and flavor emulsions.",
      link: "/beverages-and-ice-creams",
      image: "./images/icecream_banner.png"
    },
    {
      id: 4,
      title: "HoReCa Products",
      icon: "🍽️",
      description: "Natural spice powder boosters, chapathi softeners, deep-frying oil savers, and vegetarian jelly crystals.",
      link: "/horeca",
      image: "./images/ragi_malt.png"
    }
  ];

  return (
    <div className="products-overview-container">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Our Products</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span className="current">Products</span>
          </div>
        </div>
      </div>

      {/* Category Grid Section */}
      <section className="categories-grid-section section-padding">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <div className="category-2x2-grid">
            {categories.map((cat) => (
              <div key={cat.id} className="category-card card">
                <div className="category-image-container">
                  <img src={cat.image} alt={cat.title} className="category-image" />
                  <span className="category-emoji-badge">{cat.icon}</span>
                </div>
                <div className="category-card-content">
                  <h3 className="category-card-title">{cat.title}</h3>
                  <p className="category-card-description">{cat.description}</p>
                  <Link to={cat.link} className="btn btn-orange btn-category-link">
                    View Products <ArrowRight size={14} className="btn-icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Launch Banner Strip */}
      <section className="new-launch-strip">
        <div className="container launch-container">
          <div className="launch-text">
            <div className="launch-tag">
              <Sparkles size={16} /> NEW LAUNCH
            </div>
            <h2>Goldsberg – Namkeen & Savories Oil Saver</h2>
            <p>Our revolutionary deep-frying blend reduces oil absorption, extends shelf life, and ensures maximum crispiness.</p>
          </div>
          <div className="launch-cta">
            <Link to="/horeca" className="btn btn-orange">
              Explore HoReCa Range
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
