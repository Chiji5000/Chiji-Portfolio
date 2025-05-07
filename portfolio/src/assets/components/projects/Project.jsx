import React, { useState, useEffect } from "react";
import blog from "../../Images/real-logo.png";
import know_us from "../../Images/Get_To_Know_us.png";
import location from "../../Images/location.png";
import love from "../../Images/love.png";
import news_paper from "../../Images/NEWS_PAPER.jpg";
import shopping from "../../Images/shopping.png";
import sign_in from "../../Images/sign-In.png";
import transact from "../../Images/transact.png";
import minions from "../../Images/my-minions_drawings.png";
import big_boy from "../../Images/bigboy.PNG";
import buygiftcard from "../../Images/buygiftcard.PNG";
import forgotpassword from "../../Images/forgot_password.PNG";
import giftcard from "../../Images/giftcards.PNG";
import penguin from "../../Images/new_penguin.png";
import art from "../../Images/art.jpg";
import banner from "../../Images/Banner_example.jpg";
import coke from "../../Images/coke.png";
import fomer_portfolio from "../../Images/former_portfolio_design.png";
import indexpage from "../../Images/indexpage.png";
import NBC_Peacock from "../../Images/NBC_Peacock.png";
import profile from "../../Images/profile.png";

import "./project.css";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const images = [
    { src: shopping, title: "Shopping" },
    { src: love, title: "Love" },
    { src: location, title: "Location" },
    { src: minions, title: "Minions" },
    { src: blog, title: "Unox Transport Logo" },
    { src: know_us, title: "Get To Know Us" },
    { src: news_paper, title: "News Paper" },
    { src: sign_in, title: "Sign In" },
    { src: transact, title: "Transact" },
    { src: big_boy, title: "Big Boy" },
    { src: buygiftcard, title: "Buy and Sell Gift Card" },
    { src: forgotpassword, title: "Forgot Password" },
    { src: giftcard, title: "Gift Card" },
    { src: penguin, title: "Penguin" },
    { src: art, title: "Art" },
    { src: banner, title: "Banner" },
    { src: coke, title: "Coke" },
    { src: fomer_portfolio, title: "Former Portfolio Design" },
    { src: indexpage, title: "Index Page" },
    { src: NBC_Peacock, title: "NBC Peacock" },
    { src: profile, title: "Profile" },

  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") showPrevImage(e);
        if (e.key === "ArrowRight") showNextImage(e);
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const getVisibleImages = () => {
    if (showAll) return images;
    return windowWidth < 600 ? images.slice(0, 2) : images.slice(0, 4);
  };

  const handleImageClick = (imageSrc, imageTitle, index) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(imageTitle);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    setCurrentIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex].src);
    setSelectedTitle(images[newIndex].title);
    setCurrentIndex(newIndex);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex].src);
    setSelectedTitle(images[newIndex].title);
    setCurrentIndex(newIndex);
  };

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <section id="projects" className="s-work section">
      <div className="row">
        <div className="column xl-12">
          <div className="section-header" data-num="02">
            <h2 className="text-display-title">My Works.</h2>
          </div>
        </div>
      </div>

      <div className="gallery">
        {getVisibleImages().map((image, index) => (
          <div
            className="image-container"
            key={index}
            onClick={() => handleImageClick(image.src, image.title, index)}
          >
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="overlay">
              <div className="image-title">{image.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-container">
        <button className="show-more-button" onClick={toggleShowAll}>
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <span className="arrow left-arrow" onClick={showPrevImage}>
            &#10094;
          </span>
          <img
            className="modal-content"
            src={selectedImage}
            alt={selectedTitle}
          />
          <span className="arrow right-arrow" onClick={showNextImage}>
            &#10095;
          </span>
          <div className="caption">{selectedTitle}</div>
        </div>
      )}
    </section>
  );
};

export default Project;
