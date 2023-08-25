import testimonial_data from '@/src/data/testimonial-dev';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

const testimonial_content = {
   bg_img: "/assets/img/testimonial/fondo.png",
   sub_title: "testimonialAreaDevSubtitle",
   title: <></>,
}
const { bg_img, sub_title, title } = testimonial_content

// setting 
const setting = {
   loop: true,
   slidesPerView: "auto",
   spaceBetween: 40,
   breakpoints: {
      '1700': {
         slidesPerView: 6,
      },
      '1200': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 2,
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

const setting2 = {
   loop: true,
   slidesPerView: "auto",
   spaceBetween: 40,
   breakpoints: {
      '1700': {
         slidesPerView: 6,
      },
      '1200': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 2,
      },
      '576': {
         slidesPerView: 2,
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

const testimonialdev = () => {

   const [isDragged, setIsDragged] = useState(false);
   const { t } = useTranslation();

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };

   return (
      <>
         <div className="tp-testimonial-area pt-130 pb-130 fix">
            <div className="container">
               <div className="d-flex flex-column justify-content-center align-items-center mb-55">
                  <div className="col-md-8">
                     <div className="tp-testimonial-five-section-box w-100 d-flex flex-column">
                        {/* <span className="tp-section-subtitle-5">{sub_title}</span> */}
                        <h3 className="tp-section-title-4 text-dark text-center"> {t("testimonialAreaDevTitle1")} <span>  {t("testimonialAreaDevTitle2")} </span></h3>
                        <span className="text-warning text-center">{t(sub_title)}</span>
                     </div>
                  </div>
                  {/* <div className="col-md-4 w-100">
                     <div className="tp-testimonial-five-arrow w-100 d-flex align-items-center justify-content-end justify-content-md-end">
                        <div className="test-next">
                           <button><i className="far fa-arrow-left"></i></button>
                        </div>
                        <div className="test-prev">
                           <button><i className="far fa-arrow-right"></i></button>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-12">
                     <div className="tp-testimonial-five-slider-section">
                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`d-flex flex-column swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""}`}>
                           {testimonial_data.slice(12, 20).reverse().map((item, i) =>
                              <SwiperSlide key={i} className="tp-testimonial-five-item" style={{ boxShadow: "rgb(68, 68, 68) -1px -2px 20px 0px inset", height: "300px" }}>
                                 <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center" style={{ boxShadow: "inset black 2px 3px 20px 0px" }}>
                                    <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                       <div className="tp-testimonial-five-avata">
                                          <Image src={item.author_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-testimonial-five-author-info">
                                          <h4 className='text-white'>{t(item.name)}</h4>
                                          <span className='text-white' style={{ fontWeight: 600 }}>{t(item.title)}</span>
                                       </div>
                                    </div>
                                    <div className="tp-testimonial-five-brand d-none d-sm-block">
                                       {/* <Image src={item.brand_icon} alt="theme-pure" /> */}
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-five-content">
                                    <p className='fw-bold'>{t(item.description)}</p>
                                 </div>
                              </SwiperSlide>
                           )
                           }
                        </Swiper>
                        <div className="tp-scrollbar"></div>
                     </div>
                     <div className="tp-testimonial-five-slider-section">
                        <Swiper
                           {...setting2}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""}`}
                           style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                           {testimonial_data.slice(12, 20).map((item, i) =>
                              <SwiperSlide key={i} className="tp-testimonial-five-item" style={{ boxShadow: "rgb(68, 68, 68) -1px -2px 20px 0px inset", height: "300px" }}>
                                 <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center" style={{ boxShadow: "inset black 2px 3px 20px 0px" }}>
                                    <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                       <div className="tp-testimonial-five-avata">
                                          <Image src={item.author_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-testimonial-five-author-info">
                                          <h4 className='text-white' >{t(item.name)}</h4>
                                          <span style={{ color: "#fff", fontWeight: 600 }}>{t(item.title)}</span>
                                       </div>
                                    </div>
                                    <div className="tp-testimonial-five-brand d-none d-sm-block">
                                       {/* <Image src={item.brand_icon} alt="theme-pure" /> */}
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-five-content">
                                    <p className='fw-bold'>{t(item.description)}</p>
                                 </div>
                              </SwiperSlide>
                           )
                           }
                        </Swiper>
                        <div className="tp-scrollbar"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default testimonialdev;