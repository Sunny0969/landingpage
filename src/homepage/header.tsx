import React, { useState, useEffect } from "react";
import "./header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        {/* Logo */}
        <a href="/" className="header__logo" aria-label="Home">
          <img 
            src="/Images/logokarvaan1.webp" 
            alt="Karvaan Logo" 
            className="logo__image"
            width="150"
            height="40"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main Navigation">
          <a href="/" className="nav__link">Home</a>
          <a href="https://www.karvaantours.com/blog" target="_blank" className="nav__link">Blog</a>
          <a href="https://www.karvaantours.com/about-us" target="_blank" className="nav__link">About</a>
          <a href="/contact" className="nav__link">Contact</a>
        </nav>

        {/* CTA Button */}
        <a href="/contact" className="header__cta">
          Get a Quote
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Hamburger for mobile */}
        <button
          className={`header__hamburger ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`header__drawer ${menuOpen ? "header__drawer--open" : ""}`}>
        <nav className="drawer__nav" aria-label="Mobile Navigation">
          <a href="/" className="drawer__link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="https://www.karvaantours.com/blog" target="_blank" className="drawer__link" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="https://www.karvaantours.com/about-us" target="_blank" className="drawer__link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/contact" className="drawer__link" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/contact" className="drawer__cta" onClick={() => setMenuOpen(false)}>Get a Quote</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;