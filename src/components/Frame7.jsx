import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Frame7 = () => {
  return (
    <div id="features"
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="container text-center py-5">
        <div className="row center">
          <p className="text-primary fw-bold mb-1 how-hder px-1 py-1 rounded-5 col-lg-3 col-sm-12">
            <img alt="Container" src="../icons/variant=55.png" /> How UMRA Works
          </p>
        </div>
        <h1 className="fw-bold display-5">
          Simple, Smart, and Always{" "}
          <span className="text-primary">Connected</span>
        </h1>
        <p
          className="text-secondary mt-3 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Experience the future of health monitoring with AI-powered insights
          and real-time tracking
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Card 1: Track Your Vitals */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-lg border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary p-2 rounded-3 me-3">
                  <img alt="Container" src="../icons/variant=56.png" />
                </div>
                <h5 className="card-title fw-bold mb-0">Track Your Vitals</h5>
              </div>
              <p className="card-text text-secondary">
                Connect your BP & sugar stats to get real-time updates with
                intelligent insights.
              </p>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Card 2: Get Smart Advice */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-lg border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success p-2 rounded-3 me-3">
                  <img alt="Container" src="../icons/variant=57.png" />
                </div>
                <h5 className="card-title fw-bold mb-0">Get Smart Advice</h5>
              </div>
              <p className="card-text text-secondary">
                AI + doctors deliver personalized care recommendations based on
                your health data.
              </p>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Card 3: Medication Logs */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-lg border-0">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-purple p-2 rounded-3 me-3"
                  style={{ backgroundColor: "hsl(265.62deg 100% 65.1%)" }}
                >
                  <img alt="Container" src="../icons/variant=58.png" />
                </div>
                <h5 className="card-title fw-bold mb-0">Medication Logs</h5>
              </div>
              <p className="card-text text-secondary">
                Keep your treatment history and prescriptions organized with
                smart reminders.
              </p>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Card 4: Wearable Integration */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-lg border-0">
              <div className="d-flex align-items-center mb-3">
                   <span className="badge coming-soon">Coming Soon</span>
                <div className="bg-warning p-2 rounded-3 me-3 position-relative">
                  <img alt="Container" src="../icons/variant=59.png" />
               
                </div>
                <h5 className="card-title fw-bold mb-0">
                  Wearable Integration
                </h5>
              </div>
              <p className="card-text text-secondary">
                Sync your wearables for 360° health monitoring and continuous
                tracking.
              </p>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Card 5: Mobile Medical Bank */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-lg border-0 bg-info-subtle">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-info p-2 rounded-3 me-3">
                  <img alt="Container" src="../icons/variant=60.png" />
                </div>
                <h5 className="card-title fw-bold mb-0">Mobile Medical Bank</h5>
              </div>
              <p className="card-text text-secondary">
                Your medical records, always with you. Share with doctors
                instantly.
              </p>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-sucess"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <ul className="list-unstyled mt-3 bg-white py-2 px-2 rounded-2">
                <li className="d-flex align-items-center justify-content-between text-primary-emphasis mb-2">
                  <span>
                    {" "}
                    <span className="text-primary">● </span> Blood Test Results{" "}
                  </span>
                  <img
                    className="aline-self-end"
                    alt="Container"
                    src="../icons/variant=42.png"
                  />
                </li>
                <li className="d-flex align-items-center justify-content-between text-primary-emphasis mb-2">
                  <span>
                    {" "}
                    <span className="text-primary">● </span> Prescription
                    History{" "}
                  </span>
                  <img
                    className="aline-self-end"
                    alt="Container"
                    src="../icons/variant=42.png"
                  />
                </li>
                <li className="d-flex align-items-center justify-content-between text-primary-emphasis">
                  <span>
                    {" "}
                    <span className="text-primary">● </span> Doctor Notes{" "}
                  </span>
                  <img
                    className="aline-self-end"
                    alt="Container"
                    src="../icons/variant=42.png"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div
          className="p-5 rounded-3 shadow"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #E8F0FE 100%)",
          }}
        >
          <div className="text-center mb-5">
            <h2 className="fw-bold">Your Health Journey in 3 Simple Steps</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
              Get started with UMRA and transform how you monitor and manage
              your health
            </p>
          </div>
          <div className="row justify-content-center text-center">
            {/* Step 1 */}
            <div className="col-md-4 mb-4">
              <div className="d-inline-flex bg-primary rounded-circle p-2 mb-3">
                <img alt="Container" src="../icons/variant=56.png" />
              </div>
              <h5 className="fw-bold">Step 1</h5>
              <p className="fw-bold text-primary">Connect & Track</p>
              <p className="text-secondary">
                Log your vitals and connect your devices for comprehensive
                monitoring
              </p>
            </div>
            {/* Step 2 */}
            <div className="col-md-4 mb-4">
              <div className="d-inline-flex bg-success rounded-circle p-2 mb-3">
                <img alt="Container" src="../icons/variant=57.png" />
              </div>
              <h5 className="fw-bold">Step 2</h5>
              <p className="fw-bold text-success">Get AI insights</p>
              <p className="text-secondary">
                Receive personalized recommendations and smart health advice
              </p>
            </div>
            {/* Step 3 */}
            <div className="col-md-4 mb-4">
              <div className="d-inline-flex rounded-circle p-2 mb-3 step-three">
                <img alt="Container" src="../icons/variant=67.png" />
              </div>
              <h5 className="fw-bold">Step 3</h5>
              <p className="fw-bold text-purple">Stay Healthy</p>
              <p className="text-secondary">
                Make informed decisions and maintain optimal health daily
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-primary btn-lg rounded-pill"
              style={{
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
              }}
            >
              Start Your Journey →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
