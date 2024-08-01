import React from 'react'
import aboutimage from '../../images/detailslider1.jpg'
import Header from '../../components/header/mainheader/Header'
import './About.css'
import PageHeader from '../../components/header/pageheader/PageHeader'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import clientlogo from '../../images/clientLogo.png'
import clientlogo2 from '../../images/clientLogo2.png'

const About = () => {
  return (
    <div>
      <PageHeader />
      <div className='about-image'>
        <div></div>
        <p>About</p>
      </div>
      <div className='container about-text-container'>
        <h2>
          PORTBİM - YÜKSƏK SƏVİYYƏLİ MEP & F DİZAYN VƏ BİM (BİNA MƏLUMAT MODELLƏŞDİRMƏSİ) TƏTBİQ ÇÖZÜMLƏRİ TƏKLİF EDƏN MÜHƏNDISLİK ŞIRKƏTİDİR.
        </h2>
        <div className='about-text-desc row'>
          <div className='col-lg-6'>
            <p>Hekayəmiz 2013-cü ildə başladı. Bu qısa müddət ərzində komandamız onlarla sənaye və qeyri-sənaye
              layihələrini uğurla başa vurmağı bacardı. Ən son texnologiya və standartlardan istifadə edərək, yüksək ixtisaslı
              və fədakar kadrlarımız sayəsində minimum layihə təhvil müddəti, xərcləri və xətası ilə LOD500 dizayn həllini təmin
              etmə bacarığına sahibik. </p>
          </div>
          <div className='col-lg-6'>
            <p>
              Hər növ binalar üçün mexaniki, elektrik və santexnika mühəndislik dizayn xidmətləri təqdim edirik.
              Dizaynımızda bina sistemlərinin etibarlılığını və səmərəliliyini təmin edirik. Yeni və dəyişdirilmiş binalar
              üçün bütün MEP sistemlərinin konseptual və detallı dizaynı zamanı müştərimizə dəstək olaraq dizaynlarımızın icrasına
              nəzarət edirik və başa çatdıqdan sonra sınaq testlərini aparırıq.
            </p>
          </div>
        </div>
      </div>
      <div className='clients container'>
        <div>
          <h2>Clients</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            // cssMode={true}
            loop={true}
            className='swiper'
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='tools container'>
        <div>
          <h2>Tools</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            loop={true}
            className='swiper'
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo} title="" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={clientlogo2} title="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h2>Contact</h2>
              <p className='adress'>
                Selskokhozyaistvennaya street 17/2, Moscow
              </p>
              <p className='number'>+7 495 973-08-16</p>
              <p className='mail'>portbim2121@.com
                <span className='line'></span>
              </p>
              <p className='working-hours'>Monday–friday from 09:00 to 18:00</p>
            </div>
            <div className='col-lg-6'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
