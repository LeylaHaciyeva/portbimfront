import React from "react";
import Slider from "react-slick";
import video1 from '../../videos/slide1.mp4'
import video2 from '../../videos/slide2.mp4'
import video3 from '../../videos/slide3.mp4'
import './SliderComponent.css'
function SliderComponent() {
  var settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
    speed: 10000,
    autoplaySpeed: 10000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <video width="100%" height="100%" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
          <div className="overlay-div">
            
          </div>
        </div>
        <div>
          <video width="100%" height="100%" autoPlay loop muted>
            <source src={video2} type="video/mp4" />
          </video>
          <div className="slider-text">
            <div>
              <span>News</span>
              <h2>Apple’s first retail location in Malaysia opens to the public</h2>
            </div>
          </div>
        </div>
      </Slider>
      <div className="text-animation">
      </div>
    </div>
  );
}

export default SliderComponent;