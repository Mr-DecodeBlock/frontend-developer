import React from "react";
// @Layouts
import { MainLayout } from "../../../layout/main";
// @Views
import {
  BrokerHeroSection,
  ExplorePrices,
  CostEffectiveness,
  LoremIpsum,
  SectionPaymentMethod,
  Graph,
  BrokerCardSection
} from "../views";
// @Styles
import styles from "./styles.module.css";

import azteca1 from '@/public/assets/img/home/azteca_5.svg'
import azteca2 from '@/public/assets/img/wallet.architecture/azteca_2.png'
import azteca3 from '@/public/assets/img/broker/azteca_3.svg'
import circule from '@/public/assets/img/wallet.architecture/circule.svg'
import Image from "next/image";

export function BrokerContainer() {
  return (
    <MainLayout>
      <div className={styles.margin}>
        <Image src={azteca1} alt="img" className={styles.azteca1} />
        <Image src={azteca2} alt="img" className={styles.azteca2} />
        <Image src={azteca3} alt="img" className={styles.azteca3} />
        <Image src={azteca1} alt="img" className={styles.azteca4} />
        <Image src={azteca2} alt="img" className={styles.azteca5} />
        <Image src={circule} alt="img" className={styles.circule1} />
        <Image src={circule} alt="img" className={styles.circule2} />
        <Image src={circule} alt="img" className={styles.circule3} />
        <Image src={circule} alt="img" className={styles.circule4} />
        <Image src={circule} alt="img" className={styles.circule5} />
        <Image src={circule} alt="img" className={styles.circule6} />
        <Image src={circule} alt="img" className={styles.circule7} />
        <BrokerHeroSection />
        {/* <ExplorePrices /> */}
        <div className={styles.margin2}>

        <Graph />
        <BrokerCardSection />
        <SectionPaymentMethod />
        <LoremIpsum />
        <CostEffectiveness />
        </div>
      </div>
    </MainLayout>
  );
}
