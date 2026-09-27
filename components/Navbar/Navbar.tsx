"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-name">Dr. Maya Reynolds</span>
          <span className="brand-title">Clinical Psychologist, PsyD</span>
        </a>

        <nav className={`desktop-nav ${isOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#approach" onClick={closeMenu}>
            Approach
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Get in Touch
          </a>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

