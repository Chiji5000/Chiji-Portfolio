import React, { useState, useEffect } from "react";
import blog from "../../Images/real-logo.png";
import know_us from "../../Images/Get_To_Know_us.png";
import location from "../../Images/location.png";
import love from "../../Images/love.png";
import news_paper from "../../Images/NEWS_PAPER.jpg";
import shopping from "../../Images/shopping.png";
import sign_in from "../../Images/sign-In.png";
import transact from "../../Images/transact.png";
import Inside1 from "../../Images/ISNigeria.jpg";
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
import Inside2 from "../../Images/ISNigeria2.jpg";
import bakery from "../../Images/bakery.jpg";
import palmtree from "../../Images/Backup_of_PALM TREE.jpg";
import cheatah from "../../Images/cheatah.jpg";
import coverpage1 from "../../Images/COVERPAGE1.jpg";
import fashion from "../../Images/FASHION.jpg";
import Afro_Future from "../../Images/Afro-Future.jpg";
import jeep from "../../Images/JEEP.jpg";
import Lana from "../../Images/Lana.jpg";
import NewsPaper from "../../Images/Newpaper.jpg"
import Abra from "../../Images/Abra.jpg";

import "./project.css";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const images = [
    { src: Afro_Future, title: "Afro Future" },
    { src: jeep, title: "Jeep" },
    { src: Lana, title: "Lana" },
    { src: shopping, title: "Shopping" },
    { src: love, title: "Love" },
    { src: Inside1, title: "Inside Success1" },
    { src: fashion, title: "Fashion" },
    { src: Inside2, title: "Inside Success2" },
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
    { src: bakery, title: "Bakery" },
    { src: palmtree, title: "Palm Tree" },
    { src: cheatah, title: "Cheetah" },
    { src: coverpage1, title: "Cover Page 1" },
    { src: Abra, title: "Abra" },
    { src: NewsPaper, title: "News Paper2" },
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

      <div className="external-links-section">
        <h3 className="links-heading">Visit My Designed Sites</h3>
        <div className="cards-container">
          <div
            className="link-card"
            onClick={() => window.open("http://myblog.ct.ws/", "_blank")}
          >
            <h4>My Blog</h4>
            <p>Read what is going on daily and don't be afraid to comment.</p>
          </div>

          <div
            className="link-card"
            onClick={() =>
              window.open("https://malauraokos.free.nf/", "_blank")
            }
          >
            <h4>Mama Maloura</h4>
            <p>Buy all The African Made Fabrics You Want.</p>
          </div>

          <div
            className="link-card"
            onClick={() =>
              window.open(
                "https://heroic-cassata-fcaf7d.netlify.app/",
                "_blank"
              )
            }
          >
            <h4>Heaven Master's</h4>
            <p>Heaven asHeaven Master'sPay whatever you want to pay.</p>
          </div>
        </div>
      </div>

      <div className="gallery">
        <center>
          <h1 id="design">My Graphical Design</h1>
        </center>
        <br />
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
