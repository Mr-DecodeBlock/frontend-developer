import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

// img import 
// import  shapes_1 from "../../../../public/assets/img/payment/qrcode.png" ;
import shapes_2 from "../../../../public/assets/img/icons/difuminar.png";
import shapes_3 from "../../../../public/assets/img/icons/cuadricula.png";
import shapes_4 from "../../../../public/assets/img/icons/desarrollador.png";
// import  shapes_3 from "../../../../public/assets/img/payment/hand.png" ;
// import shapes_4 from "../../../../public/assets/img/payment/coin-1.png";
import shapes_5 from "../../../../public/assets/img/payment/coin-2.png";
import shapes_6 from "../../../../public/assets/img/payment/pay.png";
import shapes_7 from "../../../../public/assets/img/payment/LogoEther250.gif";
import bg_img from "../../../../public/assets/img/payment/background.png";
import payment_img_1 from "../../../../public/assets/img/payment/image2.png";
import payment_img_2 from "../../../../public/assets/img/payment/paid.png";
import waves_bg from "../../../../public/assets/img/hero/background-hero.png";



const titleStyle = {
    color: "#ffcc33",
};


const payment_content = {
    title: <>Revolucionando <br /> el comercio en línea.</>,
    sub_title: <>Introducción a BSP Chain</>,
    box_1: [
        {
            id: 1,
            col: "md-6",
            cls: "2 tpfadeLeft",
            delay: ".3s",
            title: "titleBox1",
            des: "descripcionBox1",
            img: shapes_2,
            shapes: [
                /*{
                    id: 1, 
                    cls: "4",
                    img: shapes_1,
                },*/
                {
                    id: 2,
                    cls: "5",
                    img: shapes_2,
                },
                /*{
                    id: 3, 
                    cls: "6",
                    img: shapes_3,
                },
                {
                    id: 4, 
                    cls: "7",
                    img: shapes_4,
                },
                {
                    id: 5, 
                    cls: "8",
                    img: shapes_5,
                },*/
            ]

        },
        {
            id: 2,
            col: "md-6",
            cls: "3 tpfadeRight",
            delay: ".5s",
            title: "Ethereum Virtual Machine",
            des: "descripcionBox2",
            img: shapes_3,
            shapes: [
                // {
                //     id: 1, 
                //     cls: "9",
                //     img: shapes_6,
                // },
                {
                    id: 2,
                    cls: "11",
                    img: shapes_7,
                },

            ]

        },
        {
            id: 3,
            col: "md-6",
            cls: "3 tpfadeRight",
            delay: ".5s",
            title: "Arquitectura BlockChain",
            des: "descripcionBox3",
            img: shapes_4,
            shapes: [
                // {
                //     id: 1, 
                //     cls: "9",
                //     img: shapes_6,
                // },
                {
                    id: 2,
                    cls: "11",
                    img: shapes_7,
                },

            ]

        },




    ],
    box_3_title: <>Arquitectura <br /> Blockchain.</>,
    box_3_des: "descripcionBox3",
    box_3_btn: "buttonBox3",

}
const { title, sub_title, box_1, box_3_title, box_3_des, box_3_btn } = payment_content

const PaymentArea = () => {

    const rotationRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const rotationElement = rotationRef.current;

        gsap.to(rotationElement, {
            rotation: 360, // Rotar 360 grados
            repeat: -1, // Repetir la animación infinitamente
            ease: "linear", // Utilizar una animación lineal sin aceleración
            duration: 5, // Ajustar la duración de la animación a 5 segundos (o el valor que desees)
        });

        return () => {
            gsap.killTweensOf(rotationElement); // Detener la animación al desmontar el componente
        };
    }, []);


    return (
        <>
            <div id="revolutionizing-online-trading" className="tp-payment__area pt-110 pb-110 mb-100">
                <div className='p-absolute w-100'>
                    <Image src={waves_bg} alt="theme-pure" className='w-100 h-100'/>
                </div>
                <div className="container dark-bg p-5 mb-200" style={{ borderRadius: "26px" }}>
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="tp-payment__title-box text-center mb-55">
                                <h2 className="tp-section-title-lg text-white mt-55 ">
                                    <>{t("revolutionizing")} <br /> {t("onlinetrading")}.</>
                                </h2>
                                {/* <p><>{t("introductiontoBSPChain")}</></p> */}
                                <h3 className='mt-35' style={{ color: "orange" }}><>¡ Descrube la nueva era !</></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ height: "15rem" }}>
                        <div className="container">
                            <div className="row p-relative d-flex flex-column flex-md-row" style={{ top: "30%"}}>
                                {box_1.map((item, i) =>
                                    <div key={i} className="col mb-30 w-100">
                                        <div className={`swiper-slide tp-testimonial-five-item swiper-slide-next p-relative wow p-3 d-flex flex-column justify-content-around aling-items-center`}
                                            data-wow-duration=".9s"
                                            data-wow-delay={item.delay}
                                            style={{ backgroundColor: "#FFFFFF", width: "90%", margin: "auto",
                                                     display: "grid", boxShadow: "#444444 -2px 2px 7px 0px"}}>
                                            {/* {item.shapes.map((item, i) =>
                                                <div key={i} className={`tp-payment__shape-${item.cls}`}>
                                                    <Image src={item.img} alt="theme-pure" />
                                                </div>
                                            )} */}
                                            <div>
                                                <Image src={item.img} width={30} className='ml-5'/>
                                            </div>
                                            <div className="w-100 text-center d-grid pt-10">
                                                <h5 className="text-start" style={{ color: "orange" }}>{t(item.title)}</h5>
                                                <p className='text-start'> {t(item.des)}</p>
                                            </div>

                                            <Link href="#"> <h5 className='text-warning'>Saber mas <i className="fas fa-arrow-right"></i></h5></Link>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>

                        {/* <div className="col-xl-12 mb-30">
                        <div className="tp-payment__item p-relative z-index wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className="tp-payment__shape-1">
                              <Image src={bg_img} alt="theme-pure" />
                           </div>
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="tp-payment__content tp-payment__content-space">
                                    <h3 className="tp-payment__title text-white" style={titleStyle}>{box_3_title}</h3>
                                    <p className="text-white">{t(box_3_des)}</p>
                                    <Link href="https://businessshop.gitbook.io/esp/" className="" style={titleStyle}>{t(box_3_btn)}<i className="far fa-arrow-right" style={titleStyle}></i></Link>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="tp-payment__shape-2">
                                    <Image src={payment_img_1} alt="theme-pure" />
                                 </div>
                                 <div className="tp-payment__shape-3 d-none d-sm-block" ref={rotationRef}>
                                    <Image src={payment_img_2} alt="theme-pure" />
                                </div>
                              </div>
                           </div>
                        </div>
                     </div> */}

                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentArea;
