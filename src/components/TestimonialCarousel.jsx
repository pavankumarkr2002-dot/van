import { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We are tied up with Vintop family since its inception, and till date never had any issue with respect to quality and service.",
    name: "Sanjay",
    location: "Pune"
  },
  {
    quote: "Vintop's Bread Improver and Whipping Cream Powder is my favourite and no other brand's output is equivalent to theirs.",
    name: "Meena",
    location: "Homebaker"
  },
  {
    quote: "Their softy powder blends do well with our machine with excellent mouthfeel and yield. It is thicker and tastier, yet reasonably priced.",
    name: "Jaykumar",
    location: "Chennai"
  },
  {
    quote: "I run a chain of hotels. The wide range of products available with them has made our sourcing very easy. They support prompt deliveries.",
    name: "Prem",
    location: "Bangalore"
  },
  {
    quote: "The quality of their glaze gel is one of the best I have tried till date.",
    name: "Rishab",
    location: "Kolkata"
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
      5000 // 5 seconds interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="testimonial-carousel-container">
      <div className="testimonial-track-wrapper">
        <div 
          className="testimonial-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div className="testimonial-slide" key={index}>
              <div className="testimonial-card-inner">
                <Quote className="quote-icon" size={40} />
                <p className="testimonial-text">"{item.quote}"</p>
                <div className="testimonial-author">
                  <span className="author-name">— {item.name}</span>
                  <span className="author-location">, {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
