import React from 'react';
import './PageHome.scss';
import siteData from '../../../siteData.json';
import SectionHeaderVideo from '../../pageSections/SectionHeaderVideo/SectionHeaderVideo';
import SectionAbout from '../../pageSections/SectionAbout/SectionAbout';
import SectionProjects from '../../pageSections/SectionProjects/SectionProjects';
import SectionSkills from '../../pageSections/SectionSkills/SectionSkills';
import SectionContacts from '../../pageSections/SectionContacts/SectionContacts';

const PageHome = () => {
  return (
    <div className="page-content page-home">
      <div className="page-container">
        <SectionHeaderVideo />
        <section className="main-content">
          <SectionAbout />
          <SectionProjects title={siteData.home.projects.title} />
          <SectionSkills />
          <SectionContacts />
        </section>
      </div>
    </div>
  )
}

export default PageHome;