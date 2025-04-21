import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappMobile.css";

const WhatsappMobile = () => {
  return (
    <a
      href="https://wa.me/+2347067583021" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappMobile;
