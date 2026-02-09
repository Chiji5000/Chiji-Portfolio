import { useState } from "react";
import { motion } from "framer-motion";
import "./about.css";
import "./tooplate-style.css";
import ToolsUsed from "../toolsused/ToolsUsed";

import CSS from "../../Images/CSS.png";
import HTML from "../../Images/HTML.png";
import PHP from "../../Images/PHP.png";
import Javascript_Intro from "../../Images/Introduction_Javascript.png";
import Javascript_Inter from "../../Images/javascript_intermediate.png";
import Jquery from "../../Images/JQuery.jpg";
import ResponsiveDesign from "../../Images/Responsive_design.png";

const certificates = [
  {
    id: 1,
    src: HTML,
    title: "HTML Mastery Certificate",
  },
  {
    id: 2,
    src: CSS,
    title: "CSS Mastery Certificate",
  },
  {
    id: 3,
    src: Javascript_Intro,
    title: "Introduction to JavaScript Certificate",
  },
  {
    id: 4,
    src: Javascript_Inter,
    title: "JavaScript Intermediate Certificate",
  },
  {
    id: 5,
    src: Jquery,
    title: "JQuery Mastery Certificate",
  },
  {
    id: 6,
    src: PHP,
    title: "PHP Mastery Certificate",
  },
  {
    id: 7,
    src: ResponsiveDesign,
    title: "Responsive Design Mastery Certificate",
  },
];
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <>
      <section id="about" className="s-about target-section">
        <div className="row s-about__content">
          <div className="column xl-12">
            <motion.div
              className="section-header"
              data-num="01"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-display-title">About Me.</h2>
            </motion.div>
            {/* What I Do Section */}
            <div className="what-i-do">
              <div className="what-i-do-container">
                {/* FRONTEND */}
                <motion.div
                  className="what-card gradient-border"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="what-icon frontend-icon">
                    {/* Inline SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 5h16v10H4zM9 19h6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3>Frontend</h3>
                  <p>
                    I create responsive and reusable frontend components using
                    React, with a focus on clean design, performance, and
                    accessibility. I’m skilled in HTML, CSS, JavaScript,
                    Bootstrap, Tailwind CSS, jQuery, and Figma
                  </p>
                </motion.div>

                <div className="what-line"></div>

                {/* BACKEND */}
                <motion.div
                  className="what-card gradient-border"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="what-icon backend-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 7h18M3 12h18M3 17h18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h3>Backend</h3>
                  <p>
                    I design and build secure, scalable REST APIs using PHP,
                    Node.js, MySQL, and MongoDB to power robust applications.
                  </p>
                </motion.div>

                <div className="what-line"></div>

                {/* DEVOPS */}
                <motion.div
                  className="what-card gradient-border"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="what-icon devops-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3v18M3 12h18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h3>DevOps</h3>
                  <p>
                    I manage deployments, cloud infrastructure, and application
                    stability with a focus on security and performance.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* Certificates Section */}
        <div className="certificate-section">
          <motion.h2
            className="mb-4 cert-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            My Certificates
          </motion.h2>

          <div className="certificate-grid">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                className="certificate-card"
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                onClick={() => setCurrentIndex(i)}
              >
                <img src={cert.src} alt={cert.title} />
                <p className="cert-caption">{cert.title}</p>
              </motion.div>
            ))}
          </div>

          {currentIndex !== null && (
            <div className="modal">
              <span className="close" onClick={() => setCurrentIndex(null)}>
                &times;
              </span>

              <span
                className="nav-arrow left"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(
                    (currentIndex - 1 + certificates.length) %
                      certificates.length,
                  );
                }}
              >
                &#10094;
              </span>

              <img
                className="modal-content"
                src={certificates[currentIndex].src}
                alt={certificates[currentIndex].title}
              />

              <span
                className="nav-arrow right"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((currentIndex + 1) % certificates.length);
                }}
              >
                &#10095;
              </span>
            </div>
          )}
        </div>

        <ToolsUsed className="view" />
        <hr />
      </section>
    </>
  );
};

export default About;
