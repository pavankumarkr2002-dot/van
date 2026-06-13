import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { 
  Compass, 
  Users, 
  Layers, 
  CheckCircle, 
  Truck, 
  Warehouse, 
  FlaskConical, 
  Heart, 
  Globe, 
  ShieldAlert, 
  Boxes, 
  Activity, 
  Share2 
} from "lucide-react";

export default function AboutUs() {
  const whyUsPoints = [
    {
      icon: <Compass className="why-icon" />,
      text: "Pioneers in premix manufacturing in South India"
    },
    {
      icon: <Users className="why-icon" />,
      text: "Family run business yet professional in service, reasonable pricing due to controlled overheads and marketing expenses"
    },
    {
      icon: <Layers className="why-icon" />,
      text: "40 years of experience in trading in imported and local food chemicals and ingredients, with stringent quality control"
    },
    {
      icon: <CheckCircle className="why-icon" />,
      text: "FSSAI approved 100% Vegetarian manufacturing facility"
    },
    {
      icon: <Truck className="why-icon" />,
      text: "Widest product spectrum and prompt shipment"
    },
    {
      icon: <Warehouse className="why-icon" />,
      text: "In-house facility of 20,000 Sq.ft area with daily production capacity of over 5 tonnes and 1500 MT per year with spare capacity for third party labeling / job work / contract manufacturing"
    },
    {
      icon: <FlaskConical className="why-icon" />,
      text: "Full-fledged R&D facility with qualified team of technologists and in-house testing to develop new blends as per customer demands"
    },
    {
      icon: <Heart className="why-icon" />,
      text: "Make in India: We manufacture locally, unlike competitors who import from China — providing employment to Indian middle class men and women"
    },
    {
      icon: <Globe className="why-icon" />,
      text: "Products tried and tested by major domestic and international brands across the globe"
    },
    {
      icon: <ShieldAlert className="why-icon" />,
      text: "Vigorous quality control system — very rare among competitors from India"
    },
    {
      icon: <Boxes className="why-icon" />,
      text: "All raw materials and finished goods stored in safe, controlled environment following strict first-in-first-out policy. Premises treated with necessary pest control measures"
    },
    {
      icon: <Activity className="why-icon" />,
      text: "Good quality packing material — automated belting facility ensures zero errors"
    },
    {
      icon: <Share2 className="why-icon" />,
      text: "Strong dealer network across South India with over 100 distributors and dynamic marketing team"
    }
  ];

  return (
    <div className="about-page-container">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span className="current">About Us</span>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <section className="why-us-section section-padding">
        <div className="container">
          <h2 className="why-us-title">Why Us</h2>
          <div className="why-us-grid">
            {whyUsPoints.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-container">
                  {item.icon}
                </div>
                <div className="why-card-text">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <h2 className="testimonials-section-title">Happy Clients Say</h2>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
}
