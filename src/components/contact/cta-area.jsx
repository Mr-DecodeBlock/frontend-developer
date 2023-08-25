import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';


const cta_content = {
    bg_img: "/assets/img/cta/cta-bg2.png",
    title: "ctaAreaTitle",
    info: "ctaAreaInfo",
    btn_text: "ctaAreaBtn",
}
const {bg_img, title, info, btn_text}  = cta_content


const CtaArea = () => {
   const {t} = useTranslation();
    return (
        <>
             <div className="tp-cta-area p-relative">
               <div className="tp-cta-grey-bg grey-bg-2"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content tp-inner-font text-center">
                              <h3 className="tp-section-title text-white">{t(title)}</h3>
                              <p>{t(info)}</p>
                              <Link className="tp-btn-green" href="https://businessshop.gitbook.io/esp/">{t(btn_text)}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CtaArea;