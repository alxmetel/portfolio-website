import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = props => {
  const { settings, slides } = props;
  return (
    <div>
      <Slider {...settings}>
        {slides}
      </Slider>
    </div>
  )
}

export default SlickSlider;