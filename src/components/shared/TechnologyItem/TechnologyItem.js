import React from 'react';
import './TechnologyItem.scss';

const TechnologyItem = props => {
  const { data } = props;

  return (
    <div className="tech-item">
      <img src={data.image} className="tech-image" alt={data.name} />
      <div className="tech-name">{data.name}</div>
    </div>
  )
}

export default TechnologyItem;