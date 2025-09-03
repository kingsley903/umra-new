import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Frame6 = () => {




  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 mb-4">
            <div className="row col-lg-12">
              {" "}
              <p className="text-danger text-center fw-bold mb-1 px-2 py-1 rounded-5 heath-b col-lg-5 col-sm-12">
                {" "}
                <img alt="Container" src="../icons/variant=50.png" /> Healthcare
                Challenge
              </p>
            </div>
            <h1 className="fw-bold display-5">
              Struggling to manage chronic conditions or monitor your{" "}
              <span className="text-danger">health consistently</span>?
            </h1>
            <p className="mt-4">
              <span className="fw-bold text-primary">UMRA</span> makes it easier
              with real-time, AI-powered health monitoring and advice right from
              your phone—no hospital queues, no guesswork, no delays.
            </p>

            <div className="d-flex small-gap my-4">
              <div
                className="p-4 col-lg-6 col-sm-6 rounded-3 shadow-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0E0E0",
                }}
              >
                <h2 className="fw-bold text-danger">285M</h2>
                <p className="text-secondary mb-0">
                  People worldwide with chronic conditions
                </p>
                <div className="progress mt-2" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div
                className="p-4 col-lg-6 col-sm-6 rounded-3 shadow-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0E0E0",
                }}
              >
                <h2 className="fw-bold text-danger">$4.1T</h2>
                <p className="text-secondary mb-0">
                  Annual healthcare costs globally
                </p>
                <div className="progress mt-2" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="p-4 rounded-3 text-white shadow"
              style={{
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <i
                  className="bi bi-lightning-charge-fill me-2"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <h3 className="fw-bold mb-0">The UMRA Solution</h3>
              </div>
              <p className="mb-3">
                Real-time health monitoring, AI-powered insights, and instant
                access to care—all in your pocket.
              </p>
              <ul className="list-unstyled d-flex flex-wrap text-white-50">
                <li className="me-3">● No queues</li>
                <li className="me-3">● 24/7 monitoring</li>
                <li>● AI-powered</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            {/* Inconsistent Monitoring Card */}
            <div
              className="card shadow-lg mb-4"
              style={{
                borderLeft: "4px solid #DC3545",
                borderColor: "#DC3545",
              }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-danger p-2 rounded-circle me-3">
                    <img alt="Container" src="../icons/variant=52.png" />
                  </div>
                  <h5 className="card-title mb-0 fw-bold">
                    Inconsistent Monitoring
                  </h5>
                </div>
                <p className="card-text text-secondary mt-3">
                  Missing vital health checkups leads to undetected issues
                </p>
                <p className="mb-0 text-danger fw-bold">
                  60%{" "}
                  <span className="text-secondary fw-normal">
                    miss regular checkups
                  </span>
                </p>
                <div className="progress mt-2" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            {/* Long Hospital Queues Card */}
            <div
              className="card shadow-lg mb-4"
              style={{ borderLeft: "4px solid #FFC107" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-warning p-2 rounded-circle me-3">
                    <img alt="Container" src="../icons/variant=53.png" />
                  </div>
                  <h5 className="card-title mb-0 fw-bold">
                    Long Hospital Queues
                  </h5>
                </div>
                <p className="card-text text-secondary mt-3">
                  Wasted time waiting for consultations and advice
                </p>
                <p className="mb-0 text-warning fw-bold">
                  3.2hrs{" "}
                  <span className="text-secondary fw-normal">
                    average wait time
                  </span>
                </p>
                <div className="progress mt-2" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            {/* Limited Access to Care Card */}
            <div
              className="card shadow-lg"
              style={{ borderLeft: "4px solid #FD7E14" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-warning p-2 rounded-circle me-3">
                    <img alt="Container" src="../icons/variant=54.png" />
                  </div>
                  <h5 className="card-title mb-0 fw-bold">
                    Limited Access to Care
                  </h5>
                </div>
                <p className="card-text text-secondary mt-3">
                  Difficulty getting timely medical guidance and support
                </p>
                <p className="mb-0 text-warning fw-bold">
                  45%{" "}
                  <span className="text-secondary fw-normal">
                    lack healthcare access
                  </span>
                </p>
                <div className="progress mt-2" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
