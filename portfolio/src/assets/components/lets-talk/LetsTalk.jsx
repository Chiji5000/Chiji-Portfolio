import React from "react";
import "./letstalk.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "emailjs-com";

const LetsTalk = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_d3e8bg9", "template_kmraxyz", form.current, "v9ySeHNIQhwbWLNHz",);
  };

  return (
    <section id="talk">
      <h2 className="talk_heading">
        <span>Let's</span> Talk
      </h2>
      <div className="me"></div>
      <div className="container pb-5 mt-3">
        <div className="row g-4">
          <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
            <div className="bg-light rounded p-5 form_cover">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Contact Me
              </p>
              <h1 className="mb-4">Have Any Query? Please Contact Me!</h1>
              <p className="mb-4">
                The contact form is for enquires. Don't be shy to contact me
                today, I am always active to pick you calls and reply your
                emails today.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        name="message"
                        id="message"
                      />
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-danger" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-md-6 touch">
            <h3>
              GET IN <br /> <span>TOUCH</span>
            </h3>
          </div>
          <div className="col-md-6">
            <div className="right">
              <div className="linkedin">
                <FaLinkedinIn id="linked" />
                <h5>Linked In</h5>
                <h6>Chijindu Iruke</h6>
              </div>
              <div className="phone_no">
                <FaPhoneFlip id="phone" />
                <h5>Call</h5>
                <h6>07067583021</h6>
              </div>
            </div>
            <div className="left">
              <div className="whatsapp">
                <FaWhatsapp id="whatsapp" />
                <h5>Whatsapp</h5>
                <h6>+2347067583021</h6>
              </div>
              <div className="twitter">
                <FaXTwitter id="twitter" />
                <h5>Twitter</h5>
                <h6>@Cj_Iruke</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
