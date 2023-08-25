import React from "react";
import { MainLayout } from "../../../layout/main";
import styles from './styles.module.css'
import { SectionDeveloper } from "../../home/views";

import {
    Card,
    InformationTerms
} from "../views";

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer";
import { DocumentationLayer } from '../layer'

import { PrincipalCardSection } from "@/src/common/sectionPrincipalCard/principal-card.section";
import logo from "@/public/assets/img/regulationsAndLicences/regulationsImage.svg";
import stylesHome from '../../home/container/styles.module.css';
import { useTranslation } from "react-i18next";

export function RegulationsAndLicences() {
    const {t}=useTranslation()

    return (
        <MainLayout>
            <GearsDocumentationLayer>
                <PrincipalCardSection
                    title={t('regulationsAndLicences.title')}
                    description={t('regulationsAndLicences.description')}
                    linkEs="#es"
                    linkUs="#en"
                    logoUrl={logo}
                />
            </GearsDocumentationLayer>
            <div className={styles.page}>
                <DocumentationLayer>
                    <div className={styles.margin}>
                        <Card />
                    </div>
                </DocumentationLayer>
            </div>
        </MainLayout>
    );
}