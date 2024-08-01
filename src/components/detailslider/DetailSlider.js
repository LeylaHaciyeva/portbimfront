import React from 'react'
import './DetailSlider.css'
import Slider from 'react-slick/lib/slider'
import detailslider1 from '../../images/detailslider1.jpg'
import detailslider2 from '../../images/detailslider2.jpg'
import Footer from '../footer/Footer.js'
const DetailSlider = () => {
    var settings = {
        dots: true,
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        arrows: true,
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
        <div className='detail-slider'>   <Slider {...settings}>
            <div className='slider-item'>
                <img src={detailslider1} title='' />
            </div>
            <div className='slider-item'>
                <img src={detailslider2} title='' />
            </div>
            <div className='slider-item'>
                <img src={detailslider2} title='' />
            </div> <div className='slider-item'>
                <img src={detailslider2} title='' />
            </div>

        </Slider>
        </div>
    )
}

export default DetailSlider