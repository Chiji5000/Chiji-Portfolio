import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./intro.css";
import profilepic from "../../Images/new_bg.png";
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function Intro() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
    loop: {},
    onLoopDone: () => console.log("done from typewriter hook"),
  });

  // 3D tilt effect for profile image - REMOVED
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const rotateX = useTransform(y, [-100, 100], [15, -15]);
  // const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <section id="intro" className="s-intro target-section">
      <div className="animated-bg"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <Snowfall />
      <div className="row s-intro__content width-sixteen-col">
        <motion.div
          className="column lg-12 s-intro__content-inner grid-block grid-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div className="s-intro__content-text" variants={fadeIn}>
            <motion.div
              className="s-intro__content-pretitle text-pretitle"
              variants={fadeIn}
              custom={0.3}
            >
              Hello, I'm
            </motion.div>
            <motion.h1
              className="s-intro__content-title"
              variants={fadeIn}
              custom={0.5}
            >
              <span className="gradient-text">Iruke Chijindu</span>
              <br />
              <span className="profession-text">I Am a</span>
              <br />
              <span className="typewriter-fade">{text}</span>
              <span style={{ color: "#4a90e2" }}>
                <Cursor />
              </span>
            </motion.h1>
            <motion.div
              className="s-intro__content-btns"
              variants={fadeIn}
              custom={0.8}
            >
              <motion.a
                className="smoothscroll btn more_about_me"
                href="#about"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                More About Me
              </motion.a>
              <motion.a
                className="smoothscroll btn btn--stroke get_in_touch"
                href="#footer"
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.ul
          className="s-intro__social social-list"
          initial="hidden"
          animate="visible"
          variants={slideInRight}
        >
          {[FaWhatsapp, FaLinkedinIn, FaPhoneFlip, FaSquareGithub].map(
            (Icon, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
                custom={1 + index * 0.2}
                whileHover={{
                  scale: 1.2,
                  rotateY: 15,
                  z: 50,
                }}
                whileTap={{ scale: 0.9 }}
                style={{ transformStyle: "preserve-3d" }}
              >
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
        <div className="profile-glow"></div>
        <img src={profilepic} alt="Profile" />
      </motion.div>

      <motion.div
        className="s-intro__btn-download"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          className="btn btn--stroke get_my_cv"
          href={cv}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          GET MY CV
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Intro;
