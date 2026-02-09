import "./letstalk.css";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneFlip,
  FaSquareGithub,
} from "react-icons/fa6";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import cv from "../../Chijindu_Iruke_Resume.pdf";
import emailjs from "emailjs-com";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const LetsTalk = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.length < 10) return "Message must be at least 10 characters";
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    // Hide success message when form is edited
    if (submitSuccess) setSubmitSuccess(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Get form values
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      setIsSubmitting(false);
      return;
    }

    // If validation passes, send email
    emailjs
      .sendForm(
        "service_d3e8bg9",
        "template_kmraxyz",
        form.current,
        "v9ySeHNIQhwbWLNHz"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          form.current.reset();
          setErrors({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Email sending failed:", error);
          // You might want to show an error message here
        }
      );
  };

  return (
    <section id="talk">
      <motion.h2
        className="talk_heading"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <span>Let's</span> Talk
      </motion.h2>
      <motion.div
        className="container pb-5 mt-3"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="contact-section" variants={fadeInUp}>
          <div className="contact-container">
            <p className="contact-label">Contact Me</p>
            <h1>Have Any Query? Please Contact Me!</h1>
            <p className="contact-description">
              The contact form is for enquires. Don&apos;t be shy to contact me
              today, I am always active to pick your calls and reply your emails
              today.
            </p>

            <motion.form
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
              variants={fadeInUp}
              noValidate
            >
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Leave a message here"
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>
                <div className="form-group full-width">
                  {submitSuccess && (
                    <div className="success-message">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
      {/* Footer Section */}
      <motion.footer
        id="footer"
        className="s-footer target-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div className="row" variants={fadeInUp}>
          <div className="column lg-12">
            <div className="section-header light-on-dark" data-num="03">
              <h2 className="text-display-title">Get In Touch.</h2>
            </div>
          </div>
        </motion.div>

        <div className="row s-footer__content">
          <motion.div
            className="column xl-6 md-12 s-footer__block s-footer__about"
            variants={fadeInUp}
          >
            <p className="attention-getter">
              Have any questions or need assistance? Don't hesitate to reach
              out! I'm always available to help and would love to hear from you.
            </p>
          </motion.div>

          <motion.div
            className="column xl-6 md-12 s-footer__block s-footer__site-links"
            variants={fadeInUp}
          >
            <div className="row">
              <div className="column xl-4 lg-5 md-6 tab-12 follow">
                <h5>Follow Me</h5>
                <ul className="link-list">
                  <li>
                    <a
                      href="https://linkedin.com/in/iruke-chijindu-415431332/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Cj_iruke"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Chiji5000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column xl-6 md-6 tab-12 contact">
                <h5>Contact Me</h5>
                <ul className="link-list">
                  <li>
                    <a href="mailto:cjiruke@gmail.com">cjiruke@gmail.com</a>
                  </li>
                  <li>
                    <a href="tel:+2347067583021">+2347067583021</a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <center>
          <motion.div className="row s-footer__buttons" variants={fadeInUp}>
            <div className="column xl-6 tab-12 message_me_container">
              <a
                href="https://wa.me/2347067583021"
                className="btn btn--primary btn--large u-fullwidth message_me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Me
              </a>
            </div>
            <div className="column xl-6 tab-12 cv_container">
              <a
                href={cv}
                className="btn btn--stroke btn--large u-fullwidth my_cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get My CV
              </a>
            </div>
          </motion.div>
        </center>

        <hr />

        <motion.div className="row s-footer__bottom" variants={fadeInUp}>
          <div className="column xl-6 lg-12 footer_icon">
            <ul className="s-footer__social social-list">
              <li>
                <a
                  href="https://wa.me/+2347067583021"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="social-list__icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/iruke-chijindu-415431332/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="social-list__icon" />
                </a>
              </li>
              <li>
                <a href="tel:+2347067583021">
                  <FaPhoneFlip className="social-list__icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Chiji5000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub className="social-list__icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="column xl-6 lg-12">
            <p className="ss-copyright">
              <span>© Copyright Chijindu 2025</span>
              <br />
              <span>
                Design by{" "}
                <a
                  href="https://chijinduiruke.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chijindu Iruke
                </a>
              </span>
            </p>
          </div>
        </motion.div>
      </motion.footer>{" "}
      <div className="footer_bubbles">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>{" "}
    </section>
  );
};

export default LetsTalk;
