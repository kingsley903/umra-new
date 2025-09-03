import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row gx-5">
          {/* Logo and Description */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              {/* Main UMRA Logo as SVG */}
              {/*<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                <path d="M12 0L0 7L6 14V21L12 24L18 21V14L24 7L12 0Z" fill="#6A11CB"/>
              </svg>*/}
              <img src="../assets/footer.png" />
              {/*<h5 className="fw-bold mb-0">UMRA</h5>*/}
            </div>
            <p className="text-secondary small">A project by</p>
            <div className="d-flex align-items-center mb-3">
              {/* PonceHealth Logo as SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-2"
              >
                <path
                  d="M8 0L0 4.66667L4 9.33333V14L8 16L12 14V9.33333L16 4.66667L8 0Z"
                  fill="#2575FC"
                />
              </svg>
              <span className="text-secondary small">PonceHealth</span>
            </div>
            <p className="text-secondary small">
              Your health, in your hands. Real-time health monitoring with
              AI-powered insights for better chronic condition management across
              Africa and beyond.
            </p>
            <div className="d-flex align-items-center mt-3">
              <i className="bi bi-globe me-2 text-secondary"></i>
              <span className="text-secondary small">
                Serving Africa & Beyond
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-white mb-3">UMRA Features</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                >
                  Health Monitoring
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                >
                  AI Insights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                >
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-white mb-3">PonceHealth</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Main Website <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary small text-decoration-none"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started Today */}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-white mb-3">Get Started Today</h6>
            <p className="text-secondary small">
              Ready to revolutionize your health monitoring? Join thousands
              already benefiting from UMRA.
            </p>
            <a href="#join">
            <button
              className="btn btn-primary rounded-pill px-4 fw-bold mb-3"
              style={{
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                border: "none",
              }}
            >
              Join Early Access Now
            </button>
            </a>
            <p className="text-secondary small">
              <i className="bi bi-envelope-fill me-2"></i> hello@umrahealth
            </p>
            <p className="text-secondary small">
              <i className="bi bi-telephone-fill me-2"></i> Support: +234 (0)
              800 UMRA
            </p>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "#444" }} />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary small text-center text-md-start">
          <p className="mb-0">
            © 2024 PonceHealth. All rights reserved. UMRA is a product of
            PonceHealth.
          </p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="text-secondary text-decoration-none">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Terms of Service
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Cookie Policy
            </a>
          </div>
        </div>

        <div className="text-center text-secondary small mt-3">
          UMRA is designed for health monitoring and should not replace
          professional medical advice. Always consult with healthcare
          professionals for medical decisions. Developed by PonceHealth’s
          healthcare innovation team.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
