import React from "react";
import "./Preloader.css";
import sharingan from "../../Images/sharingan.png"; // Place your image here

const Preloader = () => {
  return (
    <div className="uchiha-preloader">
      <img src={sharingan} alt="Uchiha Sharingan" className="rotating-eye" />
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Preloader;
