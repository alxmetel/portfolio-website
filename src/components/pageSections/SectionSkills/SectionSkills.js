import React, { useState, useEffect } from 'react';
import './SectionSkills.scss';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import TechnologyItem from '../../shared/TechnologyItem/TechnologyItem';

const SectionSkills = () => {
  
  const [dataIsReady, setDataIsReady] = useState(false);
  const [sortedData, setSortedData] = useState(null);

  useEffect(() => {
    fetchTechnologiesData();
  }, []);

  function fetchTechnologiesData() {
    const url = 'https://portfolio-website-18313.firebaseio.com/technologies.json';

    fetch(url).then(response => response.json()).then(data => {
      sortTechByCategory(data);
    })
  }

  function sortTechByCategory(data) {
    let sorted = {};
    data.map(elem => {
      if (sorted[elem.category] === undefined) {
        sorted[elem.category] = [];
      } else {
        sorted[elem.category].push(elem);
      }
    });
    setSortedData(sorted);
    setDataIsReady(true);
  }

  function renderTechItems(arr) {
    return arr.map((elem, i) => {
      return <TechnologyItem data={elem} key={i} />
    })
  }

  function renderStructuredTechList() {
    if (dataIsReady) {
      return Object.keys(sortedData).map((category, i) => {
        return (
          <div className="tech-category-block" key={i}>
            <h3 className="tech-category-name">{category}</h3>
            <div className="tech-items-container">
              {renderTechItems(sortedData[category])}
            </div>
          </div>
        )
      })
    }
  }

  return (
    <section className="page-section section-skills">
      <div className="content-container">
        <SectionTitle content={siteData.home.skills.title} />
        <div className="skills-container">
          {renderStructuredTechList()}
        </div>
      </div>
    </section>
  )
}

export default SectionSkills;