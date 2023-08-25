import Image from "next/image";

import { SimpleButton } from "./SimpleButton";
import { ServiceBlock } from "../links/ServiceBlock";
import { WalletBlock } from "../links/WalletBlock";
import { ResourceBlock } from "../links/ResourceBlock";
import { CommunityBlock } from "../links/CommunityBlock";
import { Contact } from "../contact";
import { NewsLetter } from "../../../components";

import { footerContent } from "@/src/data/footerContent";

import logo from "@/public/assets/img/footer/logoFooter.svg";

import styles from "./../scss/footerContent.module.scss";

export const FooterContent = () => {
  return (
    <>
      <div className={styles.footerContent}>
        <div className={styles.block}>
          <div className={styles.block__header}>
            <div className={styles.block__header_item}>
              <Image
                src={logo}
                className={styles.block__header_item_img}
                width={200}
                alt="logo footer"
              />
            </div>
          </div>

          <div className={styles.block__info_login}>
            <p>
              BSP Chain brinda confianza digital, lo que nos permite construir
              un mundo mejor.
            </p>

            <div className={styles.block__info_login_btns}>
              <SimpleButton text="Registrarse" />
              <SimpleButton bg="#FFA80FFA" text="Inicia sesión" />
            </div>
          </div>
        </div>

        <div className={styles.block__info_blocks}>
          <div className={styles.block}>
            <div className={styles.block__header}>
              <div className={styles.block__header_item}>
                <h6 className={styles.title}>Blockchain</h6>
              </div>
            </div>

            <div className={styles.block__header_list}>
              <ServiceBlock />

              <div className={styles.block__header_list}>
                <h6 className={styles.title}>Wallet</h6>
                <WalletBlock />
              </div>

              <div className={styles.block__header_list}>
                <h6 className={styles.title}>Broker</h6>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.block__header}>
              <div className={styles.block__header_item}>
                <h6 className={styles.title}>Recursos</h6>
              </div>
            </div>

            <div className={styles.block__header_list}>
              <ResourceBlock />

              <div className={styles.block__header_list}>
                <h6 className={styles.title}>Comunidad</h6>
                <CommunityBlock />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.block__header}>
            <div
              className={`${styles.block__header_item} ${styles.block__header_item_search}`}
            >
              <NewsLetter />
            </div>
          </div>

          <Contact
            email={footerContent.email}
            phone={footerContent.phone}
            phoneForHref={footerContent.phoneForHref}
          />
        </div>
      </div>
    </>
  );
};
