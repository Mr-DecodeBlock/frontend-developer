import Image from "next/image";
import styles from "./brokerCard.section.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cardBackground from "@/public/assets/img/broker/cardsBackground.svg";
import invest from "@/public/assets/img/broker/invest.svg";
import objects from "@/public/assets/img/broker/objects.svg";
import flash1 from "@/public/assets/img/home-revolution/flash1.svg";
import { useTranslation } from "react-i18next";

export function BrokerCardSection() {
  const {t} = useTranslation()
  return (
    <Col className={styles.brokerCard}>
        <div className={styles.flash1}>
          <Image src={flash1} />
        </div>
        <Col className="p-3">
          <div className={styles.brokerCardBackground}>
            <h2 className={`${styles.textTitle}`}>
              Lorem ipsum dolor sit amet,<br/> consectetur a<span className={`${styles.textYellow}`}> dipiscing elit, sed do eiu</span>
            </h2>
            <p className={`${styles.textDesc} text-center mt-4`}>
              {t('broker.stayConnected1')}<br className={styles.brDesktop}/>{t('broker.stayConnected2')}
            </p>
          </div>

          <Row className="mb-4" xs={1} lg={2}>
            <Col className={`${styles.mTop} px-4 pr-2`}>
              <div className={`${styles.brokerCard} bg-black p-4`}>
                <div className={styles.flash2}>
                  <Image src={flash1} />
                </div>
                <div className="d-flex justify-content-between">
                  <h3 className={styles.titleCard}>
                  {t('broker.decide1')}<br/>{t('broker.decide2')}
                  </h3>
                  <button className={styles.cardButton}>Broker</button>
                </div>
                <p className={`${styles.descCard} text-white mt-3`}>
                {t('broker.future1')}<br className={styles.brDesktop}/>{t('broker.future2')}<br className={styles.brDesktop}/>{t('broker.future3')}
                </p>
                <center>
                  <Image src={invest} className="mt-4"/>

                  <button className={styles.cardButton2}>Broker</button>
                </center>
              </div>
            </Col>

            <Col className={`${styles.mTop} px-4`}>
             <div className={`${styles.brokerCard} bg-black p-4`}>
                <div className="d-flex justify-content-between">
                  <h3 className={styles.titleCard}>
                  {t('broker.trust1')}<br/>{t('broker.trust2')}
                  </h3>
                  <button className={styles.cardButton}>Broker</button>
                </div>
                <p className={`${styles.descCard} text-white mt-3`}>
                {t('broker.future1')}<br className={styles.brDesktop}/>{t('broker.future2')}<br className={styles.brDesktop}/>{t('broker.future3')}
                </p>
                <center>
                  <Image src={objects} className="mt-4"/>

                  <button className={styles.cardButton2}>Broker</button>
                </center>
              </div>
            </Col>
          </Row>
        </Col>
    </Col>
  );
}
