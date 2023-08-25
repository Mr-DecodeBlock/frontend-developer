import Image from "next/image";
import styles from "./home.hero.section.module.css";

import heroImg from "@/public/assets/img/home/hero/hero-img.svg";
import heroImgMobile from "@/public/assets/img/home/hero/hero-img-mobile.svg";
import sparkles from "@/public/assets/img/home/hero/sparkles.svg";
import coin from "@/public/assets/img/home/hero/better_new_coin_v2.gif";
// import coin from "@/public/assets/img/home/hero/new-coin.gif";
import hero_start_image from "@/public/assets/img/home/hero/Star.svg";
import { useTranslation } from "react-i18next";
// import hero_hero_image from "@/public/assets/img/home/hero/Hero.svg";
// import logo from "@/public/assets/img/documentation/logo-bsc.png";
// import flash1 from "@/public/assets/img/home-revolution/flash1.svg";
// import flash2 from "@/public/assets/img/home-revolution/flash2.svg";

export function HomeHeroSection() {
  const [t] = useTranslation()
  return (
    <div>
      <div className={`${styles.homeHeroBackground}`}>
        <div className={`${styles.homeHeroAlertContainer}`}>
          <div className={`${styles.homeHeroAlert}`}>
            <div className="">
              <p className={`${styles.homeHeroAlertDesc}`}>
              <span style={{color: "#FFA80FFA"}}>{t('home.hero.new')}</span>
              {t('home.hero.new1')}
                <br className={`${styles.brokeSpace}`} />
                &nbsp;{t('home.hero.new2')}
              </p>
            </div>
          </div>
        </div>
        <h3 className={`${styles.homeHeroTitleLayout}`}>
          <span className={`${styles.homeHeroTitleTypography}`}>
          {t('home.hero.experience')}<br className={`${styles.brokeSpace}`} />
          {t('home.hero.sublime')}
            <br className={`${styles.brokeSpaceDesk}`} /> {t('home.hero.your')}
            <br className={`${styles.brokeSpace}`} /> {t('home.hero.moneyAnd')}
          </span>
          <span className={`${styles.homeHeroTitleRewards}`}>BSP Chain</span>
        </h3>
        <div className={`${styles.homeHeroLayout}`}>
          <p className={`${styles.homeHeroTitleParagraph}`}>
            {t('home.hero.make')}<br className={`${styles.brokeSpace}`} />
            {t('home.hero.delight')}<br className={`${styles.brokeSpaceDesk}`} />
            {t('home.hero.money')}
          </p>
        </div>
      </div>
      <Image
        src={heroImgMobile}
        alt="theme-pure"
        className={styles.imgMobile}
      />
      <Image src={coin} alt="theme-pure" className={styles.coin} height={100} width={100} />
      <Image src={heroImg} alt="theme-pure" className={styles.img} />
      <Image src={sparkles} alt="theme-pure" className={styles.sparkles} />
    </div>
  );
}
