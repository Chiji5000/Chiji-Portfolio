import React from "react";
import chiji from "../../Images/chiji.jpg";
import cover from "../../Images/COVER.jpg";
import flower from "../../Images/flowers.png";
import blog from "../../Images/Blog.png";
import know_us from "../../Images/Get_To_Know_us.png";
import location from "../../Images/location.png";
import love from "../../Images/love.png";
import news_paper from "../../Images/NEWS_PAPER.jpg";
import shopping from "../../Images/shopping.png";
import sign_in from "../../Images/sign-In.png";
import transact from "../../Images/transact.png";
import minions from "../../Images/my-minions_drawings.png";

import "./project.css";

const Project = () => {
  return (
    <section id="projects">
      <h2 className="project-heading">
        <span>My</span> Projects
      </h2>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={chiji} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cover} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={flower} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={blog} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={know_us} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={location} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={love} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={news_paper} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={shopping} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={minions} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sign_in} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={transact} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </section>
  );
};

export default Project;
