import React from "react";

// @Layouts
import { MainLayout } from "../../../layout/main";

// @Components
import {
  GearsLayer,
  SecondLayer,
  ThirdLayer,
  FourthLayer,
} from "../../../common/icon-layer";

// @Views
import {
  HomeHeroSection,
  HomeRevolutionSection,
  SectionDeveloper,
  SectionDocumentation,
  SectionServices,
  CreateAcount,
  Patners,
  HomeCryptocurrenciesSection,
  SectionContactDocumentation,
  SectionSocialNetworks,
  SectionPaymentMethod,
} from "../views";

// @Styles
import styles from "./styles.module.css";
import { PlaceToBuy } from "../views/place-to-buy/placeToBuy";
import { ExplorePrices } from "../views/explorePrices/explorePrices";

export function HomeContainer() {
  return (
    <MainLayout>
      <GearsLayer>
        <HomeHeroSection />
      </GearsLayer>
      <div className={styles.margin}>
        <PlaceToBuy />
      </div>
      <SecondLayer>
        <Patners />
        <div className={styles.margin}>
          <SectionServices />
          <SectionPaymentMethod />
        </div>
      </SecondLayer>
      <ThirdLayer>
        <div className={styles.margin}>
          <HomeCryptocurrenciesSection />
        </div>
      </ThirdLayer>
      <FourthLayer>
        <div className={styles.margin}>
          <CreateAcount />
          <HomeRevolutionSection />
        </div>
      </FourthLayer>
      <div className={styles.margin}>
        <ExplorePrices />
        <SectionSocialNetworks />
        <SectionDocumentation />
      </div>
      <div className={styles.developer}>
        <SectionDeveloper />
      </div>
      <div className={styles.margin}>
        <SectionContactDocumentation />
      </div>
    </MainLayout>
  );
}
