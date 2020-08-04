import React from 'react';
import './SectionTitle.scss';

const SectionTitle = props => {
  const {content} = props;

  return (
    <div className="section-title">
      <h2>{content}</h2>
    </div>
  )
}

export default SectionTitle;