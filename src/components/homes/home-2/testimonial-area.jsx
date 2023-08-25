import StartIcon from '@/src/svg/start-icon';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';


// slider img import 
import slider_img_1 from "../../../../public/assets/img/testimonial/testi-icon-2-12.png";
import slider_img_2 from "../../../../public/assets/img/testimonial/testi-icon-2-13.png";
import slider_img_3 from "../../../../public/assets/img/testimonial/testi-icon-2-14.png";
import slider_img_4 from "../../../../public/assets/img/testimonial/testi-icon-2-15.png";
import slider_img_5 from "../../../../public/assets/img/testimonial/testi-icon-2-17.png";
import slider_img_6 from "../../../../public/assets/img/testimonial/testi-icon-2-16.png";
import { Col } from 'react-bootstrap';
// import shadow_img from "../../../../public/assets/img/testimonial/BODY.png";


const slider_data = [
    {
        id: 1,
        img: slider_img_1,
        name: "EVM Compatible",
        job: "Ethereum Virtual Machine",
        info: <>La cadena BSP ofrece la mejor compatibilidad con EVM.</>,

    },
    {
        id: 2,
        img: slider_img_2,
        name: "API de CriptoActivos",
        job: "CriptoActivos",
        info: <>Ofrecemos soporte completo para todas los cripto más populares.</>,

    },
    {
        id: 3,
        img: slider_img_3,
        name: "Rápido y Económico",
        job: "Transacciones",
        info: <>Transacciones EVM más rápidas con tarifas  más económicas.</>,

    },
    {
        id: 4,
        img: slider_img_4,
        name: "Consenso",
        job: "Algoritmo de consenso",
        info: <>Basados en un algoritmo de consenso que valida cada transacción.</>,

    },
    {
        id: 5,
        img: slider_img_5,
        name: "Data Storage",
        job: "Almacenamiento de datos",
        info: <>Información personal y transaccional protegida en todo momento.</>,

    },
    {
        id: 6,
        img: slider_img_6,
        name: "Privacidad y Seguridad",
        job: "Seguridad",
        info: <>Encriptación de extremo a extremo con protocolos de seguridad.</>,

    },
]

// slider setting 
const setting = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
}
 

const testimonial_content = {
    bg_img: "/assets/img/testimonial/fondo.png",
    title: <>Programas para <br />desarrolladores</>,
    des: <>Nos enorgullece ofrecer una plataforma de desarrollo en la cadena BSP</>,
}
const { bg_img, title, des } = testimonial_content
const TestimonialArea = () => {
    const sliderRef = useRef()
    return (
        <>
            <div className="tp-testimonial-2-area pt-110 pb-120"
                style={{ backgroundImage: `url(${bg_img})` }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="tp-testimonial-2-section-box mb-15 text-center">
                                <h3 className="tp-section-title-lg text-white">{title}</h3>
                                <p className="text-white">{des}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-12">
                            <div className="tp-testimonial-2-section">

                                <Slider
                                    {...setting}
                                    ref={sliderRef}
                                    className="tp-testimonial-2-slider-active"
                                    >
                                    {slider_data.map((item, i) =>
                                        <div key={i} className="p-relative wow tpfadeUp bg-white rounded" data-wow-duration=".9s" data-wow-delay=".3s">
                                            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center rounded ">
                                                <p className='text-white text-center mt-4'>{item.info}</p>
                                            </div>
                                            {/* aqui----------------------------------------------------------------BLANCO  */}
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                                    <div className="tp-testimonial-five-avata">
                                                        <Image src={item.img} alt="theme-pure" />
                                                    </div>
                                                    <div className="tp-testimonial-five-author-info">
                                                        <h5>{item.name}</h5>
                                                        <span>{item.job}</span>
                                                    </div>
                                                </div>
                                                <div className="tp-testimonial-five-brand d-none d-sm-block">
                                                    {/* <Image src={item.brand_icon} alt="theme-pure" /> */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialArea;