import Link from "next/link";
import Image from "next/image";

// Import styles
import styles_home from "../../features/home/container/styles.module.css";
import styles from "./principal-card.section.module.css";

// Import images
import flash1 from "@/public/assets/img/home-revolution/flash1.svg";
import es_logo from "@/public/assets/img/privacy-police/ES.svg";
import us_logo from "@/public/assets/img/privacy-police/US.svg";

import Breadcrumb from "react-bootstrap/Breadcrumb";

import { useCallback } from "react";
import Particles from "react-tsparticles";
// import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import { CircleAnimation } from "./circle-animation";

export function PrincipalCardSection({
  title,
  description,
  linkEs,
  linkUs,
  logoUrl,
}) {
  return (
    <>
      <div className={`${styles.principalBackground}`}>
        {/* <CircleAnimation /> */}
        <div className={styles.imageContainer}>
          <h3 className={`${styles.pageTitle}`}>{title}</h3>
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="theme-pure"
              className={`${styles.logoImages}`}
              style={{ zIndex: "1" }}
              draggable={false}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={`${styles_home.margin}`}>
        {/* <div className={`${styles.principalBreadCenter}`}>
                    <Breadcrumb className="">
                        <Breadcrumb.Item href="#" className={styles.homeBreadInitial}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active className={styles.homeBreadActive}>
                            <span className={styles.homeDesktopCheck}>{title}</span>
                            <span className={styles.homeMobileCheck}>
                                {
                                    (title.lenght > 31) ? title.slice(0, 31) + ' ...' : title
                                }
                            </span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div> */}

        <div className="col-12">
          <div className={`mb-4 ${styles.headerContainer}`}>
            <Image src={flash1} alt="flash" className={styles.flash1} />
            <div className={styles.textContainer}>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            {/* <div className={styles.buttonContainer}>
                            <Link className={styles.button} href={`${linkEs}`}>
                                <span className={`${styles.principalTitleButton}`}>Download PDF</span>
                                <Image
                                    src={es_logo}
                                    alt="es_flag"
                                />
                            </Link>
                            <Link className={styles.button} href={`${linkUs}`}>
                                <span className={`${styles.principalTitleButton}`}>Download PDF</span>
                                <Image
                                    src={us_logo}
                                    alt="us_flag"
                                />
                            </Link>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
