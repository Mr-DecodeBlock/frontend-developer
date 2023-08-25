import Link from 'next/link';
import React, { useRef } from "react";
import useCharAnimation from '@/src/hooks/useCharAnimation';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// img import 
import scroll_bg from "../../../public/assets/img/hero/scroll-down.png";
import waves_bg from "../../../public/assets/img/hero/background-hero.png";
import useBreadcrumbTitleAnime from "@/src/hooks/useBreadcrumbTitleAnime";

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
} = hero_content;


const BreadcrumbNine = ({title, innertitle, team_details, career_details}) => {
  const { t } = useTranslation();
  const { animeRef } = useBreadcrumbTitleAnime();
  let subtitleRef = useRef(null);
  useTitleAnimation(subtitleRef);
  useCharAnimation('.tp-hero-2__title i.child-1');
  return (
    <>
      <div
        className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className='p-absolute w-100' style={{right: "0", top: "-40%"} }>
        <Image src={waves_bg} alt="theme-pure" className='w-100'/>
        </div>
        <div className="scroll-bg d-none d-sm-block">
          <Image src={scroll_bg} alt="theme-pure" />
        </div>
        <div className="tp-hero-2__mouse-scroll smooth d-none d-sm-block">
          <a className="mouse-scroll-btn" href="#"></a>
          <span>{t('scrollDown')}</span>
        </div>
        {/* <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
          <ArrowLine />
        </div> */}
        <div className="container mb-150">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb__content w-100">
                <h3
                  ref={animeRef}
                  className="w-100 breadcrumb__title tp-char-animation "
                >
                  {title}
                </h3>
                <div
                  ref={subtitleRef}
                  className="w-100 breadcrumb__list tp-title-anim tp__title_anime"
                >
                  <span className="child-one w-100">
                    <Link href="/" className='text-warning'>Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fal fa-angle-right"></i>
                  </span>
                  <span
                    className={`${team_details && "child-one"} ${
                      career_details && "child-one"
                    }`}
                  >
                    {innertitle}
                  </span>
                  {team_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>{username}</span>
                    </>
                  )}
                  {career_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Team Member</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
              <div className="breadcrumb__img p-relative text-start z-index">
                <Image className="z-index-3" src={shape_3} alt="theme-pure" />
                <div
                  className="breadcrumb__sub-img wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".4s"
                >
                  <Image src={shape_4} alt="theme-pure" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbNine;