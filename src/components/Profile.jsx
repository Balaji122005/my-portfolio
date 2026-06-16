import React from 'react';
import profilePic from '../assets/Untitled design.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import cvPdf from '../assets/resume-example.pdf';

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Balaji profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Balaji S</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(cvPdf)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => {
              window.location.hash = 'contact';
            }}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => {
              window.location.href = 'https://www.linkedin.com/in/balaji-s-b87787291';
            }}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => {
              window.location.href = 'https://github.com/Balaji122005';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
