import React, { useState, useEffect, useRef } from "react";
import logo from "../../../assets/Images/logo.png";
import "./nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  const handleToggleClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Section observer for auto-active menu
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Adjust based on when you want the change to trigger
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`s-header ${isMenuOpen ? "menu-is-open" : ""} ${
        isSticky ? "sticky scrolling" : ""
      }`}
    >
      <div className="row s-header__inner">
        <div className="s-header__block">
          <div className="s-header__logo">
            <a className="logo" href="/">
              <img src={logo} alt="site's logo" />
            </a>
          </div>

          <a
            className={`s-header__menu-toggle ${
              isMenuOpen ? "is-clicked" : ""
            }`}
            href="#0"
            onClick={handleToggleClick}
          >
            <span>Menu</span>
          </a>
        </div>

        <nav className="s-header__nav">
          <ul className="s-header__menu-links">
            <li className={activeSection === "intro" ? "current" : ""}>
              <a className="smoothscroll" href="#intro">
                Intro
              </a>
            </li>
            <li className={activeSection === "about" ? "current" : ""}>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li className={activeSection === "projects" ? "current" : ""}>
              <a className="smoothscroll" href="#projects">
                Works
              </a>
            </li>
            <li className={activeSection === "talk" ? "current" : ""}>
              <a className="smoothscroll" href="#talk">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
