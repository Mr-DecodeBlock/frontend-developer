import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./styles.module.css";
import Slider from 'react-slick';


import logo from "@/public/assets/img/documentation/hola.gif"
import bigGear from '@/public/assets/img/layers/big-gear.png'
import flash2 from '../../../../../public/assets/img/home-revolution/flash2.svg'
import { useRouter } from 'next/router';

export const SectionDocumentation = () => {
    const { t } = useTranslation();
    const router = useRouter()
    return (
        <>
            <div className={`tp-service-2__area d-flex justify-content-center ${styles.container}`}>
            <Image src={bigGear} alt='img' className={styles.bigGear}/>
                <div className={`d-flex justify-content-center align-item-center 
                flex-column-reverse flex-lg-row p-4 pt-60 pb-60 p-lg-5 ${styles.documentation}`}>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <div className="tp-service-2__section-box">
                            <h4 className={`${styles.documentationTitle} text-white text-center text-lg-start`}>
                                {t('home.documentation.title')}
                                <span style={{ color: "#FFA80F" }}>{t('home.documentation.documentation')}</span>
                            </h4>
                            <br />
                            <p className='mb-25 lh-sm text-white text-center text-lg-start lh-sm' style={{ fontSize: "24px" }}>
                                <>{t('home.documentation.proud')}</>
                            </p>
                        </div>
                        <div className='d-flex justify-content-lg-start justify-content-center w-100'>
                            <div className="tp-btn-green alt-color-black" onClick={()=>router.push("/privacy-policies")}>
                                <span className='mt-4'>{t('home.documentation.ask')}</span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-5 d-flex justify-content-center align-item-center mb-4' style={{ height: "100%" }}>
                        <Image src={flash2} alt="flash" className={styles.flash1} />
                        <Image src={flash2} alt="flash" className={styles.flash2} />
                        <Image src={flash2} alt="flash" className={styles.flash3} />
                        <Image src={logo} />
                    </div>

                </div>
            </div>
        </>
    );
};