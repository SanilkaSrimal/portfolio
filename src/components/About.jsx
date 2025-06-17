import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text-full">
            <h3>Hello! I'm Dilmi Jayanetthi</h3>
            <p>
              I'm a passionate and versatile Full Stack Developer with hands-on
              experience in building dynamic web applications using MERN Stack,
              Java Spring Boot, TypeScript, and more. Currently pursuing my BSc
              in Information Technology at SLIIT, I thrive in full project
              lifecycles—from designing responsive frontends to developing
              scalable backend APIs.
            </p>
            <p>
              I've worked with Thuli Software (Jaffna) and currently contribute
              to exciting projects like POS systems and EZCart at EONTECH Pvt
              Ltd (Galle). I bring strong skills in object-oriented programming,
              real-time systems, and project management, always aiming for
              creative and efficient solutions.
            </p>
            <p>
              <strong>Languages:</strong> English (Fluent), Sinhala (Fluent),
              Japanese (Good - JLPT N4 & N5)
            </p>
            <p>
              <strong>Soft Skills:</strong> Time Management, Creativity, Team
              Collaboration, Problem Solving, Communication
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>5+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>3</h4>
                <p>Languages Spoken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
