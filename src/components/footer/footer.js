import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="subscription">
        <h2 className="footer-title">Dataverse solutions</h2>
        <p className="footer-text">
          Join us to stay up to date on job notifications
        </p>
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe">Subscribe</button>
        <p className="footer-text">
          By subscribing you agree with our Privacy Policy and provide consent
          to receive updates from our company.
        </p>
      </div>
      <div className="follow-us">
        <h2 className="follow-us-header">Follow us on</h2>
        <div >
          <a href="https://twitter.com" className="social facebook">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              
            />
          </a>

          <p>Facebook</p>
        </div>

        <div>
          <a href="https://twitter.com" className="social instagram">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
             
            />
          </a>

          <p>Instagram</p>
        </div>
        <div>
          <a href="https://twitter.com" className="social twitter">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              
            />
          </a>

          <p>Twitter</p>
        </div>
        <div>
          <a href="https://twitter.com" className="social linkedin">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              
            />
          </a>

          <p>LindedIn</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
