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

            {[
              ` As a Web Developer, I am proficient in core technologies including HTML, CSS, JavaScript, React, and Node.js, with experience building responsive, dynamic websites that deliver exceptional user experiences.`,

              `My background in graphic design enables me to translate ideas into impactful visual solutions—ranging from branding, logos, and illustrations to marketing and promotional materials. As a UI/UX Designer, I focus on user-centered design principles, conducting research, user journey mapping, wireframing, prototyping, and usability testing to ensure intuitive and engaging digital products.`,

              ` In addition to my creative and technical skill set, I have professional experience working with a scaffolding company, where I supported both technical and operational activities. Scaffolding companies specialize in providing safe temporary structures for construction, maintenance, and industrial projects, enabling workers to access elevated or hard-to-reach areas securely.`,

              `I am a highly motivated, results-oriented professional with a strong work ethic and a commitment to delivering high-quality solutions that consistently exceed client and organizational expectations.`,
            ].map((text, i) => (
              <motion.p
                className="attention-getter"
                key={i}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        <div
          className="resume py-5 d-lg-flex justify-content-center align-items-center mt-4"
          id="resume"
        >
          <div className="container d-flex justify-content-center">
            <div className="row">
              {/* Experience Section */}
              <div className="col-lg-6 col-12">
                <motion.h2
                  className="mb-4 experience"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                >
                  Experiences
                </motion.h2>

                <div className="timeline">
                  {[
                    {
                      year: "2025",
                      title: "Creative & Technical Support Specialist",
                      place: "Rated Cranes and Scaffold",
                      desc: "I was responsible for creating visually engaging videos, flyers, and billboards, managing technical tasks, and supporting the team during on-site inspections.",
                    },
                    {
                      year: "2024",
                      title: "Web Developer",
                      place: "Started Diversifying",
                      desc: "Taught Web, Office, and Graphics at CCT. Learned Cinematography/Videography at WLBC. Self-taught React and Node Developer.",
                    },
                    {
                      year: "2023",
                      title: "Web Designer",
                      place: "Was Employed",
                      desc: "Worked for CCT as a Microsoft Office instructor and started learning Web and Graphics. Later became a self-taught UI/UX designer.",
                    },
                    {
                      year: "2022",
                      title: "N.Y.S.C",
                      place: "Ogun State",
                      desc: "I was deployed to serve my Nation Nigeria for one year. I was deployed to Illoye, Ogun State.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      className="timeline-wrapper"
                      key={i}
                      custom={i + 1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUpVariant}
                    >
                      <div className="timeline-yr">
                        <span>{item.year}</span>
                      </div>
                      <div className="timeline-info">
                        <h3>
                          <span>{item.title}</span>
                          {item.place && <small>{item.place}</small>}
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="col-lg-6 col-12">
                <motion.h2
                  className="mb-4 mobile-mt-2 education"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                >
                  Educations
                </motion.h2>

                <div className="timeline">
                  {[
                    {
                      year: "16 - 19",
                      level: "Tertiary:",
                      school: "A.B.S.U",
                      desc: "Abia State University.",
                    },
                    {
                      year: "10 - 15",
                      level: "Secondary:",
                      school: "D.S.S",
                      desc: "Demonstration Secondary School.",
                    },
                    {
                      year: "05 - 09",
                      level: "Primary:",
                      school: "S.N.A.P.S",
                      desc: "Staff Nursery and Primary School.",
                    },
                    {
                      year: "02 - 04",
                      level: "Nursery:",
                      school: "S.N.A.P.S",
                      desc: "Staff Nursery and Primary School.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      className="timeline-wrapper"
                      key={i}
                      custom={i + 1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUpVariant}
                    >
                      <div className="timeline-yr">
                        <span>{item.year}</span>
                      </div>
                      <div className="timeline-info">
                        <h3>
                          <span>{item.level}</span>
                          <small>{item.school}</small>
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
                      certificates.length
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
