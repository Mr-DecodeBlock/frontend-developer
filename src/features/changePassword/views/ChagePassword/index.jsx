import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import animationCoin from "../../../../../public/assets/img/login/animation_coin.gif";
import backgraund from "../../../../../public/assets/img/login/Modo de aislamiento.svg";
// import logo from "../../../../../public/assets/img/login/logo.svg";
import logo from "../../../../../public/assets/img/login/logo.svg";
import arrow from "../../../../../public/assets/img/login/arrow.svg";
import Image from "next/image";
import styles from "./styles.module.css";
import { Button, FormCheck } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import axios from '../../../../utils/custom-axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

const ChangePasswordForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("Requerido"),
  });

  const validCodeSchema = Yup.object({
    code: Yup.string().required("Requerido"),
    password: Yup.string().required("Requerido"),
    confirmPassword: Yup.string().required("Requerido").oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden'),
  });

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState();
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [t] = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (step === 2) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [step]);

  const onSubmitEmail = async (email) => {
    try {
      const body = {
        email,
      }

      await axios.post('/users/password_reset/send_code', body);
      setEmail(email);
      setStep(2);
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 404) {
          toast.error(t("changePassword.emailNotFound"));
          return;
        }
      }

      toast.error(t("general.serverError"));
    }
  }

  const onSubmitCode = async (code, password) => {
    try {
      if (!email) return;

      const body = {
        code,
        email,
        newPassword: password
      }

      await axios.post('/users/password_reset/reset', body);
      toast.success(t("changePassword.passwordChanged"));
      router.push("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;

        if (status === 404) {
          toast.error(t("registerPage.invalidCode"));
          return;
        }

      }

      toast.error(t("general.serverError"));
    }
  }

  return (
    <div className={styles.container}>
      <Image src={backgraund} alt="back" className={styles.backgraund} />
      <div>
        <div className={styles.titleContainer}>
          <p className={styles.title}>
            {t('changePassword.welcomeTo')} <br />
            Bussiness<span>Shop</span>
          </p>
        </div>
        <div className={styles.worldContainer}>
          <Image src={animationCoin} alt="login image" />
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.cardLogin}>
          <div
            className={styles.arrowContainer}
            onClick={() => router.push("/login")}
          >
            <Image src={arrow} alt="arrow" className={styles.arrow} />
          </div>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" />
          </div>
          {step === 1 && <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              onSubmitEmail(values.email);
            }}
          >
            {() => (
              <Form className={styles.form}>
                <div className={styles.titleForm}>
                  <p>{t('changePassword.recoverPassword')}</p>
                </div>
                <div className={styles.leyend}>
                  <p>
                    {t('changePassword.recoverPasswordLeyend')}
                  </p>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className={`form-label ${styles.label}`}
                  >
                    {t('changePassword.email')}
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className={`form-control ${styles.field}`}
                    placeholder={t('changePassword.insertEmail')}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <Button
                  type="submit"
                  className={`btn btn-primary ${styles.customButton}`}
                >
                  {t('changePassword.send')}
                </Button>
              </Form>
            )}
          </Formik>}
          {step === 2 && <Formik
            initialValues={{
              code: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validCodeSchema}
            onSubmit={async (values) => {
              await onSubmitCode(values.code, values.password);
            }}
          >
            {() => (
              <Form className={styles.form}>
                <div className={styles.titleForm}>
                  <p>{t('changePassword.recoverPassword')}</p>
                </div>
                <div className={styles.leyend}>
                  <p>
                    {t('changePassword.sendCodeLeyend')}
                  </p>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="code"
                    className={`form-label ${styles.label}`}
                  >
                    {t('changePassword.code')}
                  </label>
                  <Field
                    name="code"
                    type="string"
                    className={`form-control ${styles.field}`}
                    placeholder={t('changePassword.insertCode')}
                  />
                  <ErrorMessage
                    name="code"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className={`form-label ${styles.label}`}
                  >
                    {t('changePassword.password')}
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className={`form-control ${styles.field}`}
                    placeholder={t('changePassword.insertPassword')}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="confirmPassword"
                    className={`form-label ${styles.label}`}
                  >
                    {t('changePassword.confirmPassword')}
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={`form-control ${styles.field}`}
                    placeholder={t('changePassword.insertConfirmPassword')}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <Button
                  type="submit"
                  className={`btn btn-primary ${styles.customButton}`}
                >
                  {t('changePassword.changePassword')}
                </Button>
                {timeRemaining > 0 && <div className={styles.timeRemaining}>
                  {t("registerPage.timeRemaining", {
                    time: timeRemaining,
                  })}
                </div>}
                <button
                  className={styles.resendCode}
                  type="button"
                  disabled={timeRemaining > 0}
                  onClick={async () => {
                    await onSubmitEmail(email);
                    setTimeRemaining(60)
                  }}
                >
                  <p>{t("registerPage.resendCode")}</p>
                </button>
              </Form>
            )}
          </Formik>}
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
