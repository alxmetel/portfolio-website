import React from 'react';
import './SectionHeaderVideo.scss';
import headerVideo from '../../../assets/header-video.mp4';
import headerVideoPoster from '../../../assets/header-video-poster.jpg';

const SectionHeaderVideo = () => {
  return (
    <section id="header-video" className="header-video-section">
      <video
        poster={headerVideoPoster}
        autoPlay
        playsInline
        muted
        loop
      >
        <source src={headerVideo} type="video/mp4"></source>
      </video>
      <div className="header-video-overlay"></div>
    </section>
  )
}

export default SectionHeaderVideo;