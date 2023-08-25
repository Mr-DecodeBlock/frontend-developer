import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

// service img import
import service_img_1 from "@/public/assets/img/service/sv-icon-2-5.png";
import service_img_2 from "@/public/assets/img/service/sv-icon-2-6.png";
import service_img_3 from "@/public/assets/img/service/sv-icon-2-7.png";
import service_img_4 from "@/public/assets/img/service/sv-icon-2-8.png";
import flash1 from "../../../../../public/assets/img/home-revolution/flash1.svg";
import flash2 from "../../../../../public/assets/img/home-revolution/flash2.svg";

export const SectionServices = () => {
const { t } = useTranslation();

function AnimatedNumber({ target, time }) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Nuevo estado

  const duration = time; 
  const start = Date.now();

  useEffect(() => {
    if (isVisible) {  // Solo ejecuta la animación si es visible
      function animate() {
        const now = Date.now();
        const time = Math.min(1, (now - start) / duration);
        const value = Math.ceil(time * target);
        
        setCurrent(value);
        
        if (value < target) {
          requestAnimationFrame(animate);
        }
      }
    
      requestAnimationFrame(animate);
      
      return () => { setCurrent(0); }; // Reset al desmontar
    }
  }, [isVisible, target]);

  // Observer para detectar cuando es visible
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <span style={{color:"#fafafa"}} ref={ref}>{current}</span>;
}
const service_content = {
  title: (
    <>
      Brindamos el mejor <br /> servicio para ti
    </>
  ),
  des: <>Beneficios al administrar tus fondos con nuestra billetera</>,

  users_data: [
    {
      id: 1,
      users_count: (
        <>
          100<i>+</i>
        </>
      ),
      users_status: "users_status1",
    },
    {
      id: 2,
      users_count: (
        <>
          30<i>+</i>
        </>
      ),
      users_status: "users_status2",
    },
    {
      id: 3,
      users_count: (
        <>
          10<i>k+</i>
        </>
      ),
      users_status: "users_status3",
    },
  ],
  service_data: [
    {
      id: 1,
      color: "",
      title: "exchange",
      img: service_img_1,
    },
    {
      id: 2,
      color: "2",
      title: "investment",
      img: service_img_2,
    },
    {
      id: 3,
      color: "3",
      title: "protection",
      img: service_img_3,
    },
    {
      id: 4,
      color: "4",
      title: "webManagement",
      img: service_img_4,
    },
  ],

  free_tools_title: "Widevariety",
 free_tools : [
  { li1: t('home.services.list.exchange'), li2: t('home.services.list.peerToPeer'), li3: t('home.services.list.trading') },
  { li1: t('home.services.list.transfer'), li2: t('home.services.list.userPortal'), li3: t('home.services.list.banking') },
  { li1: t('home.services.list.bills'), li2: t('home.services.list.qrCode'), li3: t('home.services.list.investment') },
  { li1: t('home.services.list.paymentsTo'), li2: t('home.services.list.paymentLinks'), li3: t('home.services.list.referrals') }
]
};
const { title, des, users_data, service_data, free_tools_title, free_tools } =
  service_content;


 
  return (
    <>
      <div id="linkServices" className="tp-service-2__area">
        <div className="d-flex flex-column align-items-center">
          <div className={styles.darkColor}>
          <div
            className={styles.servicesCardsContainer}
            // style={{
            //   gridTemplateColumns: "1fr 1fr",
            // }}
          >
            <Image src={flash1} alt="flash" className={styles.flash1} />
            <Image src={flash2} alt="flash" className={styles.flash2} />
            <div className={styles.servicesLeft}>
              <h4 >{t("weProvideTheBest")}</h4>
              <p>{t("administrativebenefits")}</p>
              <div className="d-flex justify-content-lg-start justify-content-center mb-4 w-100">
                <Link
                  className="tp-btn-green alt-color-black"
                  href="https://businessshop.gitbook.io/esp/"
                >
                  <span className="mt-4">{t('home.services.button')}</span>
                  <b></b>
                </Link>
              </div>
            </div>

            <div className={styles.miniCards}>
              {service_data.map((item, i) => (
                <div
                  key={i}
                  className="mb-20 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".8s"
                  style={{ height: "50%" }}
                >
                  <div
                    className="tp-service-2__item-wrapper p-relative d-flex flex-wrap-nowrap"
                    style={{ height: "100%" }}
                  >
                    <div className="tp-service-2__item d-flex justify-content-between flex-column">
                      <div className="tp-service-2__icon">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="tp-service-2__text">
                        <h4 className="tp-service-2__title-sm">
                          <Link href="#">{t(item.title)}</Link>
                        </h4>
                        {/* <Link className="tp-service-2__link" href="https://businessshop.gitbook.io/esp">{t("explore")}
                                                    <i className="far fa-arrow-right"></i>
                                                </Link> */}
                      </div>
                    </div>
                    <div
                      className={`tp-service-2__bg-shape tp-service-2__color-5`}
                      style={{ height: "70%", maxHeight: "210px" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          <div
            className="d-none d-md-flex flex-md-column justify-content-center mt-80 align-item-center"
            style={{ width: "100%" }}
          >
            <div
              className="w-100 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className="tp-service-2__user-box p-relative d-flex justify-content-center align-items-center"
                style={{ width: "80%", margin: "auto", gap: "6rem" }}
              >
                {/* <div className="tp-service-2__user-shape">
                           <LinearGradientLine />
                        </div> */}

                {/* -------------------------stadistic----------- */}
                <div className={styles.textStadisticsContainer}>
                  <div
                    className="p-0 tp-service-2__user mb-55 d-flex flex-column align-items-center"
                    style={{ zIndex: "2", position: "relative" }}
                  >
                    <Image src={flash1} className={styles.flash1Text} />
                    <h1 className="text-white display-2 fw-bold" style={{ zIndex: "5" }}>
                    <AnimatedNumber target={10} time={1000} />
                      <span>K</span>
                    </h1>
                    <p className="text-white h1">{t('home.services.users')}</p>
                  </div>
                  <div
                    className="tp-service-2__user mb-55 d-flex flex-column align-items-center"
                    style={{
                      borderLeft: "5px solid rgba(39, 38, 36, 0.98)",
                      borderRight: "5px solid rgba(39, 38, 36, 0.98)",
                      marginLeft: "2rem",
                      marginRight: "2rem",
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                    }}
                  >
                    <h1 className="text-white display-2 fw-bold">
                    <AnimatedNumber target={30} time={1000} />
                      <span>+</span>
                    </h1>
                    <p className="text-white h1">{t('home.services.changeMethods')}</p>
                  </div>
                  <div
                    className="p-0 tp-service-2__user mb-55 d-flex flex-column align-items-center"
                    style={{ zIndex: "2", position: "relative" }}
                  >
                    <Image src={flash1} className={styles.flash2Text} />

                    <h1 className="text-white display-2 fw-bold" style={{ zIndex: "5", color:"#fafafa" }}>
                    <AnimatedNumber target={10} time={1000} />
                      <span>+</span>
                    </h1>
                    <p className="text-white h1" style={{ zIndex: "5" }}>
                    {t('home.services.coins')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------List----------------------- */}

            <div
              className={styles.listContainer}
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className={styles.services}>
                <div className={styles.ulTitle}>
                  <span> {t(free_tools_title)} </span>
                </div>
                <div className={styles.text}>
                  {free_tools.map((list, i) => (
                    <div className={styles.items}>
                      <ul>
                        <li key={i}>{list.li1}</li>
                        <li key={i}>{list.li2}</li>
                        <li key={i}>{list.li3}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
