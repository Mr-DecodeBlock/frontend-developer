import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

// @Images
import call from "@/public/assets/img/footer/call.svg";
import mail from "@/public/assets/img/footer/mail.svg";
import qrCode from "@/public/assets/img/footer/qrFooter.svg";
import iPhone from "@/public/assets/img/footer/appStoreFooter.svg";
import googlePlay from "@/public/assets/img/footer/googlePlayFooter.svg";

// @Styles
import styles from "./styles.module.scss";

export function Contact({ email, phone, phoneForHref }) {
  const { t } = useTranslation();

  return (
    <div className={styles.download}>
      <div className={styles.download__methods}>
        <div className={styles.downloadImg}>
          <div className={styles.downloadStore}>
            <Link href="#">
              <Image src={iPhone} alt={t("footer.iphoneAlt")} />
            </Link>
            <Link href="#">
              <Image src={googlePlay} alt={t("footer.googlePlayAlt")} />
            </Link>
          </div>

          <div className={styles.downloadQr}>
            <Link href="#">
              <Image src={qrCode} width={120} alt={t("footer.qrCodeAlt")} />
            </Link>
          </div>
        </div>

        <div className={styles.contact}>
          <span className={styles.text}>{t("footer.city")}</span>

          <div className={styles.container__contatItems}>
            <div className={styles.textLayout}>
              <Image src={call} alt="call" />
              <Link
                className={styles.text}
                href={`https://api.whatsapp.com/send/?phone=${phoneForHref}&text&type=phone_number&app_absent=0`}
              >
                {phone}
              </Link>
            </div>

            <div className={styles.textLayout}>
              <Image src={mail} alt="mail" />
              <Link className={styles.text} href={`mailto:${email}`}>
                {email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
