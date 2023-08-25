import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
import { MainLayout } from "@/src/layout/main";
import React from "react";

import styles from './styles.module.css'

// @Svg
import ilustration from "@/public/assets/img/not-found/ilustration.svg"


import { CirclesLayer } from "@/src/common/icon-layer"
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <MainLayout>
        <CirclesLayer>
          <div className={styles.container}>
            <div className={styles.containerText}>
              <h1 className={styles.title}>¡Ups! Parece que te has perdido en el camino.</h1>
              <p className={styles.paragraph}>La página que buscas no se encuentra aquí.</p>
              <button className={styles.button}>Volver a la pagina de inicio</button>
            </div>
            <Image
              src={ilustration}
              alt="404"
              className={`${styles.logoImages}`}
              style={{ zIndex: "1" }}

            />
          </div>
        </CirclesLayer>
      </MainLayout>
    </>
  );
};

export default NotFound;
