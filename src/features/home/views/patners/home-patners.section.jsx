import React, { useEffect, useState } from "react";
import SliderComponent from "./sliderComponent";
import SliderComponentVertical from "./sliderComponentVertical";

export function Patners() {
  const [matches, setMatches] = useState(false);
  const [matches2, setMatches2] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setMatches(mediaQuery.matches);

    const handler = (e) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  
  useEffect(() => {
    const mediaQuery2 = window.matchMedia("(max-width: 920px)");
    setMatches2(mediaQuery2.matches);

    const handler = (e) => setMatches(e.matches);
    mediaQuery2.addEventListener("change", handler);

    return () => mediaQuery2.removeEventListener("change", handler);
  }, []);

  return (
    <>
    {!matches?
          <SliderComponent perView={5} />
          :
          <SliderComponentVertical perView={5} />
    }

    </>
  );
}










// import React, { useEffect, useState } from "react";
// import styles from "./styles.module.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import heroku from "../../../../../public/assets/img/patners/mongoDB.svg";
// import changeNow from "../../../../../public/assets/img/patners/changeNow.svg";
// import metaMap from "../../../../../public/assets/img/patners/metaMap.svg";
// import broker from "../../../../../public/assets/img/patners/broker.svg";
// import mongoDB from "../../../../../public/assets/img/patners/exness.png";
// const img = [heroku, changeNow, metaMap, broker, mongoDB];
// const images = [...img, ...img, ...img, ...img, ...img, ...img];

// export function Patners() {
//   const [screenWidth, setScreenWidth] = useState(0);
//   const updateScreenWidth = () => {
//     setScreenWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     // Add an event listener to detect changes in the window size
//     window.addEventListener("resize", updateScreenWidth);

//     // Call the update function immediately to set the initial screen width
//     updateScreenWidth();

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", updateScreenWidth);
//     };
//   }, []);
//   const setting = {
//     speed: 6000,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     slidesToShow: screenWidth > 600 ? 4 : 2,
//     infinite: true,
//     // vertical: isVertical,
//     arrows: false,
//     buttons: false,
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.title}>
//         <p>
//           <span style={{ color: "#FF9356" }}>Alianzas</span> con actores clave
//           de la industria <span>Blockchain</span>.
//         </p>
//       </div>
//       <div className={styles.carouselContainer}>
//         <Slider
//           {...setting}
//           className={`tp-integration-slider-active ${styles.slider}`}
//         >
//           {images.map((item, i) => (
//             <div key={i} className="tp-integration-slider-main slick-slide">
//               <div className="ml-md-30">
//                 <Image src={item} alt="theme-pure" style={{ margin: "auto" }} height={40} />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }




