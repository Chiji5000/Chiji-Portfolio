// ToolsUsed.jsx
import React from "react";
import { motion } from "framer-motion";
import "./toolsused.css";

// Import logos
import powerpoint from "../../logos/powerpoint.png";
import access from "../../logos/access.PNG";
import excel from "../../logos/excel.png";
import word from "../../logos/word.png";
import corel from "../../logos/corel.png";
import photoshop from "../../logos/photoshop.png";
import illustrator from "../../logos/illustrator.png";
import indsign from "../../logos/indesign.png";
import php from "../../logos/php.png";
import node from "../../logos/node.png";
import react from "../../logos/react.png";
import html from "../../logos/html.png";
import css from "../../logos/css.png";
import js from "../../logos/js.png";
import bootstrap from "../../logos/bootstrap.png";
import mysql from "../../logos/mysql.png";

// Array of logos and alt text
const tools = [
  { src: react, alt: "React" },
  { src: node, alt: "Node.js" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: js, alt: "JavaScript" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: mysql, alt: "MySQL" },
  { src: php, alt: "PHP" },
  { src: photoshop, alt: "Photoshop" },
  { src: illustrator, alt: "Illustrator" },
  { src: indsign, alt: "InDesign" },
  { src: corel, alt: "CorelDraw" },
  { src: word, alt: "Microsoft Word" },
  { src: excel, alt: "Microsoft Excel" },
  { src: powerpoint, alt: "Microsoft PowerPoint" },
  { src: access, alt: "Microsoft Access" },
];

const ToolsUsed = () => {
  return (
    <section id="tools">
      <h2 className="tools-heading">
        Softwares and Languages <span>I Use</span>
      </h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="tool-icon"
            animate={{ y: ["0%", "-20%"] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
              delay: index * 0.1, // 👈 makes each bounce start at different times
            }}
          >
            <img src={tool.src} alt={tool.alt} />
            <p>{tool.alt}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsUsed;
