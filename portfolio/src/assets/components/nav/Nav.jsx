import React from "react";
import logo from "../../../assets/Images/logo.png";
import dark from "../DarkMode/Moon.svg";
import { FaUserAlt } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import "./loader"
// import DarkMode from "../DarkMode/DarkMode";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <div className="big-nav">
        <img src={logo} alt="site's logo" />
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a className="talk" href="#talk">
              Lets Talk
            </a>
          </li>
        </ul>
        {/* <div className="form-check form-switch mx-4">
          <input
            className="form-check-input p-2"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick =  "myFunction()"
          />
        </div> */}
      </div>

      <div className="small-nav">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <FaHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <FaUserAlt />
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <VscFolderActive />
        </a>
        <a
          href="#talk"
          onClick={() => setActiveNav("#talk")}
          className={activeNav === "#talk" ? "active" : ""}
        >
          <RiContactsBook3Fill />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
