import { ArrowRight } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-container">
        <div className="about-image-wrap">
          <div className="about-image-placeholder">
            <img
              src="/images/maya-reynolds.png"
              alt="Dr. Maya Reynolds, PsyD"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">About Dr. Maya Reynolds</p>

          <h2 className="about-title">
            A thoughtful, grounded approach for people who are used to holding
            it all together.
          </h2>

          <p className="about-lead">
            Dr. Maya Reynolds is a Licensed Clinical Psychologist in Santa
            Monica who works with adults navigating anxiety, panic, trauma,
            burnout, and the effects of prolonged stress.
          </p>

          <p className="about-text">
            Many of her clients are thoughtful, self-aware, and high-achieving,
            yet find themselves exhausted beneath the surface. They may be
            caught in cycles of overthinking, perfectionism, constant pressure,
            or feeling emotionally on edge.
          </p>

          <p className="about-text">
            Maya believes therapy works best when you feel respected,
            understood, and actively involved in the process. Sessions are
            collaborative and structured enough to feel supportive, while
            leaving room for reflection, depth, and meaningful change.
          </p>

          <a href="#approach" className="about-link">
            <span>Explore the therapeutic approach</span>
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}