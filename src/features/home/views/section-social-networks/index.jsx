import { CardComponentSocialHome } from "@/src/common/cardComponentSocialHome/cardComponent";
import Link from "next/link";
import Image from "next/image";

// @Styles
import styles from "./styles.module.css";

// @Images
import bitcoin from "@/public/assets/img/home/social-networks/bitcoin.svg";
import bnb from "@/public/assets/img/home/social-networks/bnb.svg";
import discord from "@/public/assets/img/home/social-networks/discord.svg";
import ethereum from "@/public/assets/img/home/social-networks/ethereum.svg";
import monero from "@/public/assets/img/home/social-networks/ethereum2.svg";
import github from "@/public/assets/img/home/social-networks/github.svg";
import instagram from "@/public/assets/img/home/social-networks/instagram.svg";
import linkedin from "@/public/assets/img/home/social-networks/linkedin.svg";
import litecoin from "@/public/assets/img/home/social-networks/litecoin.svg";
import medium from "@/public/assets/img/home/social-networks/medium.svg";
import tether from "@/public/assets/img/home/social-networks/tether.svg";
import twitter from "@/public/assets/img/home/social-networks/twitter.svg";
import arrowUp from "@/public/assets/img/home/social-networks/arrowUp.svg";
import arrowDown from "@/public/assets/img/home/social-networks/arrowDown.svg";
import arrowEq from "@/public/assets/img/home/social-networks/arrowEq.svg";
import flash2 from '../../../../../public/assets/img/home-revolution/flash2.svg'

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function SectionSocialNetworks() {
  const {t}=useTranslation()
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BNB,LTC,USDT,ETH,XMR&tsyms=USD"
        );
        const data = await response.json();
        setCryptoData(data?.RAW);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const cards = [
    {
      socialImage: linkedin,
      socialName: "LinkedIn",
      statistics: "1500k+",
      currencyImage: litecoin,
      varPctDay: cryptoData?.LTC?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
      price: cryptoData?.LTC?.USD?.PRICE?.toFixed(2) || "N/A",
      currencyName: "Litecoin",
      currencyDescription: t('home.socialNetworks.cards.description1'),
      content:
      t('home.socialNetworks.cards.conect1'),
      link: "",
    },
    {
      socialImage: instagram,
      socialName: "Instagram",
      statistics: "8500k+",
      currencyImage: bnb,
      varPctDay: cryptoData?.BNB?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
      price: cryptoData?.BNB?.USD?.PRICE?.toFixed(2) || "N/A",
      currencyName: "BNB",
      currencyDescription: t('home.socialNetworks.cards.description2'),
      content:
      t('home.socialNetworks.cards.conect2'),
      link: "",
    },
    {
      socialImage: twitter,
      socialName: "Twitter",
      statistics: "8500k+",
      currencyImage: bitcoin,
      varPctDay: cryptoData?.BTC?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
      price: cryptoData?.BTC?.USD?.PRICE?.toFixed(2) || "N/A",
      currencyName: "Bitcoin",
      currencyDescription: t('home.socialNetworks.cards.description3'),
      content:
      t('home.socialNetworks.cards.conect3'),
      link: "",
    },
    {
      socialImage: discord,
      socialName: "Discord",
      statistics: "5000k+",
      currencyImage: tether,
      varPctDay: cryptoData?.USDT?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
      price: cryptoData?.USDT?.USD?.PRICE?.toFixed(2) || "N/A",
      currencyName: "Tether",
      currencyDescription: t('home.socialNetworks.cards.description4'),
      content:
      t('home.socialNetworks.cards.conect4'),
      link: "",
    },
    {
      socialImage: medium,
      socialName: "Medium",
      statistics: "150k+",
      currencyImage: ethereum,
      varPctDay: cryptoData?.ETH?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
      price: cryptoData?.ETH?.USD?.PRICE?.toFixed(2) || "N/A",
      currencyName: "Ethereum",
      currencyDescription: t('home.socialNetworks.cards.description5'),
      content:
      t('home.socialNetworks.cards.conect5'),
      link: "",
    },
    {
      socialImage: github,
      socialName: "GitHub",
      statistics: "80k+",
      currencyImage: monero,
      varPctDay: cryptoData?.XMR?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
      price: cryptoData?.XMR?.USD?.PRICE?.toFixed(2) || "N/A",
      currencyName: "Monero",
      currencyDescription:t('home.socialNetworks.cards.description6'),
      content:
      t('home.socialNetworks.cards.conect6'),
      link: "",
    },
  ];

  return (
    <div className={styles.cont}>

      <CardComponentSocialHome

        text={
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <h2>
              {t('home.socialNetworks.join')}<span>BSP Chain</span>{t('home.socialNetworks.bePart')}
              </h2>
              <p>
                 {t('home.socialNetworks.stayConected')}
              </p>
            </div>
            <div className={styles.socialNetworksContainer}>
              {cards.map((card, index) => (
                <div key={index} className={styles.cardContainer}>
                  <div className={styles.cardHeader}>
                    <Image src={card.socialImage} alt={card.socialName} />
                    <h4>{card.statistics}</h4>
                  </div>
                  <div className={styles.currencyContainer}>
                    <Image src={card.currencyImage} alt={card.currencyName} />
                    <div className={styles.cardPriceContainer}>
                      <div className={styles.priceContainer}>
                        <span>{card?.price}</span>
                      </div>
                      <div className={
                        card.varPctDay > 0
                          ? styles.arrowContainerUp
                          : card.varPctDay < 0
                            ? styles.arrowContainerDown
                            : styles.arrowContainerEq
                      }>
                        <div className={styles.arrowContainerText}>{card?.varPctDay > 0 ? "+" : ""}{card?.varPctDay}%</div>
                        <Image
                          src={
                            card.varPctDay > 0
                              ? arrowUp
                              : card.varPctDay < 0
                                ? arrowDown
                                : arrowEq
                          }
                          alt={"-"}
                          className={styles.arrowImage}
                        />
                      </div>
                    </div>
                    <div className={styles.currencyText}>
                      <h6>{card.currencyName}</h6>
                      <span>{card.currencyDescription}</span>
                    </div>
                  </div>
                  <div className={styles.contentContainer}>
                    <h4>{card.socialName}</h4>
                    <p>{card.content}</p>
                    {/* <Link href={card.link}>{t('home.socialNetworks.seeMore')}</Link> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <Image src={flash2} className={styles.flash2} />
    </div>
  );
}
