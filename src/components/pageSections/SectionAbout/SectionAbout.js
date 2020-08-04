import React from 'react';
import './SectionAbout.scss';
import data from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

const SectionAbout = () => {
  return (
    <section className="section-about">
      <div className="content-container">
        <SectionTitle content={data.siteData.home.about.title} />
        <div className="text-block">
          <p>{data.siteData.home.about.p1}</p>
          <p>{data.siteData.home.about.p2}</p>
        </div>
        <div className="photo-block"></div>
        <div className="overlay"></div>
      </div>
    </section>
  )
}

export default SectionAbout;