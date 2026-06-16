import React from 'react';
import aboutPic from '../assets/balaji.jpeg';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={aboutPic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Fresher <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Tech Information Technology</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a passionate and dedicated individual with a strong foundation in frontend development,
              eager to apply my knowledge in frontend development. Throughout my academic journey, I have honed
              my skills in HTML, CSS, JavaScript, and modern frameworks, enabling me to create responsive and
              user-friendly web applications. I am committed to continuous learning and ready to contribute to 
              innovative projects while growing in the field of web development.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.hash = 'experience';
        }}
      />
    </section>
  );
}

export default About;
