import React from 'react';
import AnswerQuestion from '@/src/common/answer-private';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord-2.png";
import service_img from "../../../public/assets/img/service/sv-details-1.jpg"; 
import { useTranslation } from 'react-i18next';

const service_details_content = {
    category_title:"Service Category",
    categorys: [
        {id:1, category: "Branding", cls: ""},
        {id:1, category: "Web Design", cls: "active"},
        {id:1, category: "Mobile Application", cls: ""},
        {id:1, category: "Development", cls: ""},
        {id:1, category: "Illusutration", cls: ""},
    ],
    bg_img: "/assets/img/service/privacy.png",

    overview_title: "testimonialPrivaceName17",
    overview_des: "Business Shop está comprometido con los más altos estándares de cumplimiento contra el lavado de dinero (AML) y el financiamiento del terrorismo (CTF). El objetivo de la Política de Lucha contra el Blanqueo de Capitales y la Financiación del Terrorismo de las empresas es prevenir activamente los riesgos de estas cuestiones. Para ayudar al gobierno a combatir el financiamiento del terrorismo y las actividades de lavado de dinero, la ley requiere que todas las instituciones financieras obtengan, verifiquen y registren información que identifique a cada persona que abre una cuenta. Tenemos la obligación de informar sobre actividades sospechosas de clientes relevantes para el lavado de dinero. Lavado de dinero: el proceso de convertir fondos, recibidos de actividades ilegales (como fraude, corrupción, terrorismo, etc.), en otros fondos o inversiones que parecen legítimos para ocultar o distorsionar la fuente real de los fondos. El proceso de lavado de dinero se puede dividir en tres etapas secuenciales",
    overview_des2: "KycAmloverview_des2",

    overview_list: [
      "Colocación: En esta etapa, los fondos se convierten en instrumentos financieros, como cheques, cuentas bancarias y transferencias de dinero, o se pueden usar para comprar bienes de alto valor que se pueden revender. También se pueden depositar físicamente en bancos e instituciones no bancarias (por ejemplo, casas de cambio). Para evitar sospechas por parte de la empresa, el lavador también puede hacer varios depósitos en lugar de depositar toda la suma a la vez, esta forma de colocación se llama pitufeo. Los fondos se transfieren o transfieren a otras cuentas y otros instrumentos financieros. Se realiza para disfrazar el origen e interrumpir la indicación de la entidad que realizó las múltiples transacciones financieras. Mover fondos y cambiar su forma hace que sea complicado rastrear el dinero que se está lavando",
      "Integración: Los fondos vuelven a circular como legítimos para comprar bienes y servicios. Business Shop se adhiere a los principios de lucha contra el blanqueo de capitales y previene activamente cualquier acción que tenga como objetivo o facilite el proceso de legalización de los fondos obtenidos ilegalmente. La política AML significa prevenir el uso de los servicios de la compañía por parte de delincuentes, con el objetivo de lavado de dinero, financiamiento del terrorismo u otra actividad delictiva. Para evitar el lavado de dinero, Business Shop no acepta ni paga en efectivo bajo ninguna circunstancia. La empresa se reserva el derecho de suspender la operación de cualquier cliente, que pueda considerarse ilegal o que pueda estar relacionada con el lavado de dinero en opinión del personal.",
   ],

    challange_titel: "KycAmlchallange_titel",

    challange_des2: "KycAmlchallange_des2",
    challange_des3: "KycAmlchallange_des3",

    details_titel: "KycAmldetails_titel",
    details_des: "KycAmldetails_des",
  
   details_des2: "KycAmldetails_des2",
     
    information_titel: "KycAmlinformation_titel",
    information_des: "KycAmlinformation_des",
   
    used_titel: "KycAmlused_titel",
    used_des: "KycAmlused_des",    
    contact_titel: "contact_titel"
   
   }

const {
 
    bg_img,  
    overview_title, 
    overview_des,
    overview_list,
    overview_des2,
    overview_des3,
    challange_titel, 
    challange_des,
    challange_des2,
    challange_des3,
    challange_des4,
    details_titel,
    details_des,
    details_des2,
    information_titel,
    information_des,
    information_des2,
    information_des4,
      used_titel,
      used_des,
      contact_titel
}  = service_details_content

const KycAmlPolicies = () => {
   const {t} = useTranslation();

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
            <div className="container w-100">
               <div className="d-flex flex-column align-items-center justify-content-center w-100">
                  
                  <div className="col-xl-12 col-lg-12">
                     <div className="">
                        <div className="sv-details-thumb mb-45">
                           <Image className="w-100" src={service_img} alt="theme-pure" />
                        </div>
                        <div className="sv-details-title-box mb-30">
                           <h4 className="sv-details-title text-warning">{t(overview_title)}</h4>
                           <p className="sv-details-text">{t(overview_des)}</p>
                        </div>

                        <div className="sv-details-text mb-35">
                           <ul>
                              {overview_list.map((item, i) => <li key={i}> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                           </ul>
                        </div>


                        <div className="sv-details-title-box mb-30">
                           <p>{t(overview_des2)}</p>
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <p>{t(overview_des3)}</p>
                        </div>


                        <div className="sv-details-text-2">
                           <h4 className="sv-de tails-text-title text-warning">{t(challange_titel)}</h4>
                        </div>

                        <div className="sv-details-text-2">
                           <p>{t(challange_des2)}</p>
                        </div>
                        <div className="sv-details-text-2">
                           <p>{t(challange_des3)}</p>
                        </div>
                        <div className="sv-details-text-2 mb-55">
                           <p>{t(challange_des4)}</p>
                        </div>

                        
                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title text-warning">{t(details_titel)}</h4>
                           <p>{t(details_des)}</p>
                        </div>

                        <div className="sv-details-text-2">
                           <p>{t(details_des2)}</p>
                        </div>

                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title text-warning mt-30">{t(information_titel)}</h4>
                           <p>{t(information_des)}</p>
                        </div>

                        <div className="sv-details-text-2">
                           <p>{t(information_des2)}</p>
                        </div>

                        <div className="sv-details-text-2 mb-55">
                           <p>{t(information_des4)}</p>
                        </div>


                        <div className="sv-details-text-2 mb-55">
                           <h4 className="sv-details-text-title text-warning">{t(used_titel)}</h4>
                           <p>{t(used_des)}</p>
                        </div>

                        <div className="sv-details-text-2 mb-55">
                           <h4 className="sv-details-text-title text-warning">{t(contact_titel)}</h4>
                           <p> {t("contact_des1")} <strong>privacy@businessshop.com</strong> {t("contact_des2")} </p>
                        </div>
                        
                     </div>
                  </div>

                  <div className="col-xl-10 col-lg-8">
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

export default KycAmlPolicies; 