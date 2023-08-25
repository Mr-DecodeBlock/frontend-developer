// @Libraries
import Image from "next/image";

// @Components
import { FooterContent } from "./components/FooterContent";

import { FooterBy } from "./footer-by";

// @Images
import ilustration from "@/public/assets/img/footer/ilustration-footer.png";

// @Styles
import styles from "./scss/styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Image alt="gear" className={styles.ilustration} src={ilustration} />

        <FooterContent />

        <div className={styles.divider} />
        <div className={styles.maxWidth2}>
          <div className={styles.footerPadding}>
            <FooterBy />
          </div>
        </div>
      </div>
    </footer>
  );
}
