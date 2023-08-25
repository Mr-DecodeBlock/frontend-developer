import Image from "next/image";
import styles from "./brokerHero.section.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import heroImage from "@/public/assets/img/broker/hero.svg";
import { useTranslation } from "react-i18next";
import heroImage from "@/public/assets/img/broker/hero-image-mobile.svg";
import heroPhone from "@/public/assets/img/broker/hero-phone.svg";
import heroImageDesktop from "@/public/assets/img/broker/hero-image-desktop.svg";
import { ExplorePrices } from "../explorePrices/explorePrices";

export function BrokerHeroSection() {
  const {t}=useTranslation()
  return (
    <div className={styles.container}>
      <Row xs={1} lg={2} className={`px-0 ${styles.heroDesktopBackground}`}>

        <Col className="px-0 mt-4">
          <div className={`${styles.heroBackground} px-3 d-flex justify-content-center`}>
            <Image
              src={heroImage}
              alt="desktop-statics"
              className={`${styles.heroImage}`}
              style={{ zIndex: "1" }}
              draggable={false}
            />
            <Image
              src={heroImageDesktop}
              alt="desktop-statics"
              className={`${styles.heroImageDesktop}`}
              style={{ zIndex: "1" }}
              draggable={false}
            />
            <Image
              src={heroPhone}
              alt="desktop-statics"
              className={`${styles.heroPhone}`}
              style={{ zIndex: "1" }}
              draggable={false}
            />
          </div>
        </Col>

      <Col className={`mt-4 ${styles.titlePosition}`} xs={{ order: 'first' }} lg={{ order: 'last'}}>
        <h2 className={`${styles.textTitle}`}>
          Lorem ipsum lrem ipsum y l<span className={`${styles.textYellow}`}>orem ipsum</span>
        </h2>
        <p className={`${styles.textDesc} text-left mt-4`}>
        {t('broker.topDescription')}
        </p>

          <div className={`${styles.buttonPosition}`}>
            <button className={`${styles.heroButton}`}>
              lorem ipsum
            </button>
          </div>

        </Col>
      </Row>
      <div className={styles.prices}>
        <ExplorePrices />
      </div>
    </div>
  );
}


//The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.