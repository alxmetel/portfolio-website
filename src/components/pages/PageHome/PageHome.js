import React from 'react';
import './PageHome.scss';
import SectionHeaderVideo from '../../pageSections/SectionHeaderVideo/SectionHeaderVideo';
import SectionAbout from '../../pageSections/SectionAbout/SectionAbout';

const PageHome = () => {
  return (
    <div className="page-content page-home">
      <SectionHeaderVideo />
      <section className="main-content" style={{height: '3000px'}}>
        <SectionAbout />
      </section>
    </div>
  )
}

export default PageHome;