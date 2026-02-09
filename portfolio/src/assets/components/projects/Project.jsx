import React from "react";
import womanImg from "../../Images/woman.jpg";
import blog from "../../Images/blog.jpg";
import planets from "../../Images/planets.png";
import virus from "../../Images/virus.jpg";
import african from "../../Images/african.jpg";
import coin from "../../Images/coin.png";


import "./project.css";

const projects = [
  {
    title: "Chiji's Photo Album",
    description: "Come and see Chiji's Graphical Work.",
    url: "https://chijiphotoalbum.netlify.app/",
    image: womanImg,
  },
  {
    title: "My Blog",
    description: "Read what is going on daily and don't be afraid to comment.",
    url: "http://myblog.ct.ws/",
    image: blog,
  },
  {
    title: "Chiji's Planetary System",
    description: "Come and explore the solar system.",
    url: "https://chijiplanetarysystem.netlify.app/",
    image: planets,
  },
  {
    title: "Chiji's Malware Detection System",
    description: "Scan your files for any malware whats so ever.",
    url: "https://chijimalwaredetection.netlify.app/",
    image: virus,
  },
  {
    title: "Mama Maloura",
    description: "Buy all The African Made Fabrics You Want.",
    url: "https://malauraokos.free.nf/",
    image: african,
  },
  {
    title: "Heaven Master's",
    description: "Pay whatever you want to pay.",
    url: "https://heroic-cassata-fcaf7d.netlify.app/",
    image: coin,
  },
];

const Project = () => {
  return (
    <section id="projects" className="s-work section">
      <div className="row">
        <div className="column xl-12">
          <div className="section-header" data-num="02">
            <h2 className="text-display-title">My Projects.</h2>
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
                style={{ backgroundImage: `url(${p.image})` }}
              >
                <div className="overlay">
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Project;
