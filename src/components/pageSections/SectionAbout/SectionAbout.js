import React from 'react';
import './SectionAbout.scss';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

const SectionAbout = () => {
  return (
    <section id="about" className="page-section section-about">
      <div className="content-container">
        <SectionTitle content={siteData.home.about.title} />
        <div className="text-block">
          <p>{siteData.home.about.p1}</p>
          <p>{siteData.home.about.p2}</p>
        </div>
        <div className="photo-block"></div>
        <div className="overlay"></div>
      </div>
    </section>
  )
}

export default SectionAbout;