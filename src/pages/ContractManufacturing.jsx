import { Link } from "react-router-dom";
import { 
  FileText, 
  Settings, 
  DollarSign, 
  Activity, 
  RotateCw, 
  ShieldCheck, 
  UserCheck, 
  Cpu 
} from "lucide-react";

export default function ContractManufacturing() {
  const whyUsCards = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Reliable & Stringent",
      text: "Timely supply, consistent batch quality, and professional service levels."
    },
    {
      icon: <UserCheck size={28} />,
      title: "Dedicated R&D",
      text: "Trained R&D professionals are allotted for each batch to ensure peak performance and testing."
    },
    {
      icon: <DollarSign size={28} />,
      title: "Flexible & Affordable",
      text: "Competitive pricing models and low MOQ rules help startups reduce capital expenditure."
    },
    {
      icon: <FileText size={28} />,
      title: "NDA Protection",
      text: "Non-disclosure agreements signed before starting projects for client comfort and security."
    },
    {
      icon: <RotateCw size={28} />,
      title: "End-to-End Solutions",
      text: "Avoid jugglery of multiple suppliers. Sourcing, blending, and packaging are handled in one place."
    },
    {
      icon: <Cpu size={28} />,
      title: "Latest Machinery",
      text: "Semi-automated machinery and a modern testing lab manage high-precision processes."
    },
    {
      icon: <Activity size={28} />,
      title: "Large-Scale Capacity",
      text: "Highly qualified production and quality control staff operating out of a state-of-the-art facility."
    }
  ];

  const privateLabelProducts = [
    "Jaljeera Drink Premix", "Vanilla Frappe Blend", "Drinking Chocolate", 
    "Kesar Badam Drink Premix", "Custard Powder", "Slush Drink", 
    "Soft Drink Concentrate", "Rose Milk", "Pista Milk", "Ice Tea Premix", 
    "Milk Shake Premixes (12 flavours)", "Cake Premix Concentrate", 
    "Bread Improver Concentrates", "Cake Improver", "Cold Spread Glaze Gel", 
    "Liquid Food Colours", "Jelly Crystals Premix"
  ];

  return (
    <div className="contract-manufacturing-container">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Contract Manufacturing</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span className="current">Contract Manufacturing</span>
          </div>
        </div>
      </div>

      {/* Hero Text Intro Section */}
      <section className="contract-hero-section section-padding" style={{ backgroundImage: "linear-gradient(rgba(247, 247, 247, 0.95), rgba(247, 247, 247, 0.95)), url('./images/factory_banner.png')" }}>
        <div className="container">
          <div className="contract-hero-card">
            <h2 className="contract-main-title">Partnering with Leading Food Brands</h2>
            <div className="heading-separator"></div>
            <p className="contract-hero-body">
              Vintop Products Pvt. Ltd., a privately owned and fully independent food processing and blending company, has been the preferred contract manufacturing partner for many MNCs to blend powder flavours and food mixes. Our popularity has spread primarily by word of mouth about our high service levels and immaculate facility. Today we allot up to 30% of our production facility towards job work facilities serving both local and international clients. Due to our flexibility in MOQ and reasonable conversion charges we are the preferred partners to a lot of new age food start-ups to whom we provide ready setups and custom solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="contract-why-section section-padding">
        <div className="container">
          <h2 className="section-title">Co-Packing Strengths</h2>
          <div className="contract-why-grid">
            {whyUsCards.map((card, idx) => (
              <div key={idx} className="contract-why-card card">
                <div className="contract-why-icon-box">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposals Section */}
      <section className="proposals-section section-padding">
        <div className="container">
          <h2 className="section-title text-white">Manufacturing Pathways</h2>
          <div className="proposals-grid">
            <div className="proposal-box">
              <div className="pathway-step">YOUR FORMULATION</div>
              <div className="pathway-arrow">➔</div>
              <div className="pathway-step">YOUR BRAND</div>
              <div className="pathway-arrow">➔</div>
              <div className="pathway-step highlight">OUR MANUFACTURING</div>
            </div>
            
            <div className="proposal-box">
              <div className="pathway-step">YOUR BRAND</div>
              <div className="pathway-arrow">➔</div>
              <div className="pathway-step">OUR FORMULATION</div>
              <div className="pathway-arrow">➔</div>
              <div className="pathway-step highlight">OUR MANUFACTURING</div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Label List */}
      <section className="private-label-section section-padding">
        <div className="container">
          <h2 className="section-title">Exclusive Products for Private Labelling</h2>
          <div className="private-label-tags-container">
            {privateLabelProducts.map((prod, idx) => (
              <span key={idx} className="private-label-tag">
                {prod}
              </span>
            ))}
          </div>

          <div className="packaging-note-card">
            <h3>Automated High-Speed Packaging</h3>
            <p>
              Super efficient machinery for <strong>10 gm / 20 gm / 30 gm</strong> pouch packing facility. Our high-speed automated packing lines can package any customized dry powder blends with absolute weight precision and zero errors.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Link strip */}
      <section className="contract-cta-strip section-padding">
        <div className="container text-center">
          <h2>Discuss Your Manufacturing Project</h2>
          <p>We sign NDAs upfront and offer flexible options. Get in touch with our operations team.</p>
          <Link to="/contact-us" className="btn btn-orange">
            Initiate Project Discussion
          </Link>
        </div>
      </section>
    </div>
  );
}
