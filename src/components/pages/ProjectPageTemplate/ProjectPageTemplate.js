import React from 'react';
import './ProjectPageTemplate.scss';
import siteData from '../../../siteData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { formatDate } from '../../../utilities/utilityFunctions';
import TechnologyItem from '../../shared/TechnologyItem/TechnologyItem';
import ProjectGallery from '../../pageSections/ProjectGallery/ProjectGallery';
import SectionProjects from '../../pageSections/SectionProjects/SectionProjects';

const ProjectPageTemplate = props => {
  const { projectData, technologiesData, allProjectsData, currentProjectId } = props;

  const galleryImagesData = projectData.gallery;

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

  function renderLinksBlock() {
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

    if (projectData.link || projectData.github_link) {
      return (
        <div className="links-block">
          {renderLinkButton()}
          {renderGitHubLinkButton()}
        </div>
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

  function renderBodyParagraphs() {
    return projectData.body_text.map((elem, i) => {
      return <p key={i}>{elem}</p>
    })
  }

  return (
    <div className="page-content page-project">
      <div className="page-container">
        <section id="header-image-section">
          <div
            className="image-container"
            style={{ backgroundImage: `url(${projectData.bg_images.wide})` }}  
          ></div>
          <div className="overlay"></div>
          <div className="content-container">
            <div className="title-block">
              <h1 className="title">{projectData.title}</h1>
              <p className="description">{projectData.description}</p>
              <div className="date-block">
                <div className="date">{formatDate(projectData.date)}</div>
              </div>
            </div>
          </div>
        </section>

        <div className="main-content">
          <div className="content-container">

            <section className="spec-section">
              {renderLinksBlock()}
              <div className="tech-stack-block">
                {renderTechItems(getTechnologies())}
              </div>
            </section>

            <section className="body-section">
              {/* <img id="body-img-1" src={projectData.body_images.img1} /> */}
              {renderBodyParagraphs()}
            </section>

            <section className="gallery-section">
              <ProjectGallery galleryData={galleryImagesData} />
            </section>

            <SectionProjects
              title={siteData.project_template.other_projects_title}
              currentProjectId={currentProjectId}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPageTemplate;
