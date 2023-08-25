import { useTranslation } from "react-i18next";
import styles from "./placeToBuy.module.css";
import React, { useState } from "react";

import flash1 from "../../../../../public/assets/img/home-revolution/flash1.svg";
import coin1 from "../../../../../public/assets/img/home/coinEth.svg";
import coin2 from "../../../../../public/assets/img/home/secondCoin.svg";
import coin3 from "../../../../../public/assets/img/home/bspCoin.svg";
import circule from "../../../../../public/assets/img/home/circule.svg";
import azteca from "../../../../../public/assets/img/home/azteca_5.svg";
import visa from "../../../../../public/assets/img/home/visa.svg";
import mastercard from "../../../../../public/assets/img/home/mastercard.svg";
import applePay from "../../../../../public/assets/img/home/applePay.svg";
import sepa from "../../../../../public/assets/img/home/sepa.svg";
import unionPay from "../../../../../public/assets/img/home/unionPay.svg";
import Image from "next/image";
import ExchangeWidget from "./ExchangeWidget";
import { ExchangeForm } from '../../../fiat-transaction/views'

import { CoinBackground } from "./components";

export function PlaceToBuy() {
  const { t } = useTranslation();
  const [transaction, setTransaction] = useState("buy");

  const handleSelectBuy = (e) => {
    e.preventDefault();
    setTransaction("buy");
  };

  const handleSelectSale = (e) => {
    e.preventDefault();
    setTransaction("sale");
  };

  return (
    <div className={styles.card}>
      <Image src={azteca} alt="flash" className={styles.azteca} />
      <Image src={flash1} alt="flash" className={styles.flash1} />
      <Image src={flash1} alt="flash" className={styles.flash2} />
      <Image src={coin1} alt="flash" className={styles.coin1} />
      <Image src={coin2} alt="flash" className={styles.coin2} />
      <Image src={coin3} alt="flash" className={styles.coin3} />
      <Image src={circule} alt="flash" className={styles.circule} />
      <div className={styles.backgraundFix}></div>
      <div className={styles.title}>
        <h4>
          {t("home.placeToBuy.best")}
          <span>{t("home.placeToBuy.buy")}</span>
        </h4>
        <p>{t("home.placeToBuy.enjoy")}</p>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangle}>
            <Image src={visa} alt="visa" />
          </div>
          {/* <CoinBackground> */}
          {/* <div className={styles.exchangeWidgetComponent}>
                <ExchangeWidget />
            </div> */}
          {/* </CoinBackground> */}
          {/* <div className={styles.rightCard}>
                <div className={styles.dropdown}>
                    <div className={transaction==="buy" ? styles.itemSelect : styles.item} onClick={(e)=>handleSelectBuy(e)}>Comprar</div>
                    <div className={transaction==="sale" ? styles.itemSelect : styles.item} onClick={(e)=>handleSelectSale(e)}>Vender</div>
                </div>
                <div className={styles.midle}>
                    <div className={styles.coinContainer}>
                        <input type="text" className={styles.input} placeholder="Usted envía"/>
                        <select className={styles.select}>
                            <option>USDT</option>
                            <option>ETH</option>
                            <option>BSP</option>
                        </select>
                    </div>
                    <div className={styles.listContainer}>
                        <div className={styles.line}></div>
                        <ul>
                            <li className={styles.listItems}>Sin cargos adicionales</li>
                            <li className={styles.listItems}>Tasa estimada</li>
                        </ul>
                    </div>
                    <div className={styles.coinContainer}>
                        <input type="text" className={styles.input} placeholder="Usted obtiene"/>
                        <select className={styles.select}>
                            <option>USDT</option>
                            <option>ETH</option>
                            <option>BSP</option>
                        </select>
                    </div>
                </div>
                <div className={styles.button}>Comprar</div>
            </div>         */}
          <div className={styles.rectangle}>
            <Image src={mastercard} alt="mastercard" />
          </div>
          <div className={styles.rectangle}>
            <Image src={sepa} alt="sepa" />
          </div>
        </div>
      </div>
      <ExchangeForm />
      {/* <div className={styles.rightCard}>
          <div className={styles.dropdown}>
            <div
              className={transaction === "buy" ? styles.itemSelect : styles.item}
              onClick={handleSelectBuy}
            >
              {t("home.general.buy")}
            </div>
            <div
              className={transaction === "sale" ? styles.itemSelect : styles.item}
              onClick={handleSelectSale}
            >
              {t("home.general.sell")}
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.coinContainer}>
              <input
                type="text"
                className={styles.input}
                placeholder={t("home.placeToBuy.youSend")}
              />
              <select className={styles.select}>
                <option>USDT</option>
                <option>ETH</option>
                <option>BSP</option>
              </select>
            </div>
            <div className={styles.listContainer}>
              <div className={styles.line}></div>
              <ul>
                <li className={styles.listItems}>
                  {t("home.placeToBuy.withoutChanges")}
                </li>
                <li className={styles.listItems}>
                  {t("home.placeToBuy.estimatedRate")}
                </li>
              </ul>
            </div>
            <div className={styles.coinContainer}>
              <input
                type="text"
                className={styles.input}
                placeholder={t("home.placeToBuy.youGet")}
              />
                  <select className={styles.select}>
                <option>USDT</option>
                <option>ETH</option>
                <option>BSP</option>
              </select>
            </div>
          </div>
          <div className={styles.button}>{t("home.placeToBuy.buyButton")}</div>
        </div> */}
    </div>
  );
}


