import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./intro.css";
import profilepic from "../../Images/new_bg.png";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneFlip,
  FaSquareGithub,
} from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

function Intro() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
    loop: {},
    onLoopDone: () => console.log("done from typewriter hook"),
  });

  return (
    <section id="intro" className="s-intro target-section">
      <div className="intro-container">
        {/* Left Content */}
        <div className="intro-left">
          <div className="intro-content">
            <p className="intro-subtitle">WELCOME TO MY WORLD</p>
            <h1 className="intro-title">
              Hi, I'm <span className="intro-name">Iruke Chijindu</span>
            </h1>
            <div className="intro-profession">
              <span className="intro-text">I'm a</span>
              <span className="intro-job">
                {text}
                <span style={{ color: "#e91e63" }}>
                  <Cursor />
                </span>
              </span>
            </div>

            <p className="intro-description">
              I use animation as a third dimension by which to simplify
              experiences and guide through each and every interaction. I'm not
              adding motion just to spruce things up, but doing it in ways that.
            </p>

            {/* Find With Me Section */}
            <div className="social-section">
              <h3 className="social-title">FIND WITH ME</h3>
              <ul className="social-list">
                <li>
                  <a
                    href="https://wa.me/2347031234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="social-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/iruke-chijindu-415431332/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="social-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2347067583021"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPhoneFlip className="social-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Chiji5000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareGithub className="social-icon" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Best Skill On Section */}
            <div className="skills-section">
              
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="intro-right">
          <div className="profile-wrapper">
            <img src={profilepic} alt="Profile" className="profile-img" />
            <div className="demos-text">CHIJI</div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="scroll-down-btn">
          <a href="#about" className="smoothscroll">
            <IoMdArrowDropdown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
