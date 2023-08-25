// import Link from 'next/link';
// import Image from 'next/image';
// import React from 'react';

// // images import 
// import about_img_1 from "../../public/assets/img/about/about-bg-shape.png"
// import about_img_2 from "../../public/assets/img/hero/hero-img-3-1.png"
// import about_img_3 from "../../public/assets/img/about/about-1.jpg"
// import about_img_4 from "../../public/assets/img/card/sale-2.png"
// import about_img_5 from "../../public/assets/img/cta/cta-shape-5-1.png"

// // about data
// const about_data =[
//     {
//         id: 1, 
//         cls: "bg-shape",
//         img: about_img_1
//     },
//     {
//         id: 2, 
//         cls: "main-img z-index",
//         img: about_img_2
//     },
//     // {
//     //     id: 3, 
//     //     cls: "sub-img-1 d-none d-sm-block z-index-3",
//     //     img: about_img_3
//     // },
//     // {
//     //     id: 4, 
//     //     cls: "sub-img-2 d-none d-sm-block",
//     //     img: about_img_4
//     // },
//     {
//         id: 5, 
//         cls: "sub-img-3 d-none d-sm-block z-index-3",
//         img: about_img_5
//     },
// ]

// // about content
// const about_content = {
//     title: "OVER 150K+ CLIENT",
//     sub_title: "¿Cómo ganar?", 
//     des: <>Excepteur sint occaecat cupidatat officia non proident <br />
//     sunt in culpa qui deserunt.!</>,

//     about_list: [
//         <>Various analysis options.</>,
//         <>Page Load (time, size, number of requests).</>,
//         <> Big data analysis.</>,
//     ],
//     btn_text: "About Us",

// }
// const {title, sub_title, des, about_list, btn_text}  = about_content


// const AboutAreaTwo = () => {
//     return (
//         <>
//             <div className="tp-about__area tp-about__pt-pb pt-100 pb-160">
//                <div className="container">
//                   <div className="row align-items-center">
//                      <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
//                         <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
//                             {about_data.map((item, i)  => 
//                                 <div key={i} className={`tp-about__${item.cls}`}>
//                                     <Image src={item.img} alt="theme-pure" />
//                                 </div>
//                             )} 
//                         </div>
//                      </div>
//                      <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
//                         <div className="tp-about__right">
//                            <div className="tp-about__section-box">
//                               <h4 className="inner-section-subtitle">{title}</h4>
//                               <h3 className="tp-section-title mb-15">{sub_title}</h3>
//                               <p>{des}</p>
//                            </div>
//                            <div className="tp-about-2__list">
//                               <ul>
//                                 {about_list.map((item , i)  =>  <li key={i}><i className="fal fa-check"></i>{item}</li>)}
//                               </ul>
//                            </div>
//                            <div className="tp-about__btn">
//                               <Link className="tp-btn-orange" href="/about">
//                                  <span>{btn_text}</span>
//                                  <b></b>
//                               </Link>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//         </>
//     );
// };

// export default AboutAreaTwo;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import card_img_1 from "../../public/assets/img/card/Maximizacion.jpg";
import card_img_2 from "../../public/assets/img/card/card-shape-1.png";


const card_content = {
    card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: card_img_1,
        },
        {
            id: 2,
            cls: "img-1 d-none d-sm-block",
            data_parallax: "",
            img: card_img_2,
        }
    ],
}
const { card_images } = card_content



// about content
const about_content = {
    //title: "OVER 150K+ CLIENT",
    title: "¿Cómo ganar?",
    des: <>Maximiza tu potencial de ingresos siguiendo estos pasos clave y obtén un porcentaje por cada referido</>,

    about_list: [
        <>Ingresa a tu cuenta de BSPwallet a traves de la plataforma web.</>,
        <>Has click en invita y gana</>,
        <>Copia el código que encontraras en la página.</>,
        <>Comparte el código con tu familia y amigos.</>,
    ],
    btn_text: "Invitar Ahora",

}
const { title, sub_title, des, about_list, btn_text } = about_content

const CardArea = ({ style_service }) => {
    return (
        <>
            <div className="tp-card-area tp-card-space pt-175 pb-185">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                            <div className="tp-card-thumb-wrapper p-relative">
                                {card_images.map((item, i) =>
                                    <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                            <div className="tp-about__right">
                                <div className="tp-about__section-box">
                                    <h3 className="tp-section-title mb-15" style={{color: "orange"}}>{title}</h3>
                                    <p>{des}</p>
                                </div>
                                <div className="tp-about-2__list">
                                    <ul>
                                        {about_list.map((item, i) => <li key={i}><i className="fal fa-check"></i>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="tp-about__btn">
                                    <Link className="tp-btn-green" href="/about">
                                        <span>{btn_text}</span>
                                        <b></b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardArea;