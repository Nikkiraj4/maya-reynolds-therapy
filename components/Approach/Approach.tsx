import { ArrowUpRight } from "lucide-react";
import "./Approach.css";

const approaches = [
  {
    number: "01",
    title: "Cognitive Behavioral Therapy",
    description:
      "CBT can help you understand the connection between thoughts, emotions, and patterns of behavior, while developing practical ways to respond differently.",
  },
  {
    number: "02",
    title: "EMDR & Trauma-Focused Work",
    description:
      "For clients working through trauma, EMDR and trauma-focused approaches can support processing difficult experiences at a pace that prioritizes safety, stabilization, and regulation.",
  },
  {
    number: "03",
    title: "Mindfulness & Body-Oriented Practices",
    description:
      "Mindfulness and body-oriented techniques can help bring greater awareness to physical and emotional responses, creating more space to slow down and reconnect with yourself.",
  },
];

export default function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="container">
        <div className="approach-header">
          <div>
            <p className="eyebrow">The therapeutic approach</p>

            <h2 className="approach-title">
              Evidence-based therapy, grounded in the whole person.
            </h2>
          </div>

          <p className="approach-intro">
            Maya draws from several evidence-based approaches and shapes the
            work around your experiences, needs, and goals. Sessions are
            structured enough to feel supportive while leaving room for
            reflection and depth.
          </p>
        </div>

        <div className="approach-list">
          {approaches.map((item) => (
            <article className="approach-item" key={item.number}>
              <span className="approach-number">{item.number}</span>

              <div className="approach-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <ArrowUpRight
                className="approach-icon"
                size={24}
                strokeWidth={1.5}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}