import React from 'react';
import './ProjectGallery.scss';
import ImageGallery from 'react-image-gallery';

const ProjectGallery = props => {
  const { imagesData } = props;

  return (
    <ImageGallery
      items={imagesData}
      lazyLoad={true}
      thumbnailPosition="top"
      // useBrowserFullscreen={false}
      showPlayButton={false}
      showIndex={true}
      onErrorImageURL="https://ucarecdn.com/e0a5b7b8-33ad-4304-9c1c-0253f97bf48c/"
    />
  )
}

export default ProjectGallery;
