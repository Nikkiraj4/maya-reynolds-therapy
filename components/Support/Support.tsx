import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "./Support.css";

const services = [
  {
    number: "01",
    title: "Anxiety & Panic Therapy",
    text: "Support for persistent worry, overthinking, panic, bodily tension, and the feeling of always being on edge. Together, we work toward greater steadiness and a clearer understanding of what is happening beneath the anxiety.",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    text: "A carefully paced space to process difficult experiences, including single-incident trauma and longer-standing patterns shaped by childhood, relationships, or chronic stress.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    text: "For professionals, entrepreneurs, and creatives who feel exhausted from years of pushing through. Therapy can help loosen cycles of perfectionism and pressure while creating more sustainable ways of living and working.",
  },
];

export default function Support() {
  return (
    <section className="support section" id="support">
      <div className="container support-container">
        <div className="support-image-wrap">
          <div className="support-image-placeholder">
            <Image
              src="/images/office-detail.png"
              alt="Calm interior detail of Dr. Maya Reynolds therapy office"
              fill
              sizes="(max-width: 1000px) 100vw, 40vw"
              className="support-image"
              priority
            />
          </div>
        </div>

        <div className="support-content">
          <p className="eyebrow">Areas of support</p>

          <h2 className="support-title">
            Support for the parts of life that feel difficult to carry alone.
          </h2>

          <p className="support-intro">
            Maya works with adults who may look capable on the outside while
            feeling overwhelmed, exhausted, or disconnected underneath. Therapy
            is a space to slow down, understand what is happening, and develop
            more sustainable ways of moving forward.
          </p>

          <div className="support-list">
            {services.map((service) => (
              <article className="support-item" key={service.number}>
                <span className="support-number">{service.number}</span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <ArrowRight
                  className="support-arrow"
                  size={19}
                  strokeWidth={1.7}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}