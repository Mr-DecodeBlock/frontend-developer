import testimonial_data from '@/src/data/testimonial-dev';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import styles from "./styles.module.css";
import { CardDevelop } from './cardDevelop';
import difusser from "../../../../../public/assets/img/developers/difusser.png"


export const SectionDeveloper = () => {

   const { t } = useTranslation();
   const [isVertical, setIsVertical] = useState(true)

   // slider one setting 
   const setting_one = {
      speed: 20000,
      autoplay: true,
      autoplaySpeed: 0,
      width: 100,
      spaceBetween: "200",
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      vertical: isVertical,
      buttons: false,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
            }
         },
         {
            breakpoint: 992,
            settings: {
            }
         },
         {
            breakpoint: 699,
            settings: {
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 5,
            }
         }
      ]
   }

   // slider one setting 
   const setting_two = {
      speed: 20000,
      autoplay: true,
      autoplaySpeed: 0,
      width: 100,
      spaceBetween: "200",
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      buttons: false,
      rtl: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
            }
         },
         {
            breakpoint: 992,
            settings: {
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            }
         }
      ]
   }

   useEffect(() => {
      const handleResize = () => {
         setIsVertical(window.innerWidth < 700);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className={styles.container}>
         <div className="tp-testimonial-area fix" >
            <div className="container">
               <div className="d-flex flex-column justify-content-center align-items-center mb-55">
                  <div className="col-md-10">
                     <div className="tp-testimonial-five-section-box w-100 d-flex flex-column">
                        <h3 className="tp-section-title-lg text-white text-center mb-30">{t('home.developers.title')}<span style={{ color: "#FFB93F" }}>{t('home.developers.developers')}</span></h3>
                        <span className="text-center text-white" style={{ fontSize: "24px" }}>
                           {t('home.developers.description')}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-11 col-md-12 p-relative">
                     <Image src={difusser} className={`${styles.imgDifusser} ${styles.imgDifusserLeft}`} alt='theme-pure' />
                     <Image src={difusser} className={`${styles.imgDifusser} ${styles.imgDifusserRight}`} alt='theme-pure' />
                     <div className="mb-50">
                        <Slider {...setting_one} className="">
                           {testimonial_data.slice(12, 20).map((item, i) =>
                              <CardDevelop item={item} key={i} />
                           )}
                        </Slider>
                     </div>

                     {isVertical === false &&
                        <div className="mb-50">
                           <Slider {...setting_two} className="">
                              {testimonial_data.slice(12, 20).map((item, i) =>
                                 <CardDevelop item={item} key={i} />
                              )}
                           </Slider>
                        </div>
                     }

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};