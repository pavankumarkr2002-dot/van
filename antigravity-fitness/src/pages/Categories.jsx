import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { Dumbbell, ArrowRight } from "lucide-react";

const categoryList = [
  {
    id: "cardio",
    title: "CARDIO RANGE",
    filterName: "Cardio",
    tagline: "Burn calories. Build endurance. Conquer cardio.",
    desc: "Engineered with advanced shock-absorption decks, low-friction belts, and commercial-grade motors, our cardio collection is built to withstand high-volume, repetitive training. Designed for maximum calorie burning and cardiovascular output.",
    products: ["Pro & Elite Treadmills", "Commercial Ellipticals", "Magnetic Exercise Bikes", "Air Resistance Rowers"],
    imgKey: "TREADMILL",
    imgPrompt: "Premium black and orange commercial treadmill, studio product shot, white background, sharp shadows, 3D render quality"
  },
  {
    id: "strength",
    title: "STRENGTH TRAINING",
    filterName: "Strength",
    tagline: "Build muscle. Increase power. Get stronger.",
    desc: "From Olympic barbells and high-grade cast weight plates to thick rubber hex dumbbells and multi-angle adjustable benches. Built for heavy structural training, lifting clubs, powerlifters, and premium home gyms.",
    products: ["Rubber Hex Dumbbells", "Olympic Barbells & Plates", "Adjustable FID Benches", "Kettlebell Sets", "Pull-Up Stations"],
    imgKey: "BARBELL SET",
    imgPrompt: "Olympic barbell with weight plates set, black iron, studio product shot white background, photorealistic"
  },
  {
    id: "machines",
    title: "GYM MACHINES",
    filterName: "Machines",
    tagline: "Train smarter. Isolate muscles. Go further.",
    desc: "Professional selectorized and plate-loaded heavy machinery. Features smooth dual crossover cable systems, counter-balanced smith guide bars, and multi-station multi-gym systems. Provides optimal biomechanics for isolating targeted muscle groups safely.",
    products: ["Multi-Station Home Gyms", "Cable Crossovers", "Commercial Smith Machines", "Plate-Loaded Functional Trainers"],
    imgKey: "CABLE MACHINE",
    imgPrompt: "Professional cable crossover machine black and orange, studio product shot white background, commercial gym"
  },
  {
    id: "accessories",
    title: "ACCESSORIES & RECOVERY",
    filterName: "Accessories",
    tagline: "Train complete. Recover faster. Perform better.",
    desc: "Premium training tools designed for mobility, stretching, and physical recovery. Includes high-elasticity loop resistance bands, textured high-density foam rollers, and anti-slip exercise mats with carrying wraps.",
    products: ["Latex Loop Resistance Bands", "High-Density EVA Foam Rollers", "Non-Slip Yoga & Exercise Mats", "Heavy Duty Gym Straps & Gloves"],
    imgKey: "RESISTANCE BANDS",
    imgPrompt: "Set of premium loop resistance bands in orange and black packaging, studio product shot white background"
  }
];

export default function Categories() {
  const { hash } = useLocation();

  // Scroll to section based on URL hash (e.g. /categories#cardio)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="anti-categories-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Shop By Category</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span className="current">Categories</span>
          </div>
        </div>
      </div>

      {/* Categories Stacked Section */}
      <section className="categories-stack-section">
        {categoryList.map((cat, idx) => (
          <div 
            id={cat.id} 
            key={cat.id} 
            className={`category-stack-row ${idx % 2 === 1 ? "reverse-layout" : ""}`}
          >
            {/* Image Panel */}
            <div className="stack-image-panel">
              <ImagePlaceholder
                promptKey={cat.imgKey}
                promptText={cat.imgPrompt}
                alt={cat.title}
                aspectRatio="16/10"
              />
            </div>
            
            {/* Info Panel */}
            <div className="stack-info-panel">
              <span className="category-index">0{idx + 1}</span>
              <h2>{cat.title}</h2>
              <h3 className="category-tagline-quote">{cat.tagline}</h3>
              <p className="category-long-description">{cat.desc}</p>
              
              <div className="category-products-bullet-block">
                <h4>Includes Products:</h4>
                <div className="category-bullets-flex">
                  {cat.products.map((item, index) => (
                    <span key={index} className="category-bullet-tag">
                      <Dumbbell size={12} className="bullet-dumbbell-icon" /> {item}
                    </span>
                  ))}
                </div>
              </div>

              <Link 
                to="/products" 
                state={{ category: cat.filterName }}
                className="btn btn-orange mt-2"
              >
                Browse {cat.filterName} Range <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
