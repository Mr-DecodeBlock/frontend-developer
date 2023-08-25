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

   overview_title: "whistlebloweroverview_title",
   overview_des: "lastUpdated",
   overview_des2: "whistlebloweroverview_des2",
   overview_des3: "whistlebloweroverview_des3",

   challange_des: "whistleblowerchallange_des",

   challange_des2: "whistleblowerchallange_des2",
   challange_des3: "whistleblowerchallange_des3",

   contact_titel: "contact_titel"

}

const {

   bg_img,
   overview_title,
   overview_des,
   overview_des2,
   overview_des3,
   challange_des,
   challange_des2,
   challange_des3,
   contact_titel
} = service_details_content

const WhistleblowerArea = () => {
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
                           <p>{t(challange_des)}</p>
                        </div>

                        <div className="sv-details-text-2">
                           <p>{t(challange_des2)}</p>
                        </div>
                        <div className="sv-details-text-2 mb-55">
                           <p>{t(challange_des3)}</p>
                        </div>

                        <div className="sv-details-text-2 mb-55">
                           <h4 className="sv-details-text-title text-warning">{t(contact_titel)}</h4>
                           <p> {t("contact_des1")} <strong>privacy@businessshop.com</strong> {t("contact_des2")} </p>
                        </div>

                     </div>
                  </div>

                  <div className="col-xl-10 col-lg-10">
                     <div className="sv-details-widget">
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

export default WhistleblowerArea; 