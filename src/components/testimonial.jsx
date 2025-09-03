import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    quote: "This service is amazing! It completely transformed my workflow.",
    author: "Jane Doe",
    company: "Tech Solutions Inc."
  },
  {
    id: 2,
    quote: "Highly recommended. The team was professional and the results exceeded my expectations.",
    author: "John Smith",
    company: "Creative Co."
  },
  {
    id: 3,
    quote: "A game-changer for our business. The support is top-notch.",
    author: "Emily White",
    company: "Innovate Labs"
  },
  {
    id: 4,
    quote: "Couldn't be happier with the outcome. A truly seamless experience.",
    author: "Michael Brown",
    company: "Global Ventures"
  },
  {
    id: 5,
    quote: "Simple, effective, and reliable. Exactly what we were looking for.",
    author: "Jessica Lee",
    company: "Data Dynamics"
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true, // Shows dots for navigation
    infinite: true, // Loops the slides
    speed: 500, // Animation speed
    slidesToShow: 3, // **This is the key property** to show 3 slides at once
    slidesToScroll: 1, // Scrolls one slide at a time
    autoplay: true, // Autoplay the slides
    autoplaySpeed: 3000, // Autoplay interval
    responsive: [ // Adjusts settings for smaller screens
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author"><strong>- {testimonial.author}</strong></p>
            <p className="company">{testimonial.company}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;