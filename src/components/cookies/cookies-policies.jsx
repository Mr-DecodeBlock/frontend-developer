import React from 'react';
import AnswerQuestion from '@/src/common/answer-private';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord-2.png";
import service_img from "../../../public/assets/img/service/sv-details-1.jpg";
import { useTranslation } from 'react-i18next';

const service_details_content = {
   category_title: "Service Category",
   categorys: [
      { id: 1, category: "Branding", cls: "" },
      { id: 1, category: "Web Design", cls: "active" },
      { id: 1, category: "Mobile Application", cls: "" },
      { id: 1, category: "Development", cls: "" },
      { id: 1, category: "Illusutration", cls: "" },
   ],
   bg_img: "/assets/img/service/privacy.png",

   overview_title: "testimonialPrivaceName15",
   overview_des: "lastUpdated",
   overview_des2: "cookiesoverview_des2",

   challange_des: "cookieschallange_des",
   challange_list: [
      "cookieschallange_listItem1",
      "cookieschallange_listItem2",
      "cookieschallange_listItem3",
      "cookieschallange_listItem1"
   ],
   challange_des2: "cookieschallange_des2",

   contact_titel: "contact_titel"
}

const {

   bg_img,
   overview_title,
   overview_des,
   overview_des2,
   challange_des,
   challange_list,
   challange_des2,
   contact_titel
} = service_details_content

const CookiesPolicies = () => {
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

                        <div className="sv-details-text-2">
                           <p>{t(challange_des)}</p>
                        </div>

                        <div className="sv-details-text mb-35">
                           <ul>
                              {challange_list.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>

                        <div className="sv-details-text-2 mb-55">
                           <p>{t(challange_des2)}</p>
                        </div>


                        <div className="sv-details-text-2 mb-55">
                           <h4 className="sv-details-text-title text-warning">{t(contact_titel)}</h4>
                           <p> {t("contact_des1")} <strong>privacy@businessshop.com</strong> {t("contact_des2")} </p>
                        </div>

                     </div>
                  </div>

                  <div className="col-xl-10 col-lg-10">
                     <div className="sv-details-widget">


                        {/* <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white"> {t("WebsiteUseTerms")} </h3>
                              <p>{t("reviewterms")}</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/terms">
                                 <span>{t("termsUse")}</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s" 
                               alt="theme-pure" />
                           </div>
                        </div> */}

                        {/* <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-service__top-content">
                           <h3 className="tp-service__title-white">{t("downloadPDF")}</h3>
                           <p>{t("youWantRead")}</p>
                           <a className="tp-btn-orange tp-btn-hover alt-color-white" href="https://drive.google.com/file/d/1aDIihQ3mnjOj4xSbU-P7GGbtDCkSE5FE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                              <span>{t("download")}</span>
                              <b></b>
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

export default CookiesPolicies; 