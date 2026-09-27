import { ArrowRight, Mail, MapPin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">
        <div className="contact-visual">
          <div className="contact-image-placeholder">
            <img
              src="/images/office-detail.png"
              alt="Calm interior detail of Dr. Maya Reynolds therapy office"
              className="contact-image"
            />
          </div>
        </div>

        <div className="contact-content">
          <p className="eyebrow">Take the first step</p>

          <h2 className="contact-title">
            You don&apos;t need to have everything figured out before reaching
            out.
          </h2>

          <p className="contact-text">
            If you&apos;re considering therapy and would like to learn more,
            you&apos;re welcome to get in touch. We can start with a
            conversation about what you&apos;re looking for and whether working
            together feels like the right fit.
          </p>

          <a className="contact-button" href="#contact">
            <span>Get in touch</span>
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>

          <div className="contact-details">
            <div className="contact-detail">
              <Mail size={18} strokeWidth={1.6} />

              <div>
                <span>Email</span>
                <p>Contact details available upon inquiry</p>
              </div>
            </div>

            <div className="contact-detail">
              <MapPin size={18} strokeWidth={1.6} />

              <div>
                <span>Location</span>
                <p>Santa Monica, California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}