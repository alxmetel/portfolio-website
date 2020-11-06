import React from 'react';
import './SectionAbout.scss';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

const SectionAbout = () => {
  function renderBodyText() {
    return siteData.home.about.body_text.map((elem, i) => {
      return <p key={i}>{elem}</p>
    })
  }

  return (
    <section id="about" className="page-section section-about">
      <div className="content-container">
        <SectionTitle content={siteData.home.about.title} />
        <div className="text-block">
          {renderBodyText()}
        </div>
        <div className="photo-block"></div>
        <div className="overlay"></div>
      </div>
    </section>
  )
}

export default SectionAbout;