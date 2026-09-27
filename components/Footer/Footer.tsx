import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              Dr. Maya Reynolds, PsyD
            </a>

            <p className="footer-description">
              A warm, grounded space for adults navigating anxiety, stress,
              burnout, and difficult life experiences.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-heading">Explore</span>

              <a href="#about">About</a>
              <a href="#approach">Approach</a>
              <a href="#support">Areas of Support</a>
              <a href="#expect">What to Expect</a>
            </div>

            <div className="footer-column">
              <span className="footer-heading">Connect</span>

              <a href="#contact">
                Get in touch
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </a>

              <span>Santa Monica, California</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights
            reserved.
          </p>

          <a href="#contact">Begin a conversation</a>
        </div>
      </div>
    </footer>
  );
}