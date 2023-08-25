import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles2.module.css";
import Image from "next/image";

export default function SliderComponentPayment({ perView, images, direction }) {
  const animation = { duration: 20000, easing: (t) => direction * t };
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
      perView: perView,
    },
  });

  return (
    <div className={styles.container}>
      <div ref={sliderRef} className={`"keen-slider" ${styles.slider}`}>
        {images.map((item, i) => (
          <div
            key={i}
            className={`keen-slider__slide ${styles.keenSlider__slide}`}
          >
            <Image src={item} alt="theme-pure" height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
