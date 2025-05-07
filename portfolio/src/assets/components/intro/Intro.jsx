import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./intro.css";
import profilepic from "../../Images/chiji-main.png";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneFlip,
  FaSquareGithub,
} from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import Snowfall from "../snowfall/Snowfall";
import cv from "../../Chijindu_Iruke_Resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

function Intro() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
    loop: {},
    onLoopDone: () => console.log("done from typewriter hook"),
  });

  return (
    <section id="intro" className="s-intro target-section">
      <div className="row s-intro__content width-sixteen-col">
        <motion.div
          className="column lg-12 s-intro__content-inner grid-block grid-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Snowfall />
          <motion.div className="s-intro__content-text" variants={fadeIn}>
            <motion.div
              className="s-intro__content-pretitle text-pretitle"
              variants={fadeIn}
              custom={0.3}
            >
              Hello
            </motion.div>
            <motion.h1
              className="s-intro__content-title"
              variants={fadeIn}
              custom={0.5}
            >
              I'm Iruke Chijindu <br />
              I Am a<br />
              <span className="typewriter-fade">{text}</span>
              <span style={{ color: "red" }}>
                <Cursor />
              </span>
            </motion.h1>
            <motion.div
              className="s-intro__content-btns"
              variants={fadeIn}
              custom={0.8}
            >
              <a
                className="smoothscroll btn more_abot_me"
                href="#about"
                style={{
                  backgroundColor: "black",
                  height: "100px",
                  width: "100px",
                  padding: "20px",
                }}
              >
                More About Me
              </a>
              <a
                className="smoothscroll btn btn--stroke get_in_touch"
                href="#footer"
                style={{
                  height: "100px",
                  width: "100px",
                  padding: "20px",
                  border: "2px solid black",
                  color: "black",
                }}
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.ul
          className="s-intro__social social-list"
          initial="hidden"
          animate="visible"
        >
          {[FaWhatsapp, FaLinkedinIn, FaPhoneFlip, FaSquareGithub].map(
            (Icon, index) => (
              <motion.li key={index} variants={fadeIn} custom={1 + index * 0.2}>
                <a
                  href={
                    index === 0
                      ? "https://wa.me/2347031234567"
                      : index === 1
                      ? "https://www.linkedin.com/in/iruke-chijindu-415431332/"
                      : index === 2
                      ? "tel:+2347067583021"
                      : "https://github.com/Chiji5000"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="social-list__icon" />
                  <span className="u-screen-reader-text">Social</span>
                </a>
              </motion.li>
            )
          )}
        </motion.ul>

        <motion.div
          className="s-intro__scroll-down"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" className="smoothscroll">
            <div className="scroll-icon">
              <IoMdArrowDropdown />
            </div>
            <span className="scroll-text u-screen-reader-text">
              Scroll Down
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="s-intro__content-media"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={profilepic} alt="Profile" />
      </motion.div>

      <motion.div
        className="s-intro__btn-download"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a
          className="btn btn--stroke get_my_cv"
          href={cv}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "black",
            padding: "20px",
            border: "2px solid white",
          }}
        >
          GET MY CV
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
