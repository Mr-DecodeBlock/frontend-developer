import testimonial_data from '@/src/data/testimonial-privace';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

const testimonial_content = {
   bg_img: "/assets/img/testimonial/private.png",
   sub_title: "legalDocumentation",
   title: ""
}
const { bg_img, sub_title, title } = testimonial_content

// setting 
const setting = {
   loop: true,
   slidesPerView: 4,
   spaceBetween: 30,
   breakpoints: {
      '2000': {
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

const TestimonialArea = () => {

   const [isDragged, setIsDragged] = useState(false);
   const {t} = useTranslation();

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };

   return (
      <>
         <div className="tp-testimonial-area pt-130 pb-130 fix"
            style={{ backgroundImage: `url(${bg_img})` }}
         >
            <div className="container">
               <div className="row align-items-end tp-testimonial-five-section-space">
                  <div className="col-md-8">
                     <div className="tp-testimonial-five-section-box">
                        <span className="tp-section-subtitle-5">{t(sub_title)}</span>
                        <h3 className="tp-section-title-5"><>{t("complianceLaws")}<span> {t("regulations")} </span></></h3>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                        <div className="test-next">
                           <button><i className="far fa-arrow-left"></i></button>
                        </div>
                        <div className="test-prev">
                           <button><i className="far fa-arrow-right"></i></button>
                        </div>
                     </div>
                  </div>
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
                           className={`swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""}`}
                           style={{height: "24rem"}}>
                           {testimonial_data.slice(12, 20).map((item, i) =>
                              <SwiperSlide key={i} className="tp-testimonial-five-item">
                                 <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                    <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                       <div className="tp-testimonial-five-avata">
                                          <Image src={item.author_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-testimonial-five-author-info">
                                          <h4>{t(item.name)}</h4>
                                          <span style={{ color: "#fff", fontWeight: 600 }}>{t(item.title)}</span>
                                       </div>
                                    </div>
                                    <div className="tp-testimonial-five-brand d-none d-sm-block">
                                       {/* <Image src={item.brand_icon} alt="theme-pure" /> */}
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-five-content">
                                    <p>{t(item.description)}</p>
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

export default TestimonialArea;