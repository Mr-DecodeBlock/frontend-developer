import testimonial_data from '@/src/data/testimonial-data';
import RightArrow from '@/src/svg/right-arrow';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import waves_bg from "../../../../public/assets/img/service/background-services.png"

// setting 
const setting = {
   loop: true,
   slidesPerView: 5,
   spaceBetween: 100,
   breakpoints: {
      '992': {
         slidesPerView: 4,
      },
      '768': {
         slidesPerView: 4,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
   navigation: {
      nextEl: '.test-prev',
      prevEl: '.test-next',
   },
}

const tp_setting = {
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: false,
   autoplay: true,
   autoplaySpeed: 5000,
   infinite: true,
}

const brands_setting = {
   slidesToShow: 5,
   slidesToScroll: 1,
   dots: false,
   arrows: false,
   focusOnSelect: true,
   centerPadding: '0',
   centerMode: true,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 5,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
         }
      },
      {
         breakpoint: 480,
         settings: {
            arrows: false,
            slidesToShow: 1,
         }
      }

   ]
}

const TestimonialArea = () => {
   const sliderRef = useRef(null)
   const [slider1, setSlider1] = useState(null);
   const [slider2, setSlider2] = useState(null);
   const { t } = useTranslation();

   const [isDragged, setIsDragged] = useState(false);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };

   let g_title = new gsap.timeline();
   let title_anim = useRef(null)
   useEffect(() => {
      g_title.from(title_anim.current, {
         duration: 1,
         delay: 0.3,
         opacity: 0,
         rotationX: -60,
         force3D: true,
         transformOrigin: "top center -50",
         stagger: 0.2
      });
   });


   return (
      <>
         <div className="tp-testimonial__area pt-0 fix dark-bg mb-100">

            <div className="container">

               <div className="row justify-content-center">
                  <div className="col-xl-6">
                     <div className="tp-testimonial__section-box text-center pt-55">
                        <h3 className="tp-section-title text-white">Únete a la revolución de BSP Chain y sé parte de una comunidad</h3>
                        <p className='text-warning' >{t("rrssSubTitle")}</p>
                        {/* <div className="tp-testimonial__rating">
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />                                   
                           </div> */}
                     </div>
                  </div>
               </div>
               <div className='p-absolute w-100 h-100'>
                  <Image src={waves_bg} alt="theme-pure" className='w-100 h-100' />
               </div>

               <div className="row justify-content-center mt-50">
                  <div className="col-xl-10">
                     <div className="tp-testimonial__slider-section">

                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""}`}>
                           {testimonial_data.slice(0, 12).map((item, i) =>
                              <SwiperSlide key={i} className="">
                                 <div className="tp-testimonial__wrapper p-3" style={{ border: "solid 2px orange" }}>
                                    <div className="col-xl-7 col-lg-7 d-flex" style={{ width: "100%", height: "250px" }}>
                                       <div className="d-grid w-100 justify-content-between">
                                          <div className="tp-testimonial__logo d-flex justify-content-between aling-items-start">
                                             <div className='bg-dark d-flex align-items-center justify-content-center'
                                                style={{ borderRadius: "50%", width: "15%", height: "100%" }}>
                                                <i className={item.img} style={{ color: 'white' }}></i>
                                             </div>
                                             <span className='fs-3' style={{ fontWeight: "bolder" }}>{item.count}k+</span>
                                          </div>
                                          <div className="tp-testimonial__author-info z-index">
                                             <h3 className='text-warning'>{item.title}</h3>
                                          </div>
                                          <div className="">
                                             <p>{t(item.description)} </p>
                                          </div>
                                          <div className='d-flex aling-items-end'>
                                             <Link href="#"> <h5 className='text-warning'>Saber mas <i className="fas fa-arrow-right"></i> </h5></Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           )}
                        </Swiper>


                        {/* <div className="col-md-">
                           <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                              <div className="test-next">
                                 <button onClick={() => slider1.slickPrev()}><i className="far fa-arrow-left"></i></button>
                              </div>
                              <div className="test-prev">
                                 <button onClick={() => slider1.slickNext()}><i className="far fa-arrow-right"></i></button>
                              </div>
                           </div>
                        </div> */}

                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
};

export default TestimonialArea;