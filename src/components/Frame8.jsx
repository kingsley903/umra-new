import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TestimonialSlider from "./testimonial";

const Frame8 = () => {
  const cardData = [
    {
      icon: "../icons/variant=69.png",
      iconBg: "bg-primary",
      iconColor: "text-primary",
      title: "Personalized Health Feedback",
      description:
        "Get tailored recommendations for better daily health decisions based on your unique health profile",
      statValue: "92%",
      statLabel: "Accuracy Rate",
      statColor: "text-primary",
    },
    {
      icon: "../icons/variant=71.png",
      iconBg: "bg-success",
      iconColor: "text-success",
      title: "Long-term Health Tracking",
      description:
        "Monitor chronic conditions with comprehensive trend analysis and predictive insights",
      statValue: "85%",
      statLabel: "Improved Outcomes",
      statColor: "text-success",
    },
    {
      icon: "../icons/variant=81.png",
      iconBg: "bg-purple",
      iconColor: "text-purple",
      title: "Increased Independence",
      description:
        "Take control of your health with confidence and autonomy in managing your wellbeing",
      statValue: "78%",
      statLabel: "Self-management",
      statColor: "text-purple",
    },
    {
      icon: "../icons/variant=75.png",
      iconBg: "bg-orange",
      iconColor: "text-orange",
      title: "Insightful Analytics",
      description:
        "Prompt medical risks with predictive health insights and early warning systems",
      statValue: "65%",
      statLabel: "Risk Reduction",
      statColor: "text-orange",
    },
    {
      icon: "../icons/variant=77.png",
      iconBg: "bg-info",
      iconColor: "text-info",
      title: "Digital Medical Ecosystem",
      description:
        "Access to a growing network of healthcare services and professionals across Africa",
      statValue: "50+",
      statLabel: "Partner Clinics",
      statColor: "text-info",
    },
  ];

  return (
    <div
      id="benefits"
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="container text-center py-5">
        <div className="row center">
          <p className="text-primary fw-bold mb-1 how-hder px-1 py-1 rounded-5 col-lg-3 col-sm-12">
            <img alt="Container" src="../icons/variant=55.png" /> Why Choose
            UMRA
          </p>
        </div>
        <h1 className="fw-bold display-5">
          Experience the <span className="text-primary">Benefits</span> of
          Intelligent Health Monitoring
        </h1>
        <p
          className="text-secondary mt-3 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Join thousands of users who have transformed their health journey with
          UMRA's advanced monitoring platform
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {cardData.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 shadow-smed-3 shadow-lg border-0 p-3">
                <div className="d-flex align-items-center mb-3">
                  <div className={`p-2 rounded-3 me-3 ${card.iconBg}`}>
                    <img alt="Container" src={`${card.icon}`} />
                  </div>
                  <h5 className="card-title fw-bold mb-0">{card.title}</h5>
                </div>
                <p className="card-text text-secondary">{card.description}</p>
                <div className="mt-auto">
                  <p className={`mb-0 fw-bold ${card.statColor}`}>
                    {card.statValue}{" "}
                    <span className="text-secondary fw-normal">
                      {card.statLabel}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <div
          className="p-5 rounded-3 text-white text-center"
          style={{
            background: "linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)",
          }}
        >
          <h2 className="fw-bold">
            Making Healthcare Accessible Across Africa
          </h2>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            Join the digital health revolution and be part of a community that's
            transforming healthcare accessibility
          </p>
          <div className="row justify-content-around mt-4">
            <div className="col-6 col-md-3 mb-3">
              <img src="../icons/variant=79.png" />
              <h3 className="fw-bold mt-2">50K+</h3>
              <p>Active Users</p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <img src="../icons/variant=69.png" />
              <h3 className="fw-bold mt-2">95%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <img src="../icons/variant=81.png" />
              <h3 className="fw-bold mt-2">24/7</h3>
              <p>Health Monitoring</p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <img src="../icons/variant=75.png" />
              <h3 className="fw-bold mt-2">100+</h3>
              <p>Daily Insights</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center py-5">
        <h2 className="fw-bold">What Our Community Says</h2>
        <p
          className="text-secondary mx-auto mb-5"
          style={{ maxWidth: "600px" }}
        >
          Real stories from healthcare professionals and patients using UMRA
        </p>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Frame8;
