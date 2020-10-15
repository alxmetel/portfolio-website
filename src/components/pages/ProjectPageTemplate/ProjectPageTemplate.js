import React from 'react';
import './ProjectPageTemplate.scss';
import siteData from '../../../siteData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import TechnologyItem from '../../shared/TechnologyItem/TechnologyItem';
import ProjectGallery from '../../pageSections/ProjectGallery/ProjectGallery';
import SectionProjects from '../../pageSections/SectionProjects/SectionProjects';

const ProjectPageTemplate = props => {
  const { projectData, technologiesData, allProjectsData } = props;

  const galleryImagesData = projectData.gallery_images;

  function getTechnologies() {
    let technologies = [];
    projectData.tech_stack.forEach(projectTechId => {
      technologiesData.forEach(tech => {
        if (projectTechId === tech.id) {
          technologies.push(tech);
        }
      });
    });
    return technologies;
  }

  function getProjectsByTechnology(techId) {
    let projects = [];
    allProjectsData.forEach(elem => {
      if (elem.tech_stack !== undefined && elem.tech_stack.includes(techId)) {
        projects.push(elem);
      }
    });
    return projects;
  }

  function renderLinkButton() {
    if (projectData.link) {
      return (
        <a className="button" href={projectData.link} target="_blank" rel="noopener noreferrer">
          <div className="item-icon"><FontAwesomeIcon icon={faLink} /></div>
          <div className="item-text">{siteData.project_template.link_button}</div>
        </a>
      )
    }
  }

  function renderGitHubLinkButton() {
    if (projectData.github_link) {
      return (
        <a className="button" href={projectData.github_link} target="_blank" rel="noopener noreferrer">
          <div className="item-icon"><FontAwesomeIcon icon={faGithub} /></div>
          <div className="item-text">{siteData.project_template.github_link_button}</div>
        </a>
      )
    }
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

  return (
    <div className="project-page">
      <div className="page-container">
        <section id="header-image-section">
          <div
            className="image-container"
            style={{ backgroundImage: `url(${projectData.bg_images.wide})` }}  
          ></div>
          <div className="overlay"></div>
          <div className="title-block">
            <h1>{projectData.title}</h1>
          </div>
        </section>

        <div className="main-content">
          <div className="content-container">
            
            <section className="spec-section">
              <div className="links-block">
                {renderLinkButton()}
                {renderGitHubLinkButton()}
              </div>
              <div className="tech-stack-block">
                {renderTechItems(getTechnologies())}
              </div>
            </section>

            <section className="description-section">
              <p>{projectData.description}</p>
            </section>

            <section className="body-section">
              {/* <img id="body-img-1" src={projectData.body_images.img1} /> */}
              <p>{projectData.body_text.p1}</p>
              <p>{projectData.body_text.p2}</p>
              <p>{projectData.body_text.p3}</p>
            </section>

            <section className="gallery-section">
              <ProjectGallery imagesData={galleryImagesData} />
            </section>

            <SectionProjects title={siteData.project_template.other_projects_title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPageTemplate;
