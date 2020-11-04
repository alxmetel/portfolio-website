import React from 'react';
import { Link } from "react-router-dom";
import { formatDate } from '../../../utilities/utilityFunctions';

const ProjectCard = props => {
  const { path, image, title, description, date } = props;
  return (
    <Link to={path} className="project-card">
      <img src={image} className="project-image" alt={title} />
      <div className="project-text-container">
        <h3 className="project-title">{title}</h3>
        <div className="project-info-block">
          <div className="project-description">{description}</div>
          <div className="project-date-block">
            <div className="date">{formatDate(date)}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard;