import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./titlebar.css";

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setSubOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropbtn">
        {label}{" "}
        <span className="arrow">
          {isOpen ? (
            <svg
              width="10"
              height="15"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10.5L10 0.5L20 10.5L18.225 12.275L10 4.05L1.775 12.275L0 10.5Z"
                fill="#1C1B1F"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="15"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2.5L10 12.5L0 2.5L1.775 0.725L10 8.95L18.225 0.725L20 2.5Z"
                fill="#1C1B1F"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            option === "Get recruiter's attention" ? (
              <div
                className="dropdown-submenu"
                onMouseEnter={() => setSubOpen(true)}
                onMouseLeave={() => setSubOpen(false)}
              >
                <Link to={`/platforms/${option.replace(/\s+/g, '')}`}>
                  {option}
                  {isSubOpen && (
                    <svg
                    width="10"
                    height="15"
                    viewBox="0 0 20 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ paddingLeft: 6, paddingTop: 12 }}
                  >
                    <path
                      d="M20 2.5L10 12.5L0 2.5L1.775 0.725L10 8.95L18.225 0.725L20 2.5Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                  
                  )}
                </Link>
                {isSubOpen && (
                  <div className="dropdown-content-submenu">
                    <Link to={`/platforms/ResumeDisplay`}>
                      Resume display
                    </Link>
                    <Link to={`/platforms/JobSearchBooster`}>
                      Job search booster
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link key={index} to={`/platforms/${option.replace(/\s+/g, '')}`}>
                {option}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

const Title = () => {
  return (
    <div className="title-container">
      <div className="logo-section">
        <div onClick={() => (window.location.href = "/")} className="logo">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 861.92 276.95"
            width="28%"
            height="25%"
          >
            <defs>
              <style>
                {`
                  .cls-1 {
                    fill: #2596be;
                  }

                  .cls-1, .cls-2 {
                    stroke-width: 0px;
                  }

                  .cls-3 {
                    opacity: .99;
                  }

                  .cls-2 {
                    fill: #F1F6FA;
                  }
                `}
              </style>
            </defs>
            <g className="cls-3">
              <g>
                <path
                  className="cls-2"
                  d="M0,276.95C0,184.63,0,92.32,0,0c287.31,0,574.61,0,861.92,0,0,92.32,0,184.63,0,276.95-287.3,0-574.61,0-861.92,0ZM314.2,200.71c-15.04,16.44-27.85,30.44-40.65,44.45,21.28-12.21,40-26.81,59.13-40.85,6.73-4.94,14.06-10.97,21.83-12.27,50.59-8.44,101.44-15.39,152.09-23.51,31.54-5.06,64.01-6.43,93.68-19.77,5.5-2.47,13.29-9.56,12.73-13.48-.83-5.8-7.21-12.63-13-15.5-8.84-4.38-19.06-6.32-28.9-8.29-32.44-6.49-64.97-12.52-99.3-19.08,10.11-11.96,19.55-22.2,27.77-33.33,3.07-4.16,6.11-13.42,4.29-15.1-4.51-4.15-13.31-8.81-17.79-6.97-19.72,8.07-39.43,16.97-57.26,28.46-8.71,5.61-17.39,16.47-6.66,29.56,1.45,1.77-.55,8.42-2.94,10.91-13.17,13.7-26.41,27.42-40.7,39.93-12.01,10.52-25.13,18.39-42.28,21.19-31.23,5.1-61.99,13.26-92.73,20.97-10.28,2.58-19.93,7.68-29.86,11.62.36,1.72.71,3.44,1.07,5.16,32.29,13.5,64.41-6.85,99.49-4.09Z"
                />
                <path
                  className="cls-1"
                  d="M314.2,200.71c-35.08-2.76-67.2,17.59-99.49,4.09-.36-1.72-.71-3.44-1.07-5.16,9.94-3.95,19.58-9.04,29.86-11.62,30.75-7.71,61.5-15.87,92.73-20.97,17.14-2.8,30.26-10.67,42.28-21.19,14.28-12.51,27.53-26.23,40.7-39.93,2.39-2.49,4.4-9.14,2.94-10.91-10.73-13.09-2.05-23.95,6.66-29.56,17.83-11.49,37.54-20.38,57.26-28.46,4.48-1.83,13.28,2.82,17.79,6.97,1.83,1.68-1.21,10.94-4.29,15.1-8.22,11.13-17.65,21.37-27.77,33.33,34.33,6.56,66.86,12.59,99.3,19.08,9.84,1.97,20.07,3.91,28.9,8.29,5.78,2.87,12.16,9.69,13,15.5.56,3.92-7.22,11.01-12.73,13.48-29.67,13.34-62.13,14.71-93.68,19.77-50.65,8.12-101.5,15.06-152.09,23.51-7.77,1.3-15.11,7.33-21.83,12.27-19.13,14.04-37.85,28.64-59.13,40.85,12.81-14,25.62-28.01,40.65-44.45ZM484.15,153.46c-3.87.89-7.69,2.18-11.61,2.61-24.94,2.69-49.98,4.66-74.82,8.06-7.74,1.06-14.97,5.8-22.44,8.86.63,1.65,1.26,3.31,1.88,4.96,35.45-6.42,70.91-12.83,106.32-19.47.42-.08.27-3.19.39-4.89,2.88-.75,5.71-1.83,8.63-2.2,22.68-2.91,45.42-5.35,68.03-8.68,8.85-1.31,17.41-4.55,30.08-7.99-6.09-2.95-7.69-4.22-9.46-4.5-33.21-5.24-66.39-10.72-99.69-15.31-11.23-1.55-25.25-5.01-33.68-.16-17.6,10.13-32.32,25.21-48.78,38.72,30.17,0,57.66,0,85.15,0ZM340.15,179.05c-.45-1.87-.91-3.74-1.36-5.62-30.2,7.18-60.4,14.36-90.59,21.54.33,1.36.66,2.71.99,4.07,30.28-6.85,62.66-5.05,90.97-19.99Z"
                />
                <path
                  className="cls-2"
                  d="M484.15,153.46h-85.16c16.47-13.51,31.19-28.59,48.78-38.72,8.43-4.85,22.45-1.39,33.68.16,33.3,4.59,66.48,10.07,99.69,15.31,1.77.28,3.37,1.56,9.46,4.5-12.67,3.44-21.23,6.69-30.08,7.99-22.61,3.34-45.36,5.77-68.03,8.68-2.92.38-5.76,1.45-8.63,2.2l.29-.13Z"
                />
                <path
                  className="cls-2"
                  d="M483.86,153.59c-.12,1.7.03,4.81-.39,4.89-35.41,6.64-70.87,13.05-106.32,19.47-.63-1.65-1.26-3.31-1.88-4.96,7.47-3.06,14.7-7.8,22.44-8.86,24.84-3.4,49.88-5.37,74.82-8.06,3.92-.42,7.75-1.72,11.62-2.61,0,0-.29.13-.29.13Z"
                />
                <path
                  className="cls-2"
                  d="M340.15,179.05c-28.31,14.94-60.69,13.14-90.97,19.99-.33-1.36-.66-2.71-.99-4.07,30.2-7.18,60.4-14.36,90.59-21.54.45,1.87.91,3.74,1.36,5.62Z"
                />
              </g>
            </g>
          </svg>
          <span className="website-title">Dataverse Solutions</span>
        </div>
      </div>
      <div className="main-header">
        <nav>
          <Dropdown
            label="Services"
            options={[
              "Consulting",
              "Staffing",
              "Training",
              "Get recruiter's attention",
            ]}
          />
          <Dropdown
            label="Platforms"
            options={[
              "Data Analytics",
              "Business Analysis Tools",
              "Cloud Services",
              "Business Services",
              "Network Engineering",
              "Cybersecurity",
            ]}
          />
          <Dropdown
            label="Company"
            options={["About Us", "Our Team", "Careers"]}
          />
          <Dropdown
            label="Resources"
            options={["Blog", "Documentation", "Support"]}
          />
        </nav>
      </div>
    </div>
  );
};

export default Title;
