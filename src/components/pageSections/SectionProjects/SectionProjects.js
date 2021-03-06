import React, { useEffect, useState } from 'react';
import './SectionProjects.scss';
import { connect } from 'react-redux';
import Loader from '../../shared/Loader/Loader';
import SlickSlider from '../../shared/SlickSlider/SlickSlider';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ProjectCard from '../../shared/ProjectCard/ProjectCard';
import { sortArrayByValue } from '../../../utilities/utilityFunctions';

const SectionProjects = props => {
  const { title, currentProjectId } = props;

  const data = props.projectsData;
  const [dataIsReady, setDataIsReady] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setDataIsReady(true);
    } else {
      setDataIsReady(false);
    }
  }, [data])

  function renderProjectCards() {
    return sortArrayByValue(data, 'desc').map(elem => {
      return (
        <ProjectCard
          key={elem.id}
          path={elem.path}
          image={elem.bg_images.square_lg}
          title={elem.title}
          description={elem.description}
          date={elem.date}
        />
      )
    })
  }

  function buildSlider() {
    const sliderSettings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      initialSlide: currentProjectId ? data.length - currentProjectId : 0,
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
      return <Loader />
    }
  }  

  return (
    <section id="projects" className="page-section section-projects">
      <div className="content-container">
        <SectionTitle content={title} />
        <div className="slider-container">
          {buildSlider()}
        </div>

        {/* All Projects Button */}
        {/* <div className="button-container">
          <LinkButton
            path="/projects"
            title={siteData.home.projects.button_all_projects}
          />
        </div> */}
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  projectsData: state.portfolioData.projectsData
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionProjects);