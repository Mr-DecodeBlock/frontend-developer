import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import difusser from "../../../../../public/assets/img/payment-logo/difusser.png";

// payment img import
import payment_img_1 from "../../../../../public/assets/img/payment-logo/pay1-2.png";
import payment_img_2 from "../../../../../public/assets/img/payment-logo/pay2-2.png";
import payment_img_3 from "../../../../../public/assets/img/payment-logo/pay3-2.png";
import payment_img_4 from "../../../../../public/assets/img/payment-logo/pay4-2.png";
import payment_img_5 from "../../../../../public/assets/img/payment-logo/pay5-2.png";
import payment_img_6 from "../../../../../public/assets/img/payment-logo/pay6-2.png";
import payment_img_7 from "../../../../../public/assets/img/payment-logo/pay7-2.png";
import payment_img_8 from "../../../../../public/assets/img/payment-logo/pay8-2.png";
import payment_img_9 from "../../../../../public/assets/img/payment-logo/pay9-2.png";
import payment_img_10 from "../../../../../public/assets/img/payment-logo/pay10-2.png";
import payment_img_11 from "../../../../../public/assets/img/payment-logo/pay11-2.png";

import payment_img_12 from "../../../../../public/assets/img/payment-logo/pay12-2.png";
import payment_img_13 from "../../../../../public/assets/img/payment-logo/pay13-2.png";
import payment_img_14 from "../../../../../public/assets/img/payment-logo/pay14-2.png";
import payment_img_15 from "../../../../../public/assets/img/payment-logo/pay15-2.png";
import payment_img_16 from "../../../../../public/assets/img/payment-logo/pay16-2.png";
import payment_img_17 from "../../../../../public/assets/img/payment-logo/pay17-2.png";
import payment_img_18 from "../../../../../public/assets/img/payment-logo/pay18-2.png";
import payment_img_19 from "../../../../../public/assets/img/payment-logo/pay19-2.png";
import payment_img_20 from "../../../../../public/assets/img/payment-logo/pay20-2.png";
import payment_img_21 from "../../../../../public/assets/img/payment-logo/pay21-2.png";
import payment_img_22 from "../../../../../public/assets/img/payment-logo/pay22-2.png";
import payment_img_23 from "../../../../../public/assets/img/payment-logo/pay23-2.png";

import flash1 from "../../../../../public/assets/img/home-revolution/flash1.svg";
import flash2 from "../../../../../public/assets/img/home-revolution/flash2.svg";
import SliderComponentPayment from "./sliderComponentPayment";
import SliderComponentVerticalPayment from "./sliderComponentVerticalPayment";

//Aca
// slider img import here
const integration_content = {
  sub_title: "sliderSubTitle",
  title2: "sliderTitle",
  int_title: "sliderTitle",
  btn_text: "sliderBtn",
  bg_img: "/assets/img/integration/integration-bg.jpg",
};

const slider_one_data = [
  payment_img_1,
  payment_img_2,
  payment_img_3,
  payment_img_4,
  payment_img_5,
  payment_img_6,
  payment_img_7,
  payment_img_8,
  payment_img_9,
  payment_img_10,
  payment_img_11,
];
const slider_two_data = [
  payment_img_12,
  payment_img_13,
  payment_img_14,
  payment_img_15,
  payment_img_16,
  payment_img_17,
  payment_img_18,
  payment_img_19,
  payment_img_20,
  payment_img_21,
  payment_img_22,
  payment_img_23,
];

export const SectionPaymentMethod = () => {
  const { t } = useTranslation();
  const [isVertical, setIsVertical] = useState(false);

  // slider one setting
  const setting_one = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    infinite: true,
    vertical: isVertical,
    arrows: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  // slider two setting
  const setting_two = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    infinite: true,
    vertical: isVertical,
    arrows: false,
    buttons: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 770px)");
    setMatches(mediaQuery.matches);

    const handler = (e) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <div id="linkPrincipalPay" className={styles.paymentMethod}>
        <Image src={flash1} alt="flash" className={styles.flash1} />
        <Image src={flash2} alt="flash" className={styles.flash2} />
        <div className="container-fluid g-0">
          <div className={styles.textContainer}>
            <div className={styles.textSection}>
              <div className={styles.textSection_title}>
                <h3>
                  {t('home.paymentMethods.main')}
                  <span style={{ color: "#FF9356" }}>{t('home.paymentMethods.payment')}</span> <br />{t('home.paymentMethods.methods')}
                </h3>
              </div>
              <div className={styles.textSection_description}>
                <p>
                {t('home.paymentMethods.management')}
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0 d-flex justify-content-center">
            {!matches ? (
              <>
                <SliderComponentPayment
                  images={slider_one_data}
                  perView={4}
                  direction={1}
                />
                <SliderComponentPayment
                  images={slider_two_data}
                  perView={4}
                  direction={-1}
                />
              </>
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100 p-relative">
                <SliderComponentVerticalPayment
                  images={slider_two_data}
                  perView={5}
                  direction={1}
                />
                <SliderComponentVerticalPayment
                  images={slider_two_data}
                  perView={5}
                  direction={-1}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
