import React, { useState, useEffect } from 'react';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeImg, setActiveImg] = useState('');

  useEffect(() => {
    if (project) {
      setActiveImg(project.img);
    }
  }, [project]);

  const images = project.images || [project.img];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <span className="modal-tagline">{project.tagline}</span>
        </div>
        <div className="modal-body">
          {/* Main Display Image */}
          <img src={activeImg} alt={project.title} className="modal-project-img" />

          {/* Thumbnails Gallery */}
          {images.length > 1 && (
            <div className="modal-gallery-thumbnails">
              {images.map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl}
                  alt={`Screenshot ${idx + 1}`}
                  className={`modal-gallery-thumbnail ${activeImg === imgUrl ? 'active' : ''}`}
                  onClick={() => setActiveImg(imgUrl)}
                />
              ))}
            </div>
          )}
          
          <div className="modal-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="modal-section">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Tech Stack</h3>
            <div className="tech-tags">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.open(project.github, '_blank')}
          >
            Github
          </button>
          {project.demo && (
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open(project.demo, '_blank')}
            >
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
