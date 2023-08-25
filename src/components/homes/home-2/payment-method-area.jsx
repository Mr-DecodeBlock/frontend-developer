import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { useTranslation } from 'react-i18next';

// payment img import 
// payment img import 
import logo from "../../../../public/assets/img/wallet/payment-methods/logo.svg";
import americanExpress from "../../../../public/assets/img/wallet/payment-methods/american-express.svg";
import payment_img_2 from "../../../../public/assets/img/wallet/payment-methods/bitcoin.svg";
import businessShop from "../../../../public/assets/img/wallet/payment-methods/business-shop.svg";
import diners from "../../../../public/assets/img/wallet/payment-methods/dinner.svg";
import googlePay from "../../../../public/assets/img/wallet/payment-methods/google-pay.svg";
import master from "../../../../public/assets/img/wallet/payment-methods/master.svg";
import paypal from "../../../../public/assets/img/wallet/payment-methods/paypal.svg";
import bitcoin from "../../../../public/assets/img/wallet/payment-methods/bitcoin.svg";

import stripe from "../../../../public/assets/img/wallet/payment-methods/stripe.svg";
import visa from "../../../../public/assets/img/wallet/payment-methods/visa.svg";
import payment_img_10 from "../../../../public/assets/img/payment-logo/pay10.png";
import payment_img_11 from "../../../../public/assets/img/payment-logo/pay11.png";
import payment_img_12 from "../../../../public/assets/img/payment-logo/pay12.png";
import payment_img_13 from "../../../../public/assets/img/payment-logo/pay13.png";
import payment_img_14 from "../../../../public/assets/img/payment-logo/pay14.png";

import payment_img_15 from "../../../../public/assets/img/payment-logo/logo-9.png";
import payment_img_16 from "../../../../public/assets/img/payment-logo/logo-8.png";

//Aca
// slider img import here
const integration_content = {
  sub_title: "sliderSubTitle",
  title2: "sliderTitle",
  int_title: "sliderTitle",
  btn_text: "sliderBtn",
  bg_img: "/assets/img/integration/integration-bg.jpg"
}

const slider_one_data = [
  americanExpress,
  payment_img_2,
  businessShop,
  diners,
  visa,
  master,
  paypal,
]
const slider_two_data = [
  stripe,
  googlePay,
  payment_img_10,
  payment_img_11,
  payment_img_12,
  payment_img_13,
  payment_img_14,
]


// slider one setting 
const setting_one = {
  speed: 12000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      }
    },
    {
      breakpoint: 992,
      settings: {
      }
    },
    {
      breakpoint: 768,
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

// slider two setting 
const setting_two = {
  speed: 12000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      }
    },
    {
      breakpoint: 992,
      settings: {
      }
    },
    {
      breakpoint: 768,
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


const payment_method_info = {
  title: <>Todos los principales <br /> métodos de pago</>,
  desctiption: <>Gestiona tus fondos de manera segura con BusinessShop Wallet</>,

}

const payment_method = [
  // {
  //   id: 1,
  //   line_circle: 1,
  //   cls: "",
  //   img: stripe,
  // },
  // {
  //   id: 2,
  //   line_circle: 2,
  //   cls: "d-none d-lg-block",
  //   img: stripe,
  // },
  {
    id: 3,
    line_circle: 3,
    cls: "",
    img: stripe,
  },
  {
    id: 4,
    line_circle: 4,
    cls: "d-none d-lg-block",
    img: businessShop,
  },
  {
    id: 5,
    line_circle: 5,
    cls: "",
    img: visa,
  },
  {
    id: 6,
    line_circle: 6,
    cls: "d-none d-lg-block",
    img: diners,
  },
  // {
  //   id: 7,
  //   line_circle: 7,
  //   cls: "",
  //   img: paypal,
  // },
  // {
  //   id: 8,
  //   line_circle: 8,
  //   cls: "d-none d-lg-block",
  //   img: americanExpress,
  // },
  {
    id: 9,
    line_circle: 9,
    cls: "",
    img: americanExpress,
  },
  // {
  //   id: 10,
  //   line_circle: 10,
  //   cls: "d-none d-lg-block",
  //   img: googlePay,
  // },
  // {
  //   id: 11,
  //   line_circle: 11,
  //   cls: "",
  //   img: paypal,
  // },
  {
    id: 12,
    line_circle: 12,
    cls: "d-none d-lg-block",
    img: googlePay,
  },
  // {
  //   id: 13,
  //   line_circle: 13,
  //   cls: "",
  //   img: paypal,
  // },
  {
    id: 14,
    line_circle: 14,
    cls: "d-none d-lg-block",
    img: paypal,
  },
  
  {
    id: 16,
    line_circle: 16,
    cls: "",
    img: master,
  },
  {
    id: 2,
    line_circle: 2,
    cls: "",
    img: bitcoin,
  },
]

export const PaymentsMethod = ({screenWidth}) => {
  return (
    <div className="col-12">
      <div className="tp-payment-method__wrapper text-center p-relative">
        <div className="tp-payment-method__main-circle p-relative z-index">
          <div className="tp-payment-method__main-img z-index-3" style={screenWidth<1200 ? {scale:"0.75"}:{scale:"1"}}>
            <Image src={logo} alt="theme-pure" />
          </div>

          {payment_method.map((item, i) => (
            <div key={i} className={`tp-payment-method__line-${item.line_circle} ${item.cls}`} >
              <div className={`tp-payment-method__circle circle-${item.line_circle}`}></div>
              <span>
                <Image src={item.img} alt="theme-pure" style={screenWidth<1200 ? {scale:"0.75"}:{scale:"1"}}/>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const { title, desctiption } = payment_method_info
const PaymentMethodArea = ({screenWidth}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="tp-payment-method__space mt-600">
        <div className="container-fluid g-0">
          <div className="row g-0 justify-content-center">
            <div className="col-xl-7">
              <div className="tp-payment-method__title-box text-center mb-20">
                <h3 className="tp-section-title-lg pb-10">
                  <>{t("allmajor")}<br /> {t("paymentmethods")}</>
                </h3>
                <p className='text-warning'>{t("Gestiona tus fondos de manera segura con BusinessShop Wallet")}</p>
              </div>
            </div>
          </div>
          <div className="row g-0">

            <PaymentsMethod screenWidth={screenWidth}/>

            <div className="tp-integration-slider-wrapper pt-50 pb-50">
              <Slider {...setting_one} className="tp-integration-slider-active">
                {slider_one_data.map((item, i) =>
                  <div key={i} className="tp-integration-slider-main slick-slide">
                    <div className="tp-integration-slider-item">
                      <Image src={item} alt="theme-pure" />
                    </div>
                  </div>
                )}
              </Slider>
              <Slider {...setting_two} className="tp-integration-slider-active-2 carousel-rtl" dir="rtl">
                {slider_two_data.map((item, i) =>
                  <div key={i} className="tp-integration-slider-main slick-slide">
                    <div className="tp-integration-slider-item">
                      <Image src={item} alt="theme-pure" />
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

export default PaymentMethodArea;