import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./intro.css";
import profilepic from "../../Images/chiji-main.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import cv from "../../Chijindu_Iruke_Resume.pdf";

function Intro() {
  const [text,] = useTypewriter({
    words: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
    loop: {},
    // typeSpeed: 20,
    onLoopDone: () => console.log("done from typewriter hook"),
  });
  return (
    <>
      <div className="main">
        <div className="img-small">
          <img src={profilepic} alt="Profile Picture" />
        </div>
        <div className="left-writeup">
          <h5>HELLO</h5>
          <h2>
            I'M <span>IRUKE</span>
          </h2>
          <h1>CHIJI</h1>
          <h3>
            I Am A {""}
            <br />
            <span>{text}</span>
            <span style={{ color: "red" }}>
              <Cursor />
            </span>
          </h3>
          <button className="cv_btn">
            <a href={cv}>Download CV</a>
          </button>
        </div>
        <div className="img">
          <img src={profilepic} alt="Profile Picture" />
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/iruke-chijindu-415431332/" // Replace with your actual LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn id="linked" />
          </a>
          <a
            href="tel:+2347067583021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneFlip id="phone" />
          </a>
          <a
            href="https://wa.me/+2347067583021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp id="whatsapp" />
          </a>
          <a
            href="https://github.com/Chiji5000" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub id="github" />
          </a>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default Intro;
