import React, { useState, useEffect } from 'react';
import './ProjectGallery.scss';
import siteData from '../../../siteData.json';
import Slider from "react-slick";
import Button from '../../shared/Button/Button';
import { sortArrayByValue } from '../../../utilities/utilityFunctions';
import { toggleFullscreen } from '../../../utilities/utilityFunctions';

const ProjectGallery = props => {
  const { galleryData } = props;

  const slidersContainer = React.createRef();

  let thumbnailsCarousel = [];
  let slidesCarousel = [];

  const [thumbnails, setThumbnails] = useState(null);
  const [slides, setSlides] = useState(null);
  const [fullscreenIsActivated, setFullscreenIsActivated] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const numberOfSlides = galleryData.length;

  useEffect(() => {
    setThumbnails(thumbnailsCarousel);
    setSlides(slidesCarousel);
  }, [thumbnailsCarousel, slidesCarousel]);

  useEffect(() => {
    handleFullscreenChange();
  }, []);

  function handleFullscreenChange() {

    function toggleFullscreenState() {
      if (document.webkitCurrentFullScreenElement === null || document.fullscreenElement === null) {
        setFullscreenIsActivated(false)
      } else {
        setFullscreenIsActivated(true)
      }
    }
    
    /* Standard syntax */
    document.addEventListener("fullscreenchange", function () {
      toggleFullscreenState();
    });

    /* Firefox */
    document.addEventListener("mozfullscreenchange", function () {
      toggleFullscreenState();
    });

    /* Chrome, Safari and Opera */
    document.addEventListener("webkitfullscreenchange", function () {
      toggleFullscreenState();
    });

    /* IE / Edge */
    document.addEventListener("msfullscreenchange", function () {
      toggleFullscreenState();
    });
  }

  function handleBeforeIndexChange(oldIndex, newIndex) {
    if (newIndex < numberOfSlides + 1) {
      const oldSlideVideoElem = document.querySelector(`.images-slider .slick-slide[data-index="${oldIndex}"] video`);
      if (oldSlideVideoElem) { // if the slide contains video
        oldSlideVideoElem.pause();
        oldSlideVideoElem.currentTime = 0;
      }
    }
  }

  function handleAfterIndexChange(index) {
    setCurrentSlide(index);
  }

  function handleEndVideo(event) {
    const videoElem = event.target;
    videoElem.currentTime = 0;
  }

  function renderSlideCounter() {
    return (
      <div className="slide-counter">
        {currentSlide + 1} / {numberOfSlides}
      </div>
    )
  }

  function renderThumbnails() {
    return sortArrayByValue(galleryData, 'asc').map(elem => {
      return <img src={elem.thumbnail} key={elem.id} alt="" />
    })
  }

  function renderImageDescription(imageData) {
    if (imageData.description !== "") {
      return (
        <div className="image-description">{imageData.description}</div>
      )
    }
  }

  function renderButtonsBlock() {
    return (
      <div className="button-container">
        <Button
          title={fullscreenIsActivated ?
            siteData.project_template.fullscreen_button.deactivate_fullscreen :
            siteData.project_template.fullscreen_button.activate_fullscreen}
          onClick={() => toggleFullscreen(slidersContainer.current)}
        />
      </div>
    )
  }

  function renderSlides() {
    return sortArrayByValue(galleryData, 'asc').map(elem => {
      if (elem.image_type === "video") {
        return (
          <div className="slide-wrapper" key={elem.id}>
            <video
              controls
              muted
              poster={elem.video_poster}
              preload="metadata"
              onEnded={e => handleEndVideo(e)}
            >
              <source src={elem.image} type="video/mp4"></source>
            </video>
            {renderImageDescription(elem)}
            {renderButtonsBlock()}
          </div>
        )
      } else if (elem.image_type === "picture") {
        return (
          <div className="slide-wrapper" key={elem.id}>
            <img src={elem.image} alt="" />
            {renderImageDescription(elem)}
            {renderButtonsBlock()}
          </div>
        )
      } else return null;
    })
  }

  const thumbnailsSliderSettings = {
    className: "thumbnails-slider",
    asNavFor: slides,
    ref: slider => thumbnailsCarousel = slider,
    slidesToShow: 6,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  }

  const imagesSliderSettings = {
    className: "images-slider",
    asNavFor: thumbnails,
    ref: slider => slidesCarousel = slider,
    lazyLoad: true,
    infinite: false,
    beforeChange: (oldIndex, newIndex) => handleBeforeIndexChange(oldIndex, newIndex),
    afterChange: index => handleAfterIndexChange(index),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false
        }
      }
    ]
  }

  return (
    <div className="sliders-container" ref={slidersContainer}>
      <Slider {...thumbnailsSliderSettings} >
        {renderThumbnails()}
      </Slider>
      <div className="slider-wrapper">
        {renderSlideCounter()}
        <Slider {...imagesSliderSettings} >
          {renderSlides()}
        </Slider>
      </div>
    </div>
  )
}

export default ProjectGallery;