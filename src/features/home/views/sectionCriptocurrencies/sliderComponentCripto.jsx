import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./stylesSliderCripto.module.css";
import Image from "next/image";



export default function SliderComponentCripto({perView, images, direction}){

const animation = { duration: 15000, easing: (t) => direction*t };

const [sliderRef] = useKeenSlider({
loop: true,
renderMode: "performance",
drag: false,
vertical:true,
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
  <div ref={sliderRef} className={`"keen-slider" ${styles.slider}`} >
    {images.map((item, i) => (
      <div
        key={i}
        className={`keen-slider__slide ${styles.keenSlider__slide}`}
      
      >
        <Image src={item} alt="theme-pure"  />
      </div>
    ))}
  </div>
</div>
)
    };