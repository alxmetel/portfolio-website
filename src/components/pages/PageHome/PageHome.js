import React, { useState, useEffect } from 'react';
import './PageHome.scss';
import SectionHeaderVideo from '../../pageSections/SectionHeaderVideo/SectionHeaderVideo';
import SectionAbout from '../../pageSections/SectionAbout/SectionAbout';
import SectionProjects from '../../pageSections/SectionProjects/SectionProjects';

const PageHome = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjectsData();
  }, []);

  function fetchProjectsData() {
    const url = 'https://portfolio-website-18313.firebaseio.com/projects.json';

    fetch(url).then(response => response.json()).then(data => {
      setProjects(data);
    })
  }

  return (
    <div className="page-content page-home">
      <SectionHeaderVideo />
      <section className="main-content">
        <SectionAbout />
        <SectionProjects data={projects} />
      </section>
    </div>
  )
}

export default PageHome;