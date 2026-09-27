import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import "./OurOffice.css";

const details = [
  {
    icon: Sparkles,
    title: "Calm & grounding",
    text: "A quiet environment with natural light and a comfortable, uncluttered feel.",
  },
  {
    icon: ShieldCheck,
    title: "Private & supportive",
    text: "A space designed to help you feel comfortable, respected, and at ease.",
  },
  {
    icon: MapPin,
    title: "Santa Monica",
    text: "In-person therapy from the Santa Monica office, with telehealth available across California.",
  },
];

export default function OurOffice() {
  return (
    <section className="office section" id="office">
      <div className="container">
        <div className="office-header">
          <div>
            <p className="eyebrow">Our office</p>

            <h2 className="office-title">
              A calm place to slow down and feel at ease.
            </h2>
          </div>

          <p className="office-intro">
            The therapy space is intentionally quiet, private, and grounding.
            Natural light and a comfortable, uncluttered environment create
            room to pause and focus on what matters.
          </p>
        </div>

        <div className="office-gallery">
          <div className="office-gallery-main">
            <div className="office-image-placeholder office-image-large">
              <Image
                src="/images/office-main.png"
                alt="Dr. Maya Reynolds therapy office in Santa Monica"
                fill
                sizes="(max-width: 900px) 100vw, 65vw"
                className="office-image"
              />
            </div>
          </div>

          <div className="office-gallery-side">
            <div className="office-image-placeholder office-image-small">
              <Image
                src="/images/office-detail.png"
                alt="Detail of Dr. Maya Reynolds therapy office"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
                className="office-image"
              />
            </div>

            <div className="office-location-card">
              <MapPin size={20} strokeWidth={1.6} />

              <div>
                <span>Located in</span>
                <strong>Santa Monica, California</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="office-details">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <article className="office-detail" key={detail.title}>
                <div className="office-detail-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="office-footer">
          <p>
            Prefer to meet from home? Secure telehealth sessions are available
            for clients located in California.
          </p>

          <a href="#contact">
            Get in touch
            <ArrowRight size={17} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}