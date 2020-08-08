import React, { useEffect } from 'react';
import './SectionProjects.scss';
import SlickSlider from '../../shared/SlickSlider/SlickSlider';
import data from '../../../siteData.json';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ProjectCard from '../../shared/ProjectCard/ProjectCard';
import LinkButton from '../../shared/LinkButton/LinkButton';

import myPhoto from '../../../assets/my-photo.jpeg'; // Remove!!!

const SectionProjects = () => {

  useEffect(() => {
    fetchProjectsData();
  }, []);

  const fetchProjectsData = () => {
    const url = 'https://portfolio-website-18313.firebaseio.com/projects.json';

    fetch(url).then(response => response.json()).then(data => {
      console.log(data)
    })
  }

  const projects = [
    {
      id: 0,
      title: "Visnyk NAPU",
      description: "fghgfhgfhgfdfsdfdsfsdfd sdfjkldjf lkdsj flksd flksdfdsfkljdkldslk jfkdsf hkj fjksdh fkdjsfjkd jkfd hfjkfjkfjksdf  jdksfjks fjsdhfjkshfjksk fkfjk fk kjhfkjsdfkjsdhfkjjjkfjkds fkj  fkjshjksdh fjkdsfsf",
      tech_stack: [0, 1],
      image: myPhoto,
      order: 1
    },
    {
      id: 1,
      title: "Jur Liga",
      description: "fghgfhgfhgfdfsdfdsfsdfd sdfjkldjf lkdsj flksd flksdfdsfkljdkldslk jfkdsf hkj fjksdh fkdjsfjkd jkfd hfjkfjkfjksdf  jdksfjks fjsdhfjkshfjksk fkfjk fk kjhfkjsdfkjsdhfkjjjkfjkds fkj  fkjshjksdh fjkdsfsf",
      tech_stack: [1],
      image: myPhoto,
      order: 0
    },
    {
      id: 2,
      title: "Buch Liga",
      description: "fghgfhgfhgfdfsdfdsfsdfd sdfjkldjf lkdsj flksd flksdfdsfkljdkldslk jfkdsf hkj fjksdh fkdjsfjkd jkfd hfjkfjkfjksdf  jdksfjks fjsdhfjkshfjksk fkfjk fk kjhfkjsdfkjsdhfkjjjkfjkds fkj  fkjshjksdh fjkdsfsf",
      tech_stack: [1],
      image: myPhoto,
      order: 0
    },
    {
      id: 3,
      title: "Biz Liga",
      description: "fghgfhgfhgfdfsdfdsfsdfd sdfjkldjf lkdsj flksd flksdfdsfkljdkldslk jfkdsf hkj fjksdh fkdjsfjkd jkfd hfjkfjkfjksdf  jdksfjks fjsdhfjkshfjksk fkfjk fk kjhfkjsdfkjsdhfkjjjkfjkds fkj  fkjshjksdh fjkdsfsf",
      tech_stack: [1],
      image: myPhoto,
      order: 0
    },
    {
      id: 4,
      title: "Portfolio",
      description: "fghgfhgfhgfdfsdfdsfsdfd sdfjkldjf lkdsj flksd flksdfdsfkljdkldslk jfkdsf hkj fjksdh fkdjsfjkd jkfd hfjkfjkfjksdf  jdksfjks fjsdhfjkshfjksk fkfjk fk kjhfkjsdfkjsdhfkjjjkfjkds fkj  fkjshjksdh fjkdsfsf",
      tech_stack: [1],
      image: myPhoto,
      order: 0
    }
  ]

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

  function renderProjectCards(projectsData) {
    return projectsData.map((elem, i) => {
      return (
        <ProjectCard
          key={i}
          image={elem.image}
          title={elem.title}
          description={elem.description}
        />
      )
    })
  }

  return (
    <section className="page-section section-projects">
      <div className="content-container">
        <SectionTitle content={data.siteData.home.projects.title} />
        <div className="slider-container">
          <SlickSlider
            settings={sliderSettings}
            slides={renderProjectCards(projects)}
          />
        </div>
        <div className="button-container">
          <LinkButton
            path="/projects"
            title={data.siteData.home.projects.button_all_projects}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionProjects;