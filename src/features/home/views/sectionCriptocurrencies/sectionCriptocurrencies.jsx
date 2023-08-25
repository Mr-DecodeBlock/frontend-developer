import { useTranslation } from "react-i18next";
import styles from "./sectionCriptocurrencies.module.css";

// slider img import here
import slider_img_1_1 from "../../../../../public/assets/img/integration/Tribe-2.png";
import slider_img_1_2 from "../../../../../public/assets/img/integration/Dash-2.png";
import slider_img_1_3 from "../../../../../public/assets/img/integration/XRP-2.png";
import slider_img_1_4 from "../../../../../public/assets/img/integration/Bitcoin-2.png";
import slider_img_1_5 from "../../../../../public/assets/img/integration/Ethereum-2.png";

import slider_img_2_1 from "../../../../../public/assets/img/integration/Cardano-2.png";
import slider_img_2_2 from "../../../../../public/assets/img/integration/Litecoin-2.png";
import slider_img_2_3 from "../../../../../public/assets/img/integration/Bitcoin-2.png";
import slider_img_2_4 from "../../../../../public/assets/img/integration/USDC-2.png";
import slider_img_2_5 from "../../../../../public/assets/img/integration/BinanceUSD-2.png";

import slider_img_3_1 from "../../../../../public/assets/img/integration/Tron-2.png";
import slider_img_3_2 from "../../../../../public/assets/img/integration/Polygon-2.png";
import slider_img_3_3 from "../../../../../public/assets/img/integration/BNB-2.png";
import slider_img_3_4 from "../../../../../public/assets/img/integration/Zcash-2.png";
import slider_img_3_5 from "../../../../../public/assets/img/integration/Theter-2.png";

import SliderComponentCripto from "./sliderComponentCripto";
import SliderComponentCriptoThree from "./sliderComponentCriptoThree";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const slider_one_data = [
  slider_img_1_1,
  slider_img_1_3,
  slider_img_1_2,
  slider_img_1_4,
  slider_img_1_5,
];

const slider_two_data = [
  slider_img_2_1,
  slider_img_2_2,
  slider_img_2_3,
  slider_img_2_4,
  slider_img_2_5,
];

const slider_three_data = [
  slider_img_3_1,
  slider_img_3_2,
  slider_img_3_3,
  slider_img_3_4,
  slider_img_3_5,
];

// slider one setting
const setting_one = {
  speed: 6000, // Velocidad de transición en milisegundos
  autoplay: true, // Reproducción automática activada
  autoplaySpeed: 0, // Tiempo de espera entre diapositivas en milisegundos
  centerMode: true, // Centrar las diapositivas
  cssEase: "linear", // Tipo de animación de transición
  slidesToShow: 4, // Muestra solo una diapositiva a la vez
  infinite: true,
  initialSlide: 1,
  vertical: true, // Establece el modo vertical
  arrows: false, // Oculta las flechas de navegación
  dots: false, // Oculta los puntos de navegación
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        // Propiedades específicas para pantallas con ancho de 1200px o menos
      },
    },
  ],
};

const setting_two = {
  speed: 6000, // Velocidad de transición en milisegundos
  autoplay: true, // Reproducción automática activada
  autoplaySpeed: false, // Tiempo de espera entre diapositivas en milisegundos
  centerMode: true, // Centrar las diapositiva
  cssEase: "linear", // Tipo de animación de transición
  slidesToShow: 4, // Muestra solo una diapositiva a la vez
  vertical: true, // Establece el modo vertical
  rtl: true,
  arrows: false, // Oculta las flechas de navegación
  dots: false, // Oculta los puntos de navegación
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        // Propiedades específicas para pantallas con ancho de 1200px o menos
      },
    },
  ],
};

export function HomeCryptocurrenciesSection() {
  const { t } = useTranslation();

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 820px)");
    setMatches(mediaQuery.matches);

    const handler = (e) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div id="allCriptos" className={styles.cryptocurrencies}>
      <div className={styles.leftBox}>
        <div>
          <p className={styles.pretitle}>{t('home.criptocurrencies.preTitle')}</p>
          <p className={styles.title}>
            {t('home.criptocurrencies.title')}
          </p>
        </div>
        <div>
          <p className={styles.description}>
            {t('home.criptocurrencies.description')}
          </p>
        </div>
        <div className="w-100 d-flex justify-content-center justify-content-lg-start ">
          <Button className={`${styles.btn} tp-btn-green alt-color-black`}>{t('home.criptocurrencies.button')}</Button>
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className="d-flex justify-content-center align-items-center h-100 p-relative">
          <SliderComponentCripto
            perView={4}
            images={slider_one_data}
            direction={1}
          />
          <SliderComponentCripto
            perView={4}
            images={slider_two_data}
            direction={-1}
          />
          {!matches ? (
            <SliderComponentCriptoThree
              perView={4}
              images={slider_three_data}
              direction={1}
            />
          ) : null}

        </div>
      </div>
    </div>
  );
}
