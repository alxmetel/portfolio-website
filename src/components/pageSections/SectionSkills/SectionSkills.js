import React, { useState, useEffect } from 'react';
import './SectionSkills.scss';
import { connect } from 'react-redux';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import TechnologyItem from '../../shared/TechnologyItem/TechnologyItem';

const SectionSkills = props => {
  const projectsData = props.projectsData;
  const technologiesData = props.techData;
  
  const [dataIsReady, setDataIsReady] = useState(false);
  const [sortedData, setSortedData] = useState(null);
  
  useEffect(() => {
    if (Object.keys(projectsData).length !== 0 && Object.keys(technologiesData).length !== 0) {
      setDataIsReady(true);
    } else {
      setDataIsReady(false);
    }
  }, [projectsData, technologiesData]);

  useEffect(() => {
    if (dataIsReady) {
      sortTechByCategory();
    }
  }, [dataIsReady]);

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
    if (dataIsReady && sortedData !== null) {
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
    } else {
      return (
        <div>Loading...</div> // Replace with Loader
      )
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

const mapStateToProps = state => ({
  projectsData: state.portfolioData.projectsData,
  techData: state.portfolioData.technologiesData
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionSkills);