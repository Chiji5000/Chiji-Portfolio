import React from "react";

import "./project.css";

const projects = [
  {
    title: "Chiji's Photo Album",
    description: "Come and see Chiji's Graphical Work.",
    url: "https://chijiphotoalbum.netlify.app/",
  },
  {
    title: "My Blog",
    description: "Read what is going on daily and don't be afraid to comment.",
    url: "http://myblog.ct.ws/",
  },
  {
    title: "Chiji's Planetary System",
    description: "Come and explore the solar system.",
    url: "https://chijiplanetarysystem.netlify.app/",
  },
  {
    title: "Chiji's Malware Detection System",
    description: "Scan your files for any malware whats so ever.",
    url: "https://chijimalwaredetection.netlify.app//",
  },
  {
    title: "Mama Maloura",
    description: "Buy all The African Made Fabrics You Want.",
    url: "https://malauraokos.free.nf/",
  },
  {
    title: "Heaven Master's",
    description: "Pay whatever you want to pay.",
    url: "https://heroic-cassata-fcaf7d.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="s-work section">
      <div className="row">
        <div className="column xl-12">
          <div className="section-header" data-num="02">
            <h2 className="text-display-title">My Works.</h2>
          </div>
        </div>
      </div>

      <div className="external-links-section">
        <h3 className="links-heading">Visit My Designed Sites</h3>
        <div className="cards-container">
          {projects.map((p, i) => (
            <div
              className="link-card"
              key={i}
              onClick={() => window.open(p.url, "_blank")}
            >
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
