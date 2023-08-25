import React, { useEffect, useState } from "react";
import bsImage from "../../../../../public/assets/img/wallet.architecture/bgWallet.svg";
import bsImageMovile from "../../../../../public/assets/img/wallet.architecture/bgboostMovile.svg";
import coinsAnimation from "../../../../../public/assets/img/wallet.architecture/ilustracion_indicador_golden_coin_gif_600x600_b.gif";
import lights from "../../../../../public/assets/img/wallet.architecture/ligths.svg";
import sun from '../../../../../public/assets/img/wallet.architecture/circule.svg'



// @Styles
import styles from "./styles.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function BoostYourCapital() {
  const [screenWidth, setScreenWidth] = useState(0);
  const { t } = useTranslation();
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add an event listener to detect changes in the window size
    window.addEventListener("resize", updateScreenWidth);

    // Call the update function immediately to set the initial screen width
    updateScreenWidth();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
        {t('wallet.boostCapitalTitle')}
        </p>
      </div>
      <div className={styles.subTitle}>
        <p>
        {t('wallet.boostCapitalSubtitle')}
        </p>
      </div>
      {/* <div className={styles.buttonContainer}>
        <div
            className={styles.btn}
        >
            Comienza en BPS Chain
        </div>
      </div> */}


      {screenWidth > 1200 ? (
        <>
          <Image src={bsImage} className={styles.image}></Image>
          <Image src={lights} className={styles.imageLights}></Image>
          <Image src={sun} className={styles.sunTwo}></Image>
          <Image src={coinsAnimation} className={styles.image3}></Image>
          {/* <Image src={coins} className={styles.image2}></Image>
          <Image src={coinBS} className={styles.image3}></Image> */}
        </>
      ) : (
        <>
          <Image src={bsImageMovile} className={styles.image}></Image>
          <Image src={sun} className={styles.sunTwo}></Image>
          
        </>
      )}
    </div>
  );
}
