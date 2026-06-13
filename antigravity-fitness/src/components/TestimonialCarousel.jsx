import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "Installed 15 treadmills and 8 ellipticals. Build quality is excellent and delivery was on time.",
    name: "Rajesh K.",
    role: "Gym Owner",
    location: "Bangalore"
  },
  {
    rating: 5,
    quote: "Best price to quality ratio in India. My home gym is fully equipped with AntiGravity.",
    name: "Priya M.",
    role: "Fitness Enthusiast",
    location: "Mumbai"
  },
  {
    rating: 5,
    quote: "After-sales service is top notch. The technician came within 48 hours for installation.",
    name: "Suresh P.",
    role: "Studio Owner",
    location: "Chennai"
  },
  {
    rating: 5,
    quote: "Bought a full set of commercial dumbbells. Zero complaints after 2 years of heavy use.",
    name: "Amit S.",
    role: "CrossFit Trainer",
    location: "Pune"
  },
  {
    rating: 5,
    quote: "The multi-gym machine is solid. My clients love it.",
    name: "Deepa R.",
    role: "Personal Trainer",
    location: "Hyderabad"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)),
      4000 // 4 seconds interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  // Handle active slide offset on desktop
  const getVisibleTestimonials = () => {
    const doubleList = [...testimonials, ...testimonials];
    return doubleList.slice(currentIndex, currentIndex + 3);
  };

  return (
    <div className="anti-testimonials-container">
      {/* Desktop view (3 columns sliding/rotating) */}
      <div className="desktop-testimonials-grid">
        {getVisibleTestimonials().map((item, idx) => (
          <div className="testimonial-card fade-in-card" key={idx}>
            <div className="stars-row">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} fill="var(--accent-orange)" color="var(--accent-orange)" />
              ))}
            </div>
            <p className="testimonial-quote">"{item.quote}"</p>
            <div className="testimonial-client-info">
              <span className="client-name">{item.name}</span>
              <span className="client-role">{item.role}, {item.location}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view (single card slider) */}
      <div className="mobile-testimonial-slider">
        <div className="testimonial-card">
          <div className="stars-row">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} size={16} fill="var(--accent-orange)" color="var(--accent-orange)" />
            ))}
          </div>
          <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
          <div className="testimonial-client-info">
            <span className="client-name">{testimonials[currentIndex].name}</span>
            <span className="client-role">{testimonials[currentIndex].role}, {testimonials[currentIndex].location}</span>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="testimonials-carousel-dots">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot-btn ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
