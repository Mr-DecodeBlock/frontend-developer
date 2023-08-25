import React from 'react';
import AnswerQuestion from '@/src/common/answer-private';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import dashbord from "../../../public/assets/img/service/sv-dashbord-2.png";
import service_img from "../../../public/assets/img/service/sv-details-4.jpg";
import service_details_content from "./data";

const {
   bg_img,
   overview_title,
   overview_des,
   overview_des2,
   overview_des3,

   challange_title,
   challange_des,
   challange_list,
   challange_title2,
   challange_des2,
   challange_list2,
   challange_title3,
   challange_des3,
   challange_list3,
   challange_title4,
   challange_des4,
   challange_list4,
   challange_title5,
   challange_des5,
   challange_title6,
   challange_des6,
   challange_title7,
   challange_des7,
   challange_title8,
   challange_des8,
   challange_title9,
   challange_des9,
   challange_title10,
   challange_des10,
   challange_title11,
   challange_des11,
   challange_title12,
   challange_des12,
   challange_title13,
   challange_des13,
   challange_title14,
   challange_des14,
   challange_title15,
   challange_des15,
   challange_title16,
   challange_des16,
   challange_title17,
   challange_des17,
   challange_title18,
   challange_des18,
   challange_title19,
   challange_des19,

   contact_titel,
   contact_des,
} = service_details_content

const UseTerms = () => {

   const { t } = useTranslation();

   return (
      <>
         <div className="sv-details-area pt-100 pb-100">
            <div className="container">
               <div className="d-flex flex-column align-items-center">

                  <div className="col-xl-12 col-lg-12">
                     <div className="sv-details-wrapper">
                        <div className="sv-details-thumb mb-45">
                           <Image className="w-100" src={service_img} alt="theme-pure" />
                        </div>
                        
                        {/* <div className="sv-details-title-box mb-30">
                           <h4 className="sv-details-title">{t(overview_title)}</h4>
                           <h5 className="" style={{ color: '#818181' }}>{t(overview_des)}</h5>
                        </div> */}

                        <div className="sv-details-title-box mb-30">
                           <p>{t(overview_des2)}</p>
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <p>{t(overview_des3)}</p>
                        </div>


                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title)}</h4>
                           <p>{t(challange_des)}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <ul>
                              {challange_list.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>

                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title2)}</h4>
                           <p>{t(challange_des2)}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <ul>
                              {challange_list2.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title3)}</h4>
                           <p>{t(challange_des3)}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <ul>
                              {challange_list3.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title4)}</h4>
                           <p>{t(challange_des4)}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <ul>
                              {challange_list4.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title5)}</h4>
                           <p>{t(challange_des5)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title6)}</h4>
                           <p>{t(challange_des6)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title7)}</h4>
                           <p>{t(challange_des7)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title8)}</h4>
                           <p>{t(challange_des8)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title9)}</h4>
                           <p>{t(challange_des9)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title10)}</h4>
                           <p>{t(challange_des10)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title11)}</h4>
                           <p>{t(challange_des11)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title12)}</h4>
                           <p>{t(challange_des12)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title13)}</h4>
                           <p>{t(challange_des13)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title14)}</h4>
                           <p>{t(challange_des14)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title15)}</h4>
                           <p>{t(challange_des15)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title16)}</h4>
                           <p>{t(challange_des16)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title17)}</h4>
                           <p>{t(challange_des17)}</p>
                           {/* <a className="tp-btn-orange tp-btn-hover alt-color-white" href="https://drive.google.com/file/d/16XIrz3jzrUBnxqB9Wdax5iHBNkmFbdZP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                              <span>{t("downloadDocument")}</span>
                           </a> */}
                        </div>

                        <div className="sv-details-text-3">
                           <br />
                           <h4 className="sv-details-text-title text-warning">{t(challange_title18)}</h4>
                           <p>{t(challange_des18)}</p>
                        </div>

                        <div className="sv-details-text-3">
                           <h4 className="sv-details-text-title text-warning">{t(challange_title19)}</h4>
                           <p>{t(challange_des19)}</p>
                        </div>

                        <div className="sv-details-text-2 mb-55 mt-55">
                           <h4 className="sv-details-text-title text-warning">{t("contact_titel")}</h4>
                           <p> {t("contact_des1")} <strong>privacy@businessshop.com</strong> {t("contact_des2")} </p>
                        </div>

                     </div>
                  </div>

                  <div className="col-xl-10 col-lg-10">
                     <div className="sv-details-widget">


                        {/* <div className="tp-service__dashboard mb-30" style={{ backgroundImage: `url(${bg_img})` }}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white"> {t("website")} </h3>
                              <p> {t("reviewPrivacy")} <br /> BSP Chain.</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/privacy-policies">
                                 <span>{t("privacy")}</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s"
                                 alt="theme-pure" />
                           </div>
                        </div> */}

                        {/* <div className="tp-service__dashboard mb-30" style={{ backgroundImage: `url(${bg_img})` }}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{t("downloadPDF")}</h3>
                              <p>{t("doReadTerms")}</p>
                              <a className="tp-btn-orange tp-btn-hover alt-color-white" href="https://drive.google.com/file/d/16XIrz3jzrUBnxqB9Wdax5iHBNkmFbdZP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                 <span>{t("download")}</span>
                              </a>
                           </div>
                        </div> */}


                        <div className="tp-faq-area pt-50">
                           <div className="container p-0">
                              <div className="row g-0">
                                 <div className="col-xl-12">
                                    <h4 className="sv-details-title">{t("ctaAreaTitle")}</h4>
                                    <AnswerQuestion style={true} />
                                 </div>
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

export default UseTerms; 