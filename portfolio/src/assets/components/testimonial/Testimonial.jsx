import React, { useState, useEffect } from "react";
import "./testimonial.css";

const testimonials = [
  {
    name: "Nze Bright",
    role: "President Fellowship of Christian Students",
    message:
      "Working with Chiji was a pleasure. His blend of design talent and coding skills made the project seamless.",
  },
  {
    name: "Lawrence Amughe",
    role: "Freelancer",
    message:
      "Chijindu brought our ideas to life visually while ensuring the website performed flawlessly.",
  },
  {
    name: "Ralph Ndulaka",
    role: "Accountant 7up Lagos",
    message:
      "He turned my business vision into a stunning and functional website. Highly recommended!",
  },
  {
    name: "Chika Dibia",
    role: "Optometrist Trainee",
    message:
      "Chijindu is highly skilled and delivers outstanding results. A real professional in every sense.",
  },
  {
    name: "Matthew Oronna",
    role: "Nysc Member",
    message:
      "I’m extremely satisfied with the website and the level of creativity and professionalism shown. Highly recommend!",
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What People Say</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`testimonial-card ${idx === currentTestimonial ? "active" : ""}`}
          >
            <p className="testimonial-message">“{testimonial.message}”</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;