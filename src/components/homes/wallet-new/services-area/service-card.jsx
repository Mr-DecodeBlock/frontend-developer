import React from "react";
import Image from "next/image";
import styles from "./service-card.module.scss";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ image, title, description }) => {
  const [t] = useTranslation();
  let cx = classNames.bind(styles);
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-xl-3 d-flex flex-column flex-grow-1">
      <div className={cx("service-card")}>
        <Image className={cx("service-card__image")} src={image} />
        <h3 className={cx("service-card__title")}>{title}</h3>
        <p className={cx("service-card__description")}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
