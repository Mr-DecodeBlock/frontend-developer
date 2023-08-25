import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./styles.module.css";


const testimonial_content = {
    bg_img: "/assets/img/testimonial/fondo.png",
    sub_title: "testimonialAreaDevSubtitle",
    title: <></>,
}
const { bg_img, sub_title, title } = testimonial_content


export const CardDevelop = ({ item }) => {

    const { t } = useTranslation();

    return (
        <div className={`ml-30 ${styles.cardDevelop}`}>
            <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center p-3"
                style={{ borderRadius: "22px 22px 0px 0px" }}>
                <div className="tp-testimonial-five-top-info d-flex align-items-center w-100">
                    <div className={`tp-testimonial-five-avata ${styles.cardConteinerImg}`} >
                        <Image src={item.author_img} alt="theme-pure" height={80} width={80} />
                    </div>
                    <div style={{width: "60%"}}>
                        <h4 className={`text-white ${styles.cardTitle}`}>{t(item.name)}</h4>
                        <span style={{ color: "#fff", fontSize: "20px", width: "100%"}}>{t(item.title)}</span>
                    </div>
                </div>
                <div className="tp-testimonial-five-brand d-none d-sm-block">
                </div>
            </div>
            <div className={`tp-testimonial-five-content d-flex align-items-center justify-content-center`} style={{height: "70%"}}>
                <p className='text-white' style={{fontSize: "26px"}}>{t(item.description)}</p>
            </div>
        </div>
    );
};