import { ArrowRight } from "lucide-react";
import "./Expect.css";

const steps = [
  {
    number: "01",
    title: "Start with a conversation",
    text: "Begin by sharing what brings you to therapy, what has been difficult lately, and what you hope to understand or change.",
  },
  {
    number: "02",
    title: "Build a foundation",
    text: "Early sessions focus on understanding your experiences, creating a sense of safety, and identifying the areas that feel most important to work on.",
  },
  {
    number: "03",
    title: "Move at a thoughtful pace",
    text: "As therapy develops, the work may include practical tools, deeper reflection, trauma processing, or exploring patterns that continue to affect your life.",
  },
];

export default function Expect() {
  return (
    <section className="expect section" id="expect">
      <div className="container">
        <div className="expect-header">
          <p className="eyebrow">What to expect</p>

          <h2 className="expect-title">
            Therapy can be structured, collaborative, and paced around you.
          </h2>

          <p className="expect-intro">
            Starting therapy does not mean having everything figured out.
            Sessions are shaped around your needs and goals, with room for both
            practical tools and deeper reflection.
          </p>
        </div>

        <div className="expect-grid">
          {steps.map((step) => (
            <article className="expect-card" key={step.number}>
              <span className="expect-number">{step.number}</span>

              <div className="expect-card-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <ArrowRight
                className="expect-arrow"
                size={21}
                strokeWidth={1.6}
              />
            </article>
          ))}
        </div>

        <div className="expect-note">
          <span>Have questions before getting started?</span>

          <a href="#contact">
            Get in touch
            <ArrowRight size={17} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}