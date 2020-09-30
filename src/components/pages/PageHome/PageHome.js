import React from 'react';
import './PageHome.scss';
import SectionHeaderVideo from '../../pageSections/SectionHeaderVideo/SectionHeaderVideo';
import SectionAbout from '../../pageSections/SectionAbout/SectionAbout';
import SectionProjects from '../../pageSections/SectionProjects/SectionProjects';
import SectionSkills from '../../pageSections/SectionSkills/SectionSkills';
import SectionContacts from '../../pageSections/SectionContacts/SectionContacts';

const PageHome = () => {
  return (
    <div className="page-content page-home">
      <SectionHeaderVideo />
      <section className="main-content">
        <SectionAbout />
        <SectionProjects />
        <SectionSkills />
        <SectionContacts />
      </section>
    </div>
  )
}

export default PageHome;