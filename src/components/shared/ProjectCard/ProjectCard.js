import React from 'react';

const ProjectCard = props => {
  const { image, title, description } = props;

  return (
    <a href="https://google.com" className="project-card">
      <img src={image} className="project-image" alt={title} />
      <div className="project-text-container">
        <h3 className="project-title">{title}</h3>
        <div className="project-description">{description}</div>
      </div>
    </a>
  )
}

export default ProjectCard;