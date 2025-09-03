import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Frame9 = () => {
  return (
    <div id="about"
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      {/* Main Hero Section */}
      <div className="container text-center py-5">
        <div className="row center bg-sucess-subtle">
          <p className="text-success fw-bold mb-1 healthcare py-1 px-2 rounded-4 col-lg-4 col-sm-12">
            <img src="../icons/variant=55.png" /> Healthcare Innovation Leaders
          </p>
        </div>
        <h1 className="fw-bold display-5">
          Revolutionizing Healthcare{" "}
          <span className="text-purple">Across Africa</span>
        </h1>
        <p
          className="text-secondary mt-3 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          PonceHealth is pioneering the future of healthcare technology. UMRA
          represents our commitment to making advanced health monitoring
          accessible to everyone, everywhere.
        </p>
      </div>

      {/* Two-Column Section */}
      <div className="container my-5">
        <div className="row g-4">
          {/* The Healthcare Revolution */}
          <div className="col-lg-6 mb-4">
            <h4 className="fw-bold mb-3">The Healthcare Revolution</h4>
            <p className="text-secondary">
              The global telemedicine market is projected to reach{" "}
              <span className="fw-bold text-primary">$285 billion by 2028</span>
              , with Africa representing the fastest growing segment.
              PonceHealth, through UMRA, is poised to capture this massive
              opportunity while serving communities that need it most.
            </p>
            <div className="row g-3 mt-4">
              <div className="col-md-6">
                <div className="p-3 bg-light rounded-3 shadow-lg">
                  <h3 className="fw-bold text-primary mb-1">$285B</h3>
                  <p className="mb-0 text-secondary">Global market by 2028</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded-3 shadow-lg">
                  <h3 className="fw-bold text-success mb-1">35%</h3>
                  <p className="mb-0 text-secondary">
                    Africa growth rate (CAGR)
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded-3 shadow-lg">
                  <h3 className="fw-bold text-purple mb-1">400M+</h3>
                  <p className="mb-0 text-secondary">Target users in Africa</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded-3 shadow-lg">
                  <h3 className="fw-bold text-warning mb-1">15x</h3>
                  <p className="mb-0 text-secondary">Market growth potential</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Opportunity */}
          <div className="col-lg-6 mb-4">
            <h4 className="fw-bold mb-3">
              {" "}
              <img src="../icons/variant=1.png" />
              Investment Opportunity
            </h4>
            <ul className="list-group rounded-3 shadow-lg border-0">
              <li className="list-group-item d-flex justify-content-between align-items-center py-3 bg-light fw-bold">
                Total Addressable Market{" "}
                <span className="badge text-bg-light fw-bold text-dark">
                  $45B
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                African Healthcare Tech{" "}
                <span className="badge text-bg-light fw-bold text-dark">
                  $12B
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                Chronic Disease Management{" "}
                <span className="badge text-bg-light fw-bold text-dark">
                  $8.5B
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-3 bg-primary-subtle text-primary fw-bold">
                UMRA Target Market{" "}
                <span className="badge text-bg-primary-subtle text-primary fw-bold">
                  $2.1B
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* About PonceHealth Section */}
      <div className="container my-5">
        <div
          className="p-5 rounded-3 shadow"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #E8F0FE 100%)",
          }}
        >
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h4 className="fw-bold">About PonceHealth</h4>
              <p className="text-secondary">
                Founded on the principle that healthcare technology should serve
                humanity first, PonceHealth develops innovative solutions that
                bridge the gap between advanced medical technology and
                communities.
              </p>
              <p className="text-secondary">
                UMRA is our flagship project—a comprehensive health monitoring
                platform designed specifically for the African market,
                addressing unique challenges while leveraging cutting-edge AI
                and mobile technology.
              </p>
              <div
                className="p-3 rounded-3 mt-4"
                style={{
                  backgroundColor: "#e9f1ff",
                  borderLeft: "3px solid #6A11CB",
                }}
              >
                <h6 className="fw-bold">Our Mission</h6>
                <p className="mb-0 text-secondary small">
                  To democratize access to advanced healthcare monitoring and
                  make it simple, efficient, and effective for everyone in
                  Africa and beyond.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div
                    className="p-4 rounded-3 text-center"
                    style={{ backgroundColor: "hsl(219.28deg 98.24% 55.49%)" }}
                  >
                    <img src="../icons/variant=2.png" />
                    <h3 className="fw-bold mt-2 text-white">500%</h3>
                    <p className="text-white mb-0">YoY Growth Rate</p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="p-4 rounded-3 text-center"
                    style={{ backgroundColor: "hsl(142.67deg 98.9% 35.69%)" }}
                  >
                    <img src="../icons/variant=3.png" />
                    <h3 className="fw-bold mt-2 text-white">50+</h3>
                    <p className="text-white mb-0">Expert Team Members</p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="p-4 rounded-3 text-center"
                    style={{ backgroundColor: "hsl(274.12deg 98.14% 57.84%)" }}
                  >
                    <img src="../icons/variant=4.png" />
                    <h3 className="fw-bold mt-2 text-white">15</h3>
                    <p className="text-white mb-0">Countries Served</p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="p-4 rounded-3 text-center"
                    style={{ backgroundColor: "hsl(20.64deg 100% 49.02%)" }}
                  >
                    <img src="../icons/variant=5.png" />
                    <h3 className="fw-bold mt-2 text-white">3</h3>
                    <p className="text-white mb-0">Patents Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Invest Banner */}
      <div className="container mt-5">
        <div
          className="p-5 rounded-3 text-white text-center"
          style={{
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          <h2 className="fw-bold">Ready to Invest in the Future?</h2>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            Join PonceHealth in revolutionizing healthcare across Africa and
            beyond. UMRA is just the beginning of our comprehensive health
            technology ecosystem.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center mt-4">
            <button className="btn btn-light rounded-pill px-4 me-md-3 mb-2 mb-md-0 fw-bold">
              <a
                href="mailto:info@umraponcehealth.com"
                className="text-dark text-decoration-none text-center"
              >
                Request Investment Deck
              </a>
            </button>
            <button className="btn btn-outline-light rounded-pill px-4 fw-bold">
              <a
                href="mailto:info@umraponcehealth.com"
                className="text-white text-decoration-none schedule"
              >
                <span>
                  <img src="../icons/variant=7.png" /> Schedule Investment
                  Meeting <img src="../icons/variant=8.png" />
                </span>
              </a>
            </button>
          </div>
          <p className="text-white-50 small mt-3">
            Series A: $1M target • 12-month ROI prospectus available • Q4 2024
            expansion planned
          </p>
          <p className="text-white-50 small mt-3">
            UMRA has been accepted into the Acceleration program of{" "}
            <a href="https://www.fastercapital.com" className="text-white">FasterCapital</a> and is
            seeking a capital of $200k.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame9;
