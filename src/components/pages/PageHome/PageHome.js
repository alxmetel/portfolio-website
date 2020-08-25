import React, { useEffect, useState } from 'react';
import './PageHome.scss';
import SectionHeaderVideo from '../../pageSections/SectionHeaderVideo/SectionHeaderVideo';
import SectionAbout from '../../pageSections/SectionAbout/SectionAbout';
import SectionProjects from '../../pageSections/SectionProjects/SectionProjects';
import SectionSkills from '../../pageSections/SectionSkills/SectionSkills';

const PageHome = () => {

  const [projectsData, setProjectsData] = useState(null);
  const [projectsDataIsReady, setProjectsDataIsReady] = useState(false);

  const [technologiesData, setTechnologiesData] = useState(null);
  const [technologiesDataIsReady, setTechnologiesDataIsReady] = useState(false);

  useEffect(() => {
    fetchProjectsData();
    fetchTechnologiesData();
  }, []);

  function fetchProjectsData() {
    const url = 'https://portfolio-website-18313.firebaseio.com/projects.json';

    fetch(url).then(response => response.json()).then(data => {
      setProjectsData(data);
      setProjectsDataIsReady(true);
    })
  }

  function fetchTechnologiesData() {
    const url = 'https://portfolio-website-18313.firebaseio.com/technologies.json';

    fetch(url).then(response => response.json()).then(data => {
      setTechnologiesData(data);
      setTechnologiesDataIsReady(true);
    })
  }

  function renderProjectsSection() {
    if (projectsDataIsReady) {
      return <SectionProjects data={projectsData} />
    } else {
      return null;
    }
  }

  function renderSkillsSection() {
    if (technologiesDataIsReady) {
      return (
        <SectionSkills
          technologiesData={technologiesData}
          projectsData={projectsData}
        />
      )
    } else {
      return null;
    }
  }

  return (
    <div className="page-content page-home">
      <SectionHeaderVideo />
      <section className="main-content">
        <SectionAbout />
        {renderProjectsSection()}
        {renderSkillsSection()}
      </section>
    </div>
  )
}

export default PageHome;