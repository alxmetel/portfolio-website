import React, { useEffect, useState } from 'react';
import './SectionProjects.scss';
import SlickSlider from '../../shared/SlickSlider/SlickSlider';
import siteData from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ProjectCard from '../../shared/ProjectCard/ProjectCard';
import LinkButton from '../../shared/LinkButton/LinkButton';
import { sortArrayByValue } from '../../../utilities/utilityFunctions';

const SectionProjects = () => {

  const [data, setData] = useState(null);
  const [dataIsReady, setDataIsReady] = useState(false);

  useEffect(() => {
    fetchProjectsData();
  }, []);

  useEffect(() => {
    if (data != null) {
      setDataIsReady(true);
    }
  }, [data]);

  function fetchProjectsData() {
    const url = 'https://portfolio-website-18313.firebaseio.com/projects.json';

    fetch(url).then(response => response.json()).then(data => {
      setData(data);
    })
  }

  function renderProjectCards() {
    return sortArrayByValue(data, 'desc').map(elem => {
      return (
        <ProjectCard
          key={elem.id}
          image={elem.image_small}
          title={elem.title}
          description={elem.description}
        />
      )
    })
  }

  function buildSlider() {
    const sliderSettings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            centerPadding: "20%",
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerPadding: "10%",
            arrows: false
          }
        }
      ]
    }

    if (dataIsReady) {
      return (
        <SlickSlider
          settings={sliderSettings}
          slides={renderProjectCards()}
        />
      )
    } else {
      return null;
    }
  }  

  return (
    <section className="page-section section-projects">
      <div className="content-container">
        <SectionTitle content={siteData.home.projects.title} />
        <div className="slider-container">
          {buildSlider()}
        </div>
        <div className="button-container">
          <LinkButton
            path="/projects"
            title={siteData.home.projects.button_all_projects}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionProjects;