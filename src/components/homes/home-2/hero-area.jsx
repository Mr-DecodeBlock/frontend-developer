import Link from 'next/link';
import React from "react";
import ArrowLine from '@/src/svg/arrow-line';
import RoundLine from '@/src/svg/round-line';
import useCharAnimation from '@/src/hooks/useCharAnimation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// img import 
import scroll_bg from "../../../../public/assets/img/hero/scroll-down.png";
import waves_bg from "../../../../public/assets/img/hero/background-hero.png";
import users_img from "../../../../public/assets/img/hero/hero-user.png";
import hero_shape_1 from "../../../../public/assets/img/hero/hero-img-2-14.png";
import coinBusi from "../../../../public/assets/img/hero/coin-busi.gif"
import hero_shape_2 from "../../../../public/assets/img/hero/image_02.png";
import hero_shape_3 from "../../../../public/assets/img/hero/coin.png"
import hero_shape_4 from "../../../../public/assets/img/hero/hero-img-2-4.png";
import hero_shape_5 from "../../../../public/assets/img/hero/coin.png";
import Waves from '../../waves/Waves';
import { Suspense } from 'react';

const titleStyle = {
  color: "#ffcc33",
  paddingBottom: "10px",
};

const space = {
  paddingBottom: "10px",
};



// hero_content
const hero_content = {
  bg_img: "/assets/img/hero/hero-bg-23.png",
  scroll_btn: "Scroll Down",
  title: <><i><i className="child-1" style={titleStyle}>BSP Chain</i> </i>{" "}
    <i><i className="child-1" style={space}>Pagos en línea</i> </i>{" "}
    <i><i className="child-1" style={space}>rápidos</i> </i>{" "}
    <i><i className="child-1" style={space}>y seguros.</i></i>
  </>,
  btn_text: "Comienza en BSP Chain",
  sub_title: <>Mas de<span>10k+ Clientes</span>en todo el mundo</>,

}

const {
  bg_img,
  scroll_btn,
  title,
  btn_text,
  sub_title,
} = hero_content;


const HeroArea = () => {
  const { t } = useTranslation();
  useCharAnimation('.tp-hero-2__title i.child-1');
  return (
    <>
      <div
        className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className='p-absolute w-100 bottom-0 bottom-lg-auto bottom-xl-auto ' style={{ right: "0" }}>
          {/* <Image src={waves_bg} alt="theme-pure" className='w-100'/> */}
          { /* COMPONENTE DE WAVES INTERACTIVO */}
          <Suspense fallback={null}>
            <Waves />
          </Suspense>
        </div>

        <div className="scroll-bg d-none d-sm-block">
          <Image src={scroll_bg} alt="theme-pure" />
        </div>

        <div className="tp-hero-2__mouse-scroll smooth d-none d-sm-block">
          <a className="mouse-scroll-btn" href="#revolutionizing-online-trading"></a>
          <span>{t('scrollDown')}</span>
        </div>

        {/* <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
          <ArrowLine />
        </div> */}
        <div className="container-fluid">
          <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center p-absolute"
            style={{ bottom: "0", width: "90%" }}>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__title-box">

                <h3 className="tp-hero-2__title tp-char-animation">
                  <>
                    <i>
                      <i className="child-1" style={titleStyle}>{t('bspChain')}</i>
                    </i>{" "}
                    <i>
                      <i className="child-1" style={space}>{t('quickOnlinePayments')}</i>
                    </i>{" "}
                    {/* <i>
                      <i className="child-1" style={space}>{t('fast')}</i>
                    </i>{" "} */}
                    <i>
                      <i className="child-1" style={space}>{t('andSecure')}</i>
                    </i>
                  </>
                </h3>

              </div>
              <div className="tp-hero-2__btn">
                <Link
                  className="tp-btn-green wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                  href="/register"
                >
                  {t("startInBspChain")}
                </Link>
              </div>
              <div className="tp-hero-2__user p-relative">
                <h4 className="tp-char-animation-2" > <>
                  {t('moreThan')}
                  <span>{t('clientsWorldwide')}</span>
                </></h4>
                <div className="tp-hero-2__user-img">
                  <Image src={users_img} alt="theme-pure" />
                </div>
                <div className="tp-hero-2__shape-1">
                  <RoundLine />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__right text-end p-relative h-100 pb-1 pl-15">
                <div className='h-100'>
                  <Image src={hero_shape_1} alt="theme-pure" className='h-100 p-relative' style={{ zIndex: "1" }} />
                  {/* <Image src={coinBusi} width={100} alt="theme-pure" className='p-absolute' 
                  style={{borderRadius: "50%", zIndex: "5", top: "30%", left: "25%"}}/> */}
                </div>

                {/* <div
                  className="tp-hero-2__sub-img-1 d-none d-sm-block"
                  data-parallax='{"x": 100, "smoothness": 30}' >
                  <Image src={hero_shape_2} alt="theme-pure" />
                </div> */}

                {/* <div
                  className="tp-hero-2__sub-img-2 d-none d-sm-block tp-account-shape-2"
                  data-parallax='{"x": -100, "smoothness": 10}' >
                  <Image src={hero_shape_3} alt="theme-pure" />
                </div> */}

                {/* <div
                  className="tp-hero-2__sub-img-3 d-none d-sm-block" style={{bottom: "17%"}}>
                  <Image src={hero_shape_4} alt="theme-pure" />
                </div> */}

                {/* <div className="tp-hero-2__sub-img-4 tp-account-shape-1">
                  <Image src={hero_shape_5} alt="theme-pure" />
                </div> */}
                <div className="tp-hero-2__sub-img-4" style={{ top: "-4%", right: "25%" }}>
                  <Image src={hero_shape_4} alt="theme-pure" width={120} style={{ position: "relative", zIndex: "2" }} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;