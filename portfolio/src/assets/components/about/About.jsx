import React from "react";
import chiji_cap from "../../Images/chiji1.png";
import "./about.css";
import "./tooplate-style.css";
import cv from "../../Chijindu_Iruke_Resume.pdf";

const About = () => {
  return (
    <section id="about">
      <h2 className="about-heading">
        About <span>ME</span>
      </h2>

      <div className="about_content pb-2 pt-2">
        <div className="about_writeup">
          <h3>
            Who Am <span>I</span>...?
          </h3>
          <p>
            A Multifaceted Creative Force, I possess a unique blend of technical
            expertise and artistic vision, excelling as a versatile
            <span> Web Developer</span>, <span>Graphic Designer</span>, and
            <span> UI/UX Designer</span>. My passion for crafting seamless
            digital experiences drives me to create visually stunning and
            user-friendly interfaces that are both functional and aesthetically
            pleasing. <br />
            <p />
            <p>
              As a Web Developer, I am proficient in list key technologies, e.g.
              [<span> HTML</span>, <span> CSS</span>, <span>JavaScript</span>,
              <span> React</span>, <span>Node.js</span> ] and adept at building
              responsive and dynamic websites that deliver exceptional user
              experiences. <br />
              My graphic design skills allow me to translate concepts into
              visually compelling visuals, from logos and branding to
              illustrations and marketing materials. As a
              <span> UI/UX Designer</span>, I prioritize user needs and conduct
              thorough research to create intuitive and engaging interfaces.
              <br /> I am skilled in user journey mapping, wireframing,
              prototyping, and usability testing to ensure that every
              interaction is seamless and enjoyable.
            </p>
            I am a highly motivated and results-oriented professional with a
            strong work ethic and a commitment to delivering high-quality work
            that exceeds client expectations.
          </p>
          <button className="cv_btn">
            <a href={cv}>Download CV</a>
          </button>
        </div>
        <div className="about_img">
          <img src={chiji_cap} alt="me" />
        </div>
      </div>
      <div
        className="resume py-5 d-lg-flex justify-content-center align-items-center mt-4"
        id="resume"
      >
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4 experience">Experiences</h2>

              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2022</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>N.Y.S.C</span>
                      <small>Ogun State</small>
                    </h3>
                    <p>
                      I was deployed to serve my Nation Nigeria for one year. I
                      was deployed to Illoye, Ogun State.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Web Designer</span>
                      <small>Was Employed</small>
                    </h3>
                    <p>
                      I started working for a Tech Institute called CCT as a
                      Microsoft Office instructor and in the process I also
                      started learning Web and Graphics. In the Later years i
                      became a self-taught UI/UX designer.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2024</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Web Developer</span>
                      <small>Started Diversifying</small>
                    </h3>
                    <p>
                      I stepped up as the Web, Office and Graphics Instructor in
                      my place of work, then in my church I started learning the
                      in's and out of what it takes to become a good
                      Cinematographer / Videographer, and began my process as a
                      self-taught React and Node Developer.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2025</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Freelancer</span>
                    </h3>
                    <p>
                      Worked on some personal projects for self and others and
                      also began job hunting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2 education">Educations</h2>

              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>02 - 04</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Nursery:</span>
                      <small>S.N.A.P.S</small>
                    </h3>
                    <p>Staff Nursery and Primary School.</p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>05 - 09</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Primary:</span>
                      <small>S.N.A.P.S</small>
                    </h3>
                    <p>Staff Nursery and Primary School.</p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>10 - 15</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Secondary:</span>
                      <small>D.S.S</small>
                    </h3>
                    <p>Demonstration Secondary School.</p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>16 - 19</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Tertiary:</span>
                      <small>A.B.S.U</small>
                    </h3>
                    <p>Abia State University.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
