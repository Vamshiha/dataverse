import React from 'react';
import './platformPage.css';

const descriptions = {
  'Consulting': 'Our consulting services are designed to provide you with expert advice and guidance, helping you to navigate complex business challenges and make informed decisions.',
  'Staffing': 'We offer comprehensive Staffing services, guiding you through every step of the application process to ensure a smooth and stress-free experience.',
  'Training': 'Our training programs are designed to equip you with the skills and knowledge needed to excel in your chosen field.',
  'LegalAssistance': 'Our legal assistance services provide you with expert legal advice and representation, helping you to navigate complex legal issues with confidence.',
  'DataAnalytics': 'Our data analytics platform provides powerful tools for analyzing and interpreting data, helping you to make data-driven decisions and gain valuable insights.',
  'BusinessAnalysisTools': 'Our business analysis tools are designed to help you understand and improve your business processes, identify opportunities for growth, and make strategic decisions.',
  'CloudDataServices': 'Our Cloud Services provide secure and scalable solutions for storing, managing, and analyzing your data in the cloud.',
  'BusinessIntelligenceSoftware': 'Our Business Services provides powerful tools for analyzing business data and generating actionable insights, helping you to make informed business decisions.',
  'NetworkInfrastructure':'Our Network Engineering solutions provide a reliable and secure foundation for your IT systems, ensuring optimal performance and availability.',
  'CybersecuritySolutions':'Our Cybersecurity provide comprehensive protection for your IT systems, safeguarding your data and digital assets against cyber threats.',
};

const formatPlatformName = (name) => {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
};

const PlatformPage = ({ match }) => {
  const rawPlatformName = match.params.platformName;
  const formattedPlatformName = formatPlatformName(rawPlatformName);
  const description = descriptions[rawPlatformName];

  console.log(rawPlatformName, 'platform');
  
  return (
    <div className="platform-container">
      <div className="platform-header">
      </div>
      <div className="platform-content">
        <h1 className="footer-title">{formattedPlatformName}</h1>
        <p>{description}</p>
        <button className="apply-button">Learn More</button>
      </div>
      
    </div>
  );
};

export default PlatformPage;
