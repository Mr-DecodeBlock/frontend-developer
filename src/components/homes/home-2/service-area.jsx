import LinearGradientLine from '@/src/svg/linear-gradient-line';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

// service img import 
import service_img_1 from "../../../../public/assets/img/service/sv-icon-2-1.png"
import service_img_2 from "../../../../public/assets/img/service/sv-icon-2-2.png"
import service_img_3 from "../../../../public/assets/img/service/sv-icon-2-3.png"
import service_img_4 from "../../../../public/assets/img/service/sv-icon-2-4.png"
import bg_img from "../../../../public/assets/img/service/sv-bg-2-1.jpg"
import waves_bg from "../../../../public/assets/img/service/background-services.png"

const service_content = {
   title: <>Brindamos el mejor  <br /> servicio para ti</>,
   des: <>Beneficios al administrar tus fondos con nuestra billetera</>,

   users_data: [
      {
         id: 1,
         users_count: <>100<i>+</i></>,
         users_status: "users_status1",

      },
      {
         id: 2,
         users_count: <>30<i>+</i></>,
         users_status: "users_status2",

      },
      {
         id: 3,
         users_count: <>10<i>k+</i></>,
         users_status: "users_status3",

      },
   ],
   service_data: [
      {
         id: 1,
         color: "",
         title: "exchange",
         img: service_img_1,
      },
      {
         id: 2,
         color: "2",
         title: "investment",
         img: service_img_2,
      },
      {
         id: 3,
         color: "3",
         title: "protection",
         img: service_img_3,
      },
      {
         id: 4,
         color: "4",
         title: "webManagement",
         img: service_img_4,
      },
   ],

   free_tools_title: "Widevariety",
   free_tools: [
      "exchange",
      "transfer",
      "bills",
      "paymentsTo",
      "peerToPeer",
      "userPortal",
      "QrCode",
      "paymentLinks",
      "trading",
      "Banking",
      "investment",
      "referrals"
   ]

}
const { title, des, users_data, service_data, free_tools_title, free_tools } = service_content

const ServiceArea = () => {
   const { t } = useTranslation();
   return (
      <>
         <div className="tp-service-2__area p-relative pt-70 pb-160 dark-bg mb-100">
            <div className='p-absolute w-100 h-100' style={{ top: "30" }}>
               <Image src={waves_bg} alt="theme-pure" className='w-100 h-100' />
            </div>

            <div className="container z-index-5">
               <div className="col d-flex flex-column align-items-center mb-50">
                  <div className="col-xl-6 col-lg-6 mb-35">
                     <div className="tp-service-2__section-box">
                        <h3 className="tp-section-title-lg pb-20 text-white text-center mb-55">
                           <>{t("weProvideTheBest")}<br /> {t("serviceForYou")}</>
                        </h3>
                        <p className='text-warning text-center'>
                           <>{t("administrativebenefits")}</>
                        </p>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s">
                     <div className="tp-service-2__user-box p-relative d-flex justify-content-lg-start justify-content-lg-end align-items-center">
                        {/* <div className="tp-service-2__user-shape">
                           <LinearGradientLine />
                        </div> */}
                        {users_data.map((item, i) =>
                           <div key={i} className="tp-service-2__user mb-55">
                              <h3 className='text-white display-2 fw-bold'>{item.users_count}</h3>
                              <p className='text-white h1'>{t(item.users_status)}</p>
                           </div>
                        )}
                     </div>
                  </div>
               </div>

               <div className="row gx-60">

                  {service_data.map((item, i) =>
                     <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                        data-wow-duration=".9s" data-wow-delay=".8s">
                        <div className="tp-service-2__item-wrapper p-relative d-flex flex-wrap-nowrap">
                           <div className="tp-service-2__item d-flex justify-content-between flex-column">
                              <div className="tp-service-2__icon">
                                 <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tp-service-2__text">
                                 <h4 className="tp-service-2__title-sm"><Link href="#">{t(item.title)}</Link></h4>
                                 {/* <Link className="tp-service-2__link" href="https://businessshop.gitbook.io/esp">{t("explore")}
                                    <i className="far fa-arrow-right"></i>
                                 </Link> */}
                              </div>
                           </div>
                           <div className={`tp-service-2__bg-shape tp-service-2__color-5`}></div>
                        </div>
                     </div>

                  )
                  }

               </div>


               <div className="row justify-content-center">
                  <div className="col-xl-10 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                     <div className="tp-service-2__bottom-wrapper p-relative mt-110">
                        <div className="tp-service-2__feature-itemBlack" style={{border: "solid 2px orange"}}>
                           <h4 className="tp-service-2__feature-title" style={{ color: '#fff' }}>{t(free_tools_title)}</h4>
                           <div className="tp-service-2__feature-box d-flex justify-content-between">
                              <div className="tp-service-2__feature-listWhite" >
                                 <ul>
                                    {free_tools.map((list, i) => <li key={i}>{t(list)}</li>)}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
};

export default ServiceArea;