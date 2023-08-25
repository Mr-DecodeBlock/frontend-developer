import Image from "next/image";
import EmailIcon from "@/public/assets/img/footer/mail-white.svg";
import Arrow from "@/public/assets/img/footer/arrow.svg";
// import RightArrow from "@/src/svg/right-arrow";
import { UseForm, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { config } from "@/src/utils/config";
const url = config.serverURL;
import axios from "axios";

// @Styles
import styles from "./styles.module.css";

export const NewsLetter = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const body = { email: data.email };
    axios
      .post(`${url}/newsletters`, body)
      .then((res) => {
        console.log(res);
        alert(t("subscriptionSuccessful"));
      })
      .catch((error) => {
        console.log(error);
        alert("no se pudo realizar la suscripcion");
      });
  };

  return (
    // <div className={styles.container}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.input}>
        <span>
          {/* <EmailIcon /> */}
          <Image src={EmailIcon} alt="Email Icon" />
        </span>
        <input
          type="email"
          placeholder={t("footer.newsLetter")}
          required
          {...register("email")}
        />
      </div>
      <button type="submit">
        {/* <RightArrow /> */}
        <Image src={Arrow} alt="Arrow Icon" />
      </button>
    </form>
    // </div>
  );
};
