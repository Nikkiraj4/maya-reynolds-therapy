import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="eyebrow">
            Licensed Clinical Psychologist · Santa Monica
          </p>

          <h1 className="hero-title">
            Therapy for anxiety, trauma, and burnout in Santa Monica.
          </h1>

          <p className="hero-description">
            Dr. Maya Reynolds offers warm, grounded therapy for adults
            navigating anxiety, panic, burnout, and the lingering effects of
            difficult experiences.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              <span>Begin a conversation</span>
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>

            <a href="#about" className="secondary-button">
              Learn more about Maya
            </a>
          </div>

          <div className="hero-note">
            <span className="hero-note-line" />
            <p>
              In-person therapy in Santa Monica · Secure telehealth across
              California
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <img
              src="/images/maya-reynolds.png"
              alt="Dr. Maya Reynolds, PsyD"
            />
          </div>
        </div>
      </div>
    </section>
  );
}