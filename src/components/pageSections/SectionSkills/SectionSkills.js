import React, { useState, useEffect } from 'react';
import './SectionSkills.scss';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import TechnologyItem from '../../shared/TechnologyItem/TechnologyItem';

const SectionSkills = props => {
  const { technologiesData, projectsData } = props;
  
  const [sortedData, setSortedData] = useState(null);
  
  useEffect(() => {
    sortTechByCategory();
  }, []);

  function sortTechByCategory() {
    let sorted = {};
    technologiesData.forEach(elem => {
      if (sorted[elem.category] === undefined) {
        sorted[elem.category] = [];
        sorted[elem.category].push(elem);
      } else {
        sorted[elem.category].push(elem);
      }
    });
    setSortedData(sorted);
  }

  function getProjectsByTechnology(techId) {
    let projects = [];
    projectsData.forEach(elem => {
      if (elem.tech_stack !== undefined && elem.tech_stack.includes(techId)) {
        projects.push(elem);
      }
    });
    return projects;
  }

  function renderTechItems(arr) {
    return arr.map((elem, i) => {
      return (
          <TechnologyItem
            projectsData={getProjectsByTechnology(elem.id)}
            technologiesSortedData={elem}
            key={i}
          />
        )
    })
  }

  function renderStructuredTechList() {
    if (sortedData !== null) {
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
    <section id="skills" className="page-section section-skills">
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