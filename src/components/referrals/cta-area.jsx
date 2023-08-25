import Link from 'next/link';
import React from 'react';

const cta_content ={ 
     bg_img: "/assets/img/cta/cta-bg2.png",
     title: "Recibe mensualmente los pagos en tu cuenta automáticamente",
     description: <>Gana una vez que tus referidos se registren<br/>y compren o vendan alguna criptomoneda.</>,
     btn_text: "Referir ahora",
}
const {bg_img, title, description, btn_text}  = cta_content

const CtaArea = () => {
    return (
        <>
            <div className="tp-cta-area p-relative">
               <div className="tp-cta-grey-bg grey-bg-2"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content tp-inner-font text-center">
                              <h3 className="tp-section-title text-white">{title}</h3>
                              <p>{description}</p>
                                 <Link className="tp-btn-green" href="https://businessshop.gitbook.io/esp/">{btn_text}</Link>
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