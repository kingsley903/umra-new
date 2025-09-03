import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center py-5 mt-5"
      style={{
        backgroundImage: "url(../assets/Section1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-md-start">
          <div className="col-lg-6 col-md-8">
            <div className="d-flex align-items-center mb-3">
              <img
                src="../assets/logo.png"
                alt="PonceHealth Logo"
                className="me-2"
              />
              <br />
              <p className="text-white col-lg-12">PonceHealth presents</p>
            </div>
            <h1
              className="display-3 fw-bold mb-4 text-white"
              style={{ fontSize: "3.5rem" }}
            >
              Your Health, In Your <br />
              <span className="text-primary"> Hands.</span>
            </h1>
            <p className="fw-light text-white mb-4">
              UMRA by PonceHealth revolutionizes chronic health management
              across Africa. Track your blood pressure and sugar levels, get
              instant AI advice, and stay connected to your health—anytime,
              anywhere with intelligent monitoring.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mb-4">
              <a
                href="#early-access"
                className="btn btn-primary text-primary btn-lg rounded-4 px-4 me-md-3 mb-2 mb-md-0 fw-bold"
                style={{
                  border: "none",
                  background: "#fff",
                }}
              >
                Join Early Access
                <img src="../icons/variant=87.png" />
              </a>
            </div>

            <p className="text-white">
              Join 10,000+ users • Free during beta • No credit card required{" "}
            </p>

            <div className="frame2-boxes col-lg-12">
              <div className="col-lg-4 col-sm-12 frame2-boxes-gaps">
                <div className="frame2bg-white text-center">
                  <h1 className="col-lg-12 text-white">10,000+</h1>
                  <p className="col-lg-12 text-white">Beta User </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-12 frame2-boxes-gaps">
                <div className="frame2bg-white text-center">
                  <h1 className="col-lg-12 text-white">95%</h1>
                  <p className="col-lg-12 text-white">AI Accuracy </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-12 frame2-boxes-gaps">
                <div className="frame2bg-white text-center">
                  <h1 className="col-lg-12 text-white">24/7</h1>
                  <p className="col-lg-12 text-white">Monitoring</p>
                </div>
              </div>
            </div>

            <div
              className="d-flex flex-column flex-md-row align-items-center p-3 mt-5 rounded-3 shadow"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <i className="bi bi-shield-check-fill text-success fs-4 me-3"></i>
              <div className="text-secondary fw-bold flex-grow-1 text-center text-md-start">
                HIPAA Compliant |{" "}
                <span className="text-success">
                  Healthcare Professional Trusted
                </span>{" "}
                | <span className="text-primary">100% Secure</span>
              </div>
            </div>
          </div>
          {/* This is where the phone image would go if you wanted to add it to the column */}

          <div className="col-lg-6 d-lg-block hero-second">
            {/* The phone image would be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
