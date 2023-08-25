import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles2.module.css";
import Image from "next/image";
import mongoDB from "../../../../../public/assets/img/patners/mongoDB.png";
import changeNow from "../../../../../public/assets/img/patners/changeNow.png";
import metaMap from "../../../../../public/assets/img/patners/metaMap.png";
import broker from "../../../../../public/assets/img/patners/broker.png";
import exness from "../../../../../public/assets/img/patners/exness.png";
import guardarian from "../../../../../public/assets/img/patners/GUARDARIAN.png";
import now_custody from "../../../../../public/assets/img/patners/now_custody.png";
import now_payments from "../../../../../public/assets/img/patners/now_payments.png";
import heroku from "../../../../../public/assets/img/patners/heroku.png";
import chainalysis from "../../../../../public/assets/img/patners/chainalysis.png";
import { useTranslation } from "react-i18next";

const images = [changeNow, metaMap, broker, mongoDB, exness, guardarian, now_custody, now_payments, heroku, chainalysis];

const animation = { duration: 20000, easing: (t) => t };

export default function SliderComponent({perView}){
  const {t} = useTranslation()

const [sliderRef] = useKeenSlider({
loop: true,
renderMode: "performance",
drag: false,
created(s) {
  s.moveToIdx(5, true, animation);
},
updated(s) {
  s.moveToIdx(s.track.details.abs + 5, true, animation);
},
animationEnded(s) {
  s.moveToIdx(s.track.details.abs + 5, true, animation);
},
slides: {
  perView: perView
},
});

return (
<div className={styles.container} >
  <div className={styles.title}>
    <p>
      <span style={{ color: "#FF9356" }}>{t('home.patners.alliances')}</span>{t('home.patners.key')}<span>{t('home.patners.blockchain')}</span>.
    </p>
  </div>
  <div ref={sliderRef} className={`"keen-slider" ${styles.slider}`}>
    {images.map((item, i) => (
      <div
        key={i}
        className={`keen-slider__slide ${styles.keenSlider__slide}`}
      >
        <Image src={item} alt="theme-pure" />
      </div>
    ))}
  </div>
</div>
)
    };