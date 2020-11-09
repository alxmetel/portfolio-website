import React from 'react';
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
          <div className="section-wrapper top-clipped-block">
            <SectionAbout />
          </div>
          <SectionProjects
            title={siteData.home.projects.title}
            currentProjectId={null}  
          />
          <SectionSkills />
          <div className="section-wrapper bottom-clipped-block">
            <SectionContacts />
          </div>
        </section>
      </div>
    </div>
  )
}

export default PageHome;