import { useEffect, useState } from "react";
import Image from "next/image";
import paymentMethodImage from "../../../../../public/assets/img/wallet/payment-methods/methodsImage.svg";
import sun from "../../../../../public/assets/img/wallet.architecture/sunTwo.svg";
import circule from "../../../../../public/assets/img/wallet.architecture/circule.svg";
import wheel from '../../../../../public/assets/img/wallet.architecture/Vector_aro.png'
import paymentMethodsBackground from "../../../../../public/assets/img/wallet.architecture/paymentMethodsBackground.svg";
import styles from "./styles.module.css";
import { PaymentsMethod } from "@/src/components/homes/home-2/payment-method-area";
import { useTranslation } from "react-i18next";


export function AllPaymentMethods() {
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
      <Image  className={styles.sunImage} src={sun}></Image>
      <Image  className={styles.circule} src={circule}></Image>
      <Image  className={styles.circule2} src={circule}></Image>
      <Image  className={styles.wheel1} src={wheel}></Image>
      <Image  className={styles.wheel2} src={wheel}></Image>
      <Image  className={styles.backgroundImage1} src={paymentMethodsBackground}></Image>
      <Image  className={styles.backgroundImage2} src={paymentMethodsBackground}></Image>
      <div className={styles.titleContainer}>
        <p className={styles.titles}>{t('wallet.allPaymentMethodsTitle')}</p>
        <p className={styles.subtitle}>
        {t('wallet.allPaymentMethodsSubtitle')}
        </p>
      </div>
      <div className={styles.methods}>
        <PaymentsMethod screenWidth={screenWidth}/>
      </div>
      <div className={styles.methodsImage}>
        <Image src={paymentMethodImage} alt="image"/>
      </div>      
      {/* {screenWidth > 1300 ? (
        <PaymentsMethod />
        ) : (
          <Image src={paymentMethodImageResposive} className={styles.statics} />
      )} */}
      {/* <div className={styles.animation}>
      </div> */}
    </div>
  );
}
