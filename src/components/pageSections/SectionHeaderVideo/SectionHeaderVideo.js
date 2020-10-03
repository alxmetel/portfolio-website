import React from 'react';
import './SectionHeaderVideo.scss';
import headerVideo from '../../../assets/header-video-test.mp4';

const SectionHeaderVideo = () => {
  return (
    <section id="header-video" className="header-video-section">
      <video autoPlay playsInline muted>
        <source src={headerVideo} type="video/mp4"></source>
      </video>
      <div className="header-video-overlay"></div>
    </section>
  )
}

export default SectionHeaderVideo;