import service_data from '@/src/data/service-data';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import img from "../../../../public/assets/img/service/service-shape-right.png";


const service_content = {
    sub_title: "WHAT WE DO",
    title: "Plataforma líder de Crypto Trading",
    description: <>Un lugar para comprar, vender, intercambiar e inviertir de manera segura y sencilla.</>,
}
const {sub_title, title, description}  = service_content


const ServiceArea = () => {
    return (
        <>
           <div className="tp-service-area white-bg p-relative pt-115 pb-105">
               <div className="tp-service-shape-right z-index">
                  <Image src={img} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row align-items-end mb-60">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tp-service-section">
                           {/* <h5 className="tp-section-subtitle-4 pb-10">{sub_title}</h5> */}
                           <h3 className="tp-section-title-lg" style={{color:"orange"}}>{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sction-content pb-15 d-flex justify-content-md-start justify-content-end">
                           <p>{description}</p>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-4-border-top  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                     <div className="row">
                        {service_data.slice(9, 13).map((item , i) => 
                            <div key={i} className={`col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-${item.cls}`}>
                                <div className="tp-service-5-item z-index">
                                    <div className="tp-service-4-icon" style={{backgroundImage:'url{item.img}'}}>
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="tp-service-5-content">
                                        <span>{item.description}</span>
                                        <h4 className="tp-service-5-title"><Link href="/service-details">{item.title}</Link></h4>
                                        {/*<Link className="tp-btn-orange" href="/service-details">Ver más</Link>*/}
                                    </div>
                                </div>
                            </div>
                        )}          
                     </div>
                  </div>
               </div>
            </div> 
        </>
    );
};

export default ServiceArea;