import React from 'react';
import { Link } from "react-router-dom";

const ProjectCard = props => {
  const { path, image, title, description } = props;

  return (
    <Link to={path} className="project-card">
      <img src={image} className="project-image" alt={title} />
      <div className="project-text-container">
        <h3 className="project-title">{title}</h3>
        <div className="project-description">{description}</div>
      </div>
    </Link>
  )
}

export default ProjectCard;