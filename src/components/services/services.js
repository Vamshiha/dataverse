import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const history = useHistory();

  const servicesData = {
    Consulting: {
      header: "Consulting Services",
      subHeading: "Expert Guidance",
      description: "Our consulting services provide expert guidance to help your business navigate challenges and seize opportunities.",
      imageUrl: "path-to-consulting-image.jpg"
    },
    "Staffing": {
      header: "Staffing",
      subHeading: "Efficient Solutions",
      description: "We offer efficient Staffing services to ensure a smooth and hassle-free experience for individuals and businesses.",
      imageUrl: "path-to-visa-image.jpg"
    },
    Training: {
      header: "Training Programs",
      subHeading: "Skill Development",
      description: "Our training programs focus on skill development and knowledge enhancement to empower individuals and teams.",
      imageUrl: "path-to-training-image.jpg"
    },
    "Legal Assistance": {
      header: "Legal Assistance",
      subHeading: "Legal Support",
      description: "We provide comprehensive legal assistance to address various legal issues and ensure compliance with regulations.",
      imageUrl: "path-to-legal-image.jpg"
    }
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleKnowMore = (service, event) => {
    event.stopPropagation();
    history.push(`/platforms/${service}`);
  };

  return (
    <>
      <div className="offerings">
        <span className="about-title">Our Services</span>
      </div>
      <div className="cardsp-container">
        {Object.keys(servicesData).map((service, index) => (
          <div 
            key={index}
            className="cardp"
            style={{ backgroundImage: `url(${servicesData[service].imageUrl})` }}
            onClick={() => handleCardClick(service)}
          >
            <div className="cardp-content-front">
              <h2>{servicesData[service].header}</h2>
            </div>
            <div className="cardp-content-back">
              <p>{servicesData[service].description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
