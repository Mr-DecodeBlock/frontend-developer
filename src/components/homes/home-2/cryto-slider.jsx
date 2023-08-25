import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

// slider img import here
import slider_img_1_1 from "../../../../public/assets/img/integration/Bitcoin.png";
import slider_img_1_2 from "../../../../public/assets/img/integration/BNB.png";
import slider_img_1_3 from "../../../../public/assets/img/integration/Cardano.png";
import slider_img_1_4 from "../../../../public/assets/img/integration/Dash.png";

import slider_img_2_1 from "../../../../public/assets/img/integration/Ethereum.png";
import slider_img_2_2 from "../../../../public/assets/img/integration/Litecoin.png";
import slider_img_2_3 from "../../../../public/assets/img/integration/Polygon.png";
import slider_img_2_4 from "../../../../public/assets/img/integration/Rally.png";

import slider_img_3_1 from "../../../../public/assets/img/integration/Theter.png";
import slider_img_3_2 from "../../../../public/assets/img/integration/USDC.png";
import slider_img_3_3 from "../../../../public/assets/img/integration/XRP.png";
import slider_img_3_4 from "../../../../public/assets/img/integration/Zcash.png";


const integration_content = {
    sub_title: "sliderSubTitle",
    title: "sliderTitle",
    int_title: "sliderTitle",
    btn_text: "sliderBtn",
    bg_img: "/assets/img/integration/integration-bg.jpg"
}
const { sub_title, title, int_title, btn_text, bg_img } = integration_content


const slider_one_data = [
    slider_img_1_1,
    slider_img_1_3,
    slider_img_1_2,
    slider_img_1_4,
]

const slider_two_data = [
    slider_img_2_1,
    slider_img_2_2,
    slider_img_2_3,
    slider_img_2_4,
]

const slider_three_data = [
    slider_img_3_1,
    slider_img_3_2,
    slider_img_3_3,
    slider_img_3_4,
]

// slider one setting 
const setting_one = {
    speed: 4000,  // Velocidad de transición en milisegundos
    autoplay: true,  // Reproducción automática activada
    autoplaySpeed: 0,  // Tiempo de espera entre diapositivas en milisegundos
    centerMode: true,  // Centrar las diapositivas
    cssEase: 'linear',  // Tipo de animación de transición
    slidesToShow: 3,  // Muestra solo una diapositiva a la vez
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    vertical: true,  // Establece el modo vertical
    verticalSwiping: false,  // Permite deslizar verticalmente
    arrows: false,  // Oculta las flechas de navegación
    dots: false,  // Oculta los puntos de navegación
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                // Propiedades específicas para pantallas con ancho de 1200px o menos
            }
        },
        {
            breakpoint: 992,
            settings: {
                // Propiedades específicas para pantallas con ancho de 992px o menos
            }
        },
        {
            breakpoint: 768,
            settings: {
                // Propiedades específicas para pantallas con ancho de 768px o menos
            }
        },
        {
            breakpoint: 480,
            settings: {
                // Propiedades específicas para pantallas con ancho de 480px o menos
            }
        }
    ]
};

const setting_two = {
    speed: 4000,  // Velocidad de transición en milisegundos
    autoplay: true,  // Reproducción automática activada
    autoplaySpeed: false,  // Tiempo de espera entre diapositivas en milisegundos
    centerMode: false,  // Centrar las diapositivas
    cssEase: 'linear',  // Tipo de animación de transición
    slidesToShow: 3,  // Muestra solo una diapositiva a la vez
    vertical: true,  // Establece el modo vertical
    verticalSwiping: true,  // Permite deslizar verticalmente
    arrows: false,  // Oculta las flechas de navegación
    dots: false,  // Oculta los puntos de navegación
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                // Propiedades específicas para pantallas con ancho de 1200px o menos
            }
        },
        {
            breakpoint: 992,
            settings: {
                // Propiedades específicas para pantallas con ancho de 992px o menos
            }
        },
        {
            breakpoint: 768,
            settings: {
                // Propiedades específicas para pantallas con ancho de 768px o menos
            }
        },
        {
            breakpoint: 480,
            settings: {
                // Propiedades específicas para pantallas con ancho de 480px o menos
            }
        }
    ]
};
const IntegrationArea = ({ style_integraton }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="tp-integration-area pb-110 tp-integration-mlr">
                <div className='container'>
                    <div className='d-flex flex-column flex-lg-row flex-xl-row' style={{gap: "5px"}}>
                        <div className="col-xl-6 col-lg-6" >
                            <div className="row align-items-end tp-integration-section-space">
                                <div className="p-0 wow" data-wow-duration=".9s" data-wow-delay=".5s">
                                    <div className="tp-integration-section-box p-4">
                                        {style_integraton ?
                                            <>
                                                <h5 className="tp-section-subtitle-2">{t(sub_title)}</h5>
                                                <h3 className="tp-section-title-lg">{t(int_title)}</h3>
                                            </>
                                            :
                                            <>
                                                {/* <h5 className="tp-section-subtitle-2">{t(sub_title)}</h5> */}
                                                <h1>{"Aceptamos las opciones que mejor se ajusten a tus necesidades."}</h1>
                                                <p className='text-black mt-4'>¡Descubre un mundo de posibilidades con nuestra amplia variedad de criptomonedas! En nuestra plataforma, aceptamos múltiples opciones que se adaptan a tus necesidades y preferencias. Ya sea que estés buscando invertir, realizar pagos rápidos o aprovechar las ventajas de la tecnología blockchain, estamos aquí para guiarte en cada paso del camino. </p>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4 wow tpfadeRight mt-4" data-wow-duration=".9s" data-wow-delay=".7s">
                                    <div className="tp-integration-btn text-lg-end text-start">
                                        <Link className="tp-btn-green  alt-color-black" href="https://businessshop.gitbook.io/esp/">
                                            <span className='mt-4'>{t(btn_text)}</span>
                                            <b></b>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center"
                            style={{ backgroundImage: `url(${bg_img})` }}>

                            <Slider {...setting_one} className="d-flex justify-content-center">
                                {slider_one_data.map((item, i) =>
                                    <div key={i} className="h-100 d-flex justify-content-center">
                                        <div className="h-100 mt-3 d-flex justify-content-center">
                                            <Image src={item} alt="theme-pure" width={100} />
                                        </div>
                                    </div>
                                )}
                            </Slider>

                            <Slider {...setting_two} className="d-flex justify-content-center">
                                {slider_two_data.map((item, i) =>
                                    <div key={i} className="h-100 d-flex justify-content-center">
                                        <div className="h-100 mt-3 d-flex justify-content-center">
                                            <Image src={item} alt="theme-pure" width={100} />
                                        </div>
                                    </div>
                                )}
                            </Slider>
                            <Slider {...setting_two} className="d-none d-md-flex d-lg-flex d-xl-flex justify-content-center">
                                {slider_three_data.map((item, i) =>
                                    <div key={i} className="h-100 d-flex justify-content-center">
                                        <div className="h-100 mt-3 d-flex justify-content-center">
                                            <Image src={item} alt="theme-pure" width={100} />
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntegrationArea;