import React from "react";
import Reviews from "./Reviews";
import "bootstrap/dist/css/bootstrap.min.css";

const Frame10 = () => {
  
 

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      {/* Top Section with Stats */}
      <div className="container text-center py-5">
        <p className="text-secondary fw-bold mb-1">
          → Trusted Healthcare Innovation
        </p>
        <h1 className="fw-bold display-5">
          Built on <span className="text-primary">Trust & Expertise</span>
        </h1>
        <p
          className="text-secondary mt-3 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          Your health data is secure, and our team is committed to excellence.
          Join thousands who trust PonceHealth's innovative approach to
          healthcare technology.
        </p>

        <div className="row g-4 justify-content-center mt-4">
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow border-0 h-100">
              <div class="p-2 rounded-3 me-3 blue-gradient round-images">
                <img alt="Container" src="../icons/variant=9.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">50+</h3>
              <b><p className="text-dark mb-0">Expert Team</p></b>
              <p className="small text-muted mt-2">
                10+ passionate health and tech experts with a proven track
                record of success in shaping healthcare innovation across Africa
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow border-0 h-100">
              <div class="p-2 rounded-3 me-3 blue-gradient round-images">
                <img alt="Container" src="../icons/variant=10.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">15+</h3>
              <b><p className="text-dark mb-0">Strategic Partnerships</p></b>
              <p className="small text-muted mt-2">
                Active partnerships with SwiftAir Ambulance and local hospitals
                to expand access for healthcare providers
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow border-0 h-100">
              <div class="p-2 rounded-3 me-3 blue-gradient round-images">
                <img alt="Container" src="../icons/variant=11.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">100%</h3>
              <b><p className="text-dark mb-0">Regulatory Compliance</p></b>
              <p className="small text-muted mt-2">
                HIPAA compliance certification in progress, ensuring the highest
                data security and privacy protection standards
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow border-0 h-100">
              <div class="p-2 rounded-3 me-3 blue-gradient round-images">
                <img alt="Container" src="../icons/variant=12.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">1000+</h3>
              <b><p className="text-dark mb-0">Early Access Ready</p></b>
              <p className="small text-muted mt-2">
                Beta platform tested with 1000+ users, ready for widespread user
                adoption in Q4 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Slideshow Section */}
      <Reviews />
   

      {/* Strategic Partnerships Section */}
      

      {/* Data Security Banner */}
      <div className="container mt-5">
        <div
          className="p-5 rounded-3 text-white blue-gradient"
        >
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h4 className="fw-bold mb-2">Your Data Is Completely Secure</h4>
              <p className="small">
                UMRA employs military-grade encryption to protect your health
                data. We comply with international healthcare data protection
                standards including HIPAA and GDPR. Your personal data is never
                shared without your explicit consent. All data is stored in
                secure, geographically-distributed data centers with multiple
                backup systems.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row g-3 text-center">
                <div className="col-lg-12 f10gap-s justify-content-center">
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">256-bit</h5>
                    <p className="small mb-0">Encryption</p>
                  </div>
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">ISO 27001</h5>
                    <p className="small mb-0">Certified</p>
                  </div>
                </div>
                <div className="col-lg-12 f10gap-s justify-content-center">
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">99.9%</h5>
                    <p className="small mb-0">Uptime SLA</p>
                  </div>
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">24/7</h5>
                    <p className="small mb-0">Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame10;
