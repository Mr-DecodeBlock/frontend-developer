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

   overview_title: "requestGuideoverview_title",
   overview_des: "lastUpdated",

   challange_titel: "requestGuidechallange_titel",
   challange_des: "requestGuidechallange_des",
   challange_list: [
      "requestGuidechallange_listItem1",
      "requestGuidechallange_listItem2",
      "requestGuidechallange_listItem3",
      "requestGuidechallange_listItem4",
   ],
   challange_des2: "requestGuidechallange_des2",

   details_titel: "requestGuidedetails_titel",
   details_des: "requestGuidedetails_des",
   details_des2: "requestGuidedetails_des2",
   details_des3: "requestGuidedetails_des3",

   information_titel: "requestGuideinformation_titel",
   information_des: "requestGuideinformation_des",
   information_des9: "requestGuideinformation_des9",
   information_des10: "requestGuideinformation_des10",
   information_des11: "requestGuideinformation_des11",

   information_list: [
      "requestGuideinformation_listItem1",
      "requestGuideinformation_listItem2",
   ],
   information_des2: "requestGuideinformation_des2",
   information_list2: [
      "requestGuideinformation_list2Item1",
      "requestGuideinformation_list2Item2",
      "requestGuideinformation_list2Item3",
      "requestGuideinformation_list2Item4"
   ],

   used_titel: "requestGuideused_titel",
   used_des: "requestGuideused_des",
   used_des9: "requestGuideused_des9",

   contact_titel: "contact_titel"

}

const {
   bg_img,
   overview_title,
   overview_des,
   challange_titel,
   challange_des,
   challange_list,
   challange_des2,
   details_titel,
   details_des,
   details_des2,
   details_des3,
   information_titel,
   information_des,
   information_des9,
   information_des10,
   information_des11,
   information_list,
   information_des2,
   information_list2,
   used_titel,
   used_des,
   used_des9,
   contact_titel
} = service_details_content

const RequestGuideArea = () => {
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
                        <div className="sv-details-title-box mb-55">
                           <h4 className="sv-details-title">{t(overview_title)}</h4>
                           <h5 className="" style={{ color: '#818181' }}>{t(overview_des)}</h5>
                        </div>

                        <div className="sv-details-text-2 mt-55">
                           <h4 className="sv-de tails-text-title">{t(challange_titel)}</h4>
                           {/* <p>{t(challange_des)}</p> */}
                        </div>
                        {/* <div className="sv-details-text mb-35">
                           <ul>
                              {challange_list.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div> */}
                        <div className="sv-details-text-2">
                           <p>{t(challange_des2)}</p>
                        </div>

                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">{t(details_titel)}</h4>
                           <p>{t(details_des)}</p>
                           <div className="sv-details-text-2">
                              <p>{t(details_des2)}</p>
                           </div>
                           <div className="sv-details-text-2 mb-55">
                              <p>{t(details_des3)}</p>
                           </div>
                        </div>


                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">{t(information_titel)}</h4>
                           <p>{t(information_des)}</p>
                        </div>
                        <div className="sv-details-text-2">
                           <p>{t(information_des9)}</p>
                        </div>
                        <div className="sv-details-text-2">
                           <p>{t(information_des10)}</p>
                        </div>
                        <div className="sv-details-text-2">
                           <p>{t(information_des11)}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <ul>
                              {information_list.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>
                        <div className="sv-details-text-2">
                           <p>{t(information_des2)}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <ul>
                              {information_list2.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>

                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">{t(used_titel)}</h4>
                           <p>{t(used_des)}</p>
                        </div>
                        <div className="sv-details-text-2 mb-55">
                           <p>{t(used_des9)}</p>
                        </div>

                        <div className="sv-details-text-2 mb-55">
                           <h4 className="sv-details-text-title">{t(contact_titel)}</h4>
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

export default RequestGuideArea; 