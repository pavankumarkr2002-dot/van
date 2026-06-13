import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { ShieldAlert, Cpu, HeartHandshake } from "lucide-react";

export default function AboutUs() {
  const milestones = [
    { year: "2008", title: "Founded in Bangalore", desc: "Started in a modest warehouse in Peenya with 3 engineers." },
    { year: "2012", title: "Crossed 100 Installations", desc: "Equipped major fitness hubs and colleges across South India." },
    { year: "2018", title: "Pan-India Delivery Launched", desc: "Built our logistics and doorstep assembly network nationwide." },
    { year: "2023", title: "500+ Gyms Equipped", desc: "Became a premier commercial partner for Indian gym chains." }
  ];

  return (
    <div className="anti-about-page">
      {/* Banner */}
      <section className="anti-about-hero-section">
        <div className="about-hero-img-box">
          <ImagePlaceholder
            promptKey="ABOUT"
            promptText="Modern spacious premium gym interior with AntiGravity branded orange and black equipment, industrial lighting, photorealistic"
            alt="About AntiGravity Facility"
            aspectRatio="16/5"
            className="about-hero-bg"
          />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="about-hero-content container text-center">
          <h1>About AntiGravity</h1>
          <p>Built for those who take fitness seriously.</p>
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

      {/* Our Story Section */}
      <section className="about-story-section section-padding">
        <div className="container story-container-grid">
          <div className="story-text-pane">
            <h2 className="section-title text-white left-align">Our Story</h2>
            <p className="story-lead-para">
              AntiGravity was founded in 2008 with one simple mission: to bring commercial-grade, heavy-duty fitness equipment to every gym, boutique studio, and home in India — at prices that make sense.
            </p>
            <p className="story-body-para">
              We started with a single warehouse in Bangalore, and today we serve 500+ gyms across the country. We noticed that Indian gym owners were stuck between cheap, low-durability imports and extremely expensive European brands. AntiGravity bridges that gap.
            </p>
            <p className="story-body-para">
              Every AntiGravity machine is engineered and stress-tested for Indian gym conditions — humid summers, dusty environments, and the relentless, round-the-clock use of high-traffic commercial facilities.
            </p>
          </div>
          <div className="story-image-pane">
            <ImagePlaceholder
              promptKey="HERO_LIFESTYLE"
              promptText="Fit Indian woman doing intense dumbbell workout in dark premium gym, orange lighting, cinematic, photorealistic"
              alt="AntiGravity Gym Assembly"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* Horizontal Timeline Milestone */}
      <section className="about-timeline-section section-padding">
        <div className="container">
          <h2 className="section-title text-white">Milestones</h2>
          
          <div className="milestones-timeline-row">
            {milestones.map((item, idx) => (
              <div key={idx} className="timeline-node-card">
                <div className="timeline-dot-indicator">
                  <span className="year-bubble">{item.year}</span>
                </div>
                <div className="timeline-node-content card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="about-values-section section-padding">
        <div className="container">
          <h2 className="section-title text-white">Our Values</h2>
          
          <div className="grid-3">
            <div className="value-column-card">
              <ShieldAlert className="value-icon" size={40} />
              <h3>Quality First</h3>
              <p>We never compromise on steel thickness, bearing smoothness, or cable strength. Every machine is stress-tested before dispatch.</p>
            </div>
            
            <div className="value-column-card">
              <Cpu className="value-icon" size={40} />
              <h3>India Built</h3>
              <p>Designed and assembled in India, keeping Indian gym conditions, space constraints, and budgets in absolute focus.</p>
            </div>
            
            <div className="value-column-card">
              <HeartHandshake className="value-icon" size={40} />
              <h3>Service Obsessed</h3>
              <p>Our after-sales service technicians are available 6 days a week for prompt installation, preventative maintenance, and spare parts supply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Block */}
      <section className="about-stats-strip-bar">
        <div className="container stats-strip-flex">
          <div className="strip-stat-item">
            <span className="number">500+</span>
            <span className="label">Gyms Equipped</span>
          </div>
          <div className="strip-divider"></div>
          <div className="strip-stat-item">
            <span className="number">10,000+</span>
            <span className="label">Units Delivered</span>
          </div>
          <div className="strip-divider"></div>
          <div className="strip-stat-item">
            <span className="number">15+</span>
            <span className="label">Years of Trust</span>
          </div>
          <div className="strip-divider"></div>
          <div className="strip-stat-item">
            <span className="number">6-Day</span>
            <span className="label">On-Site Support</span>
          </div>
        </div>
      </section>
    </div>
  );
}
