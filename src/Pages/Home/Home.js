import React from 'react';
import './Home.scss';
import headerVideo from '../../Assets/header-video-test.mp4';

const Home = () => {
  return (
    <div className="page-content page-home">
      <section className="header-video-section">
        <video autoPlay muted>
          <source src={headerVideo} type="video/mp4"></source>
        </video>
        <div className="header-video-overlay"></div>
      </section>
      <section className="main-content-section" style={{height: '3000px'}}>

      </section>
    </div>
  )
}

export default Home;