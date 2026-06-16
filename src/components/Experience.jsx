import React from 'react';
import checkmarkIcon from '../assets/checkmark.png';
import arrowIcon from '../assets/arrow.png';

function Experience() {
  const languages = [
    { name: 'Java', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'C++', level: 'Basic' },
    { name: 'C', level: 'Basic' },
  ];

  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'React JS', level: 'Intermediate' },
    { name: 'UI/UX Designing', level: 'Basic' },
  ];

  const backendSkills = [
    { name: 'Node JS', level: 'Basic' },
    { name: 'Spring Boot', level: 'Basic' },
    { name: 'SQL', level: 'Basic' },
    { name: 'Git', level: 'Intermediate' },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Languages */}
          <div className="details-container">
            <h2 className="experience-sub-title">Languages</h2>
            <div className="article-container">
              {languages.map((skill, index) => (
                <article key={index}>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Frontend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((skill, index) => (
                <article key={index}>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backendSkills.map((skill, index) => (
                <article key={index}>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.hash = 'projects';
        }}
      />
    </section>
  );
}

export default Experience;
