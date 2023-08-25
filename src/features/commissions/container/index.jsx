import React from "react";
import { MainLayout } from "../../../layout/main";
import styles from "./styles.module.css";
import { SectionDeveloper } from "../../home/views";

import { CardComponent, InformationGuides } from "../views";

import { PrincipalCardSection } from "@/src/common/sectionPrincipalCard/principal-card.section";
import logo from "@/public/assets/img/commissions/uso.svg";

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer/gears-documentation-layer";
import { DocumentationLayer } from '../layer'

export function CommissionsContainer() {
  return (
    <MainLayout>
      <GearsDocumentationLayer>
        <PrincipalCardSection
          title="Comisiones de Uso"
          description="Última actualización: 20 de mayo de 2023"
          linkEs="#es"
          linkUs="#en"
          logoUrl={logo}
        />
      </GearsDocumentationLayer>
      <DocumentationLayer>
        <div className={styles.page}>
          <CardComponent />
          <InformationGuides />
          <SectionDeveloper />
        </div>
      </DocumentationLayer>
    </MainLayout>
  );
}
