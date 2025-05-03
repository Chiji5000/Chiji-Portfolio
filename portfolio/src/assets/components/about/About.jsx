import { motion } from "framer-motion";
import "./about.css";
import "./tooplate-style.css";
import ToolsUsed from "../toolsused/ToolsUsed";

const About = () => {
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
              `A Multifaceted Creative Force, I possess a unique blend of
              technical expertise and artistic vision, excelling as a versatile
              Web Developer, Graphic Designer, and UI/UX Designer. My passion
              for crafting seamless digital experiences drives me to create
              visually stunning and user-friendly interfaces that are both
              functional and aesthetically pleasing.`,

              `As a Web Developer, I am proficient in key technologies, e.g.
              [HTML, CSS, JavaScript, React, Node.js] and adept at building
              responsive and dynamic websites that deliver exceptional user
              experiences. My graphic design skills allow me to translate
              concepts into visually compelling visuals, from logos and branding
              to illustrations and marketing materials. As a UI/UX Designer, I
              prioritize user needs and conduct thorough research to create
              intuitive and engaging interfaces. I am skilled in user journey
              mapping, wireframing, prototyping, and usability testing to ensure
              that every interaction is seamless and enjoyable.`,

              `I am a highly motivated and results-oriented professional with a
              strong work ethic and a commitment to delivering high-quality work
              that exceeds client expectations.`,
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
                      year: "2022",
                      title: "N.Y.S.C",
                      place: "Ogun State",
                      desc: "I was deployed to serve my Nation Nigeria for one year. I was deployed to Illoye, Ogun State.",
                    },
                    {
                      year: "2023",
                      title: "Web Designer",
                      place: "Was Employed",
                      desc: "Worked for CCT as a Microsoft Office instructor and started learning Web and Graphics. Later became a self-taught UI/UX designer.",
                    },
                    {
                      year: "2024",
                      title: "Web Developer",
                      place: "Started Diversifying",
                      desc: "Taught Web, Office, and Graphics. Learned Cinematography/Videography. Self-taught React and Node Developer.",
                    },
                    {
                      year: "2025",
                      title: "Freelancer",
                      place: "",
                      desc: "Worked on personal projects and began job hunting.",
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
                      year: "02 - 04",
                      level: "Nursery:",
                      school: "S.N.A.P.S",
                      desc: "Staff Nursery and Primary School.",
                    },
                    {
                      year: "05 - 09",
                      level: "Primary:",
                      school: "S.N.A.P.S",
                      desc: "Staff Nursery and Primary School.",
                    },
                    {
                      year: "10 - 15",
                      level: "Secondary:",
                      school: "D.S.S",
                      desc: "Demonstration Secondary School.",
                    },
                    {
                      year: "16 - 19",
                      level: "Tertiary:",
                      school: "A.B.S.U",
                      desc: "Abia State University.",
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
        <ToolsUsed className="view" />
        <hr />
      </section>
    </>
  );
};

export default About;
