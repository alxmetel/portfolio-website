import React, { useEffect } from 'react';
import './Home.scss';
import headerVideo from '../../assets/header-video-test.mp4';

const Home = () => {

  useEffect(() => {
    // projectsRef.once('value', snapshot => {
    //   console.log(snapshot);
    // })

    fetchProjectsData();
  })

  const fetchProjectsData = () => {
    const url = 'https://portfolio-website-18313.firebaseio.com/projects.json';

    fetch(url).then(response => response.json()).then(data => {
      console.log(data)
    })
  }


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