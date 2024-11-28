import React from 'react'
import Slideritems from './Slideritems'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed:1500,
   
    
  };
  return (
    <section className='Banner-slider'>
   <Slider {...settings}>
    <Slideritems img="slider-1.jpg" header='GRAPHIC TEES CAPSULE' subheader="NEW DROP"/>
    <Slideritems img="slider-2.jpg" header='STITCHED FOOTBALL TRACKPANT' subheader="LIMITED EDITION ONLINE  EXCLUSIVE"/>
    <Slideritems img="slider-3.jpg" header='THE RIP STOP PULLOVER' subheader="RE STOCK ALERT"/>
   </Slider>
   </section>
  )
  
}

export default BannerSlider
