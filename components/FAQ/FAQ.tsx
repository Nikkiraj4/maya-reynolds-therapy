import { Plus } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "Who does Dr. Maya Reynolds work with?",
    answer:
      "Maya works with adults who may be experiencing anxiety, panic, trauma, burnout, perfectionism, or the effects of prolonged stress. Many of her clients are professionals, entrepreneurs, creatives, and other high-achieving adults who feel overwhelmed or disconnected beneath the surface.",
  },
  {
    question: "What concerns can therapy help with?",
    answer:
      "Her work commonly focuses on anxiety, panic, trauma, burnout, perfectionism, high internal pressure, and patterns connected to difficult past experiences. Therapy can also support clients who are struggling with relationships, confidence, emotional regulation, or a sense of safety.",
  },
  {
    question: "Does Maya offer trauma therapy?",
    answer:
      "Yes. Trauma work is an important part of Maya's practice. She works with both single-incident trauma and more complex, long-standing patterns related to childhood, relationships, or chronic stress. This work is paced carefully with an emphasis on safety, stabilization, and regulation.",
  },
  {
    question: "What therapeutic approaches does she use?",
    answer:
      "Maya integrates evidence-based approaches including cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. The specific approach is shaped around each client's experiences, needs, and goals.",
  },
  {
    question: "Are telehealth sessions available?",
    answer:
      "Yes. Maya offers secure telehealth sessions for clients located in California, in addition to in-person therapy from her Santa Monica office.",
  },
  {
    question: "Where are in-person sessions held?",
    answer:
      "In-person therapy is offered from Maya's office in Santa Monica, California. The office is described as a quiet, private, comfortable, and uncluttered space with natural light.",
  },
];

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">Frequently asked questions</p>

            <h2 className="faq-title">
              A few answers before you take the next step.
            </h2>

            <p className="faq-intro">
              Starting therapy can come with questions. Here are a few things
              to know about Maya&apos;s work, approach, and availability.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>
                    <small>0{index + 1}</small>
                    {faq.question}
                  </span>

                  <Plus className="faq-icon" size={20} strokeWidth={1.5} />
                </summary>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}