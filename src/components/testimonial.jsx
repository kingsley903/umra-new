import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "UMRA represents a breakthrough in chronic disease management. The AI insights are remarkably accurate.",
    author: "Dr. Amara Okafor",
    title: "Cardiologist, Lagos University Hospital",
  },
  {
    id: 2,
    quote:
      "Highly recommended. The team was professional and the results exceeded my expectations.",
    author: "John Smith",
    title: "CEO, Creative Co.",
  },
  {
    id: 3,
    quote: "A game-changer for our business. The support is top-notch. Simple.",
    author: "Emily White",
    title: "Founder, Innovate Labs",
  },
  {
    id: 4,
    quote: "Couldn't be happier with the outcome. A truly seamless experience.",
    author: "Michael Brown",
    title: "Lead Developer, Global Ventures",
  },
  {
    id: 5,
    quote: "Simple, effective, and reliable. Exactly what we were looking for.",
    author: "Jessica Lee",
    title: "CTO, Data Dynamics",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Autoplay every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const totalDots = testimonials.length;

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <div className="bg-light d-flex align-items-center justify-content-center py-5">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11 col-12">
            <div className="row g-4 overflow-hidden flex-nowrap">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="card shadow rounded-4 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="text-warning fs-5">
                            &#9733;
                          </span>
                        ))}
                      </div>
                      <div className="text-end text-secondary">
                        <span className="fw-bolder fs-1">&rdquo;</span>
                      </div>
                    </div>
                    <p className="fst-italic text-dark mb-4">
                      {testimonial.quote}
                    </p>
                    <div className="d-flex align-items-center mt-auto">
                      <div className="text-start">
                        <h6 className="fw-bold mb-0">{testimonial.author}</h6>
                        <p className="small text-muted mb-0">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="d-flex justify-content-center list-unstyled mt-4 p-0">
              {Array.from({ length: totalDots }).map((_, index) => (
                <li key={index} className="mx-1">
                  <button
                    className={`btn btn-sm rounded-circle p-0 border border-2 ${
                      index === currentIndex
                        ? "btn-primary border-primary"
                        : "btn-outline-secondary"
                    }`}
                    style={{ width: "12px", height: "12px" }}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
import React, { useState, useEffect } from "react";