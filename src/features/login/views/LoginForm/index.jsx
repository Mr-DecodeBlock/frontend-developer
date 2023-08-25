import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import animationCoin from "../../../../../public/assets/img/login/animation_coin.gif";
import backgraund from "../../../../../public/assets/img/login/Modo de aislamiento.svg";
import logo from "../../../../../public/assets/img/login/logo.svg";
import Image from "next/image";
import styles from "./styles.module.css";
import { Button, FormCheck } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/slices/user.slice";
import { setSesionInfo } from "../../../../store/slices/sesionSlice";
import { generateUUID } from "../../../../helpers/getId";
import axios from "../../../../utils/custom-axios";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import toast from 'react-hot-toast';

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [loginData, setLoginData] = useState();
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    generateUUID();
  }, []);

  useEffect(() => {
    if (step === 2) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [step]);

  const onSubmit = async (username, password, newIpVerificationCode) => {
    try {
      const body = {
        username,
        password,
        deviceId: localStorage.getItem("deviceId"),
        newIpVerificationCode,
      };
      const res = await axios.post("/users/login", body);
      localStorage.setItem("token", res.data.token);
      const userData = {
        name: res.data.user.name,
        email: res.data.user.email,
        username: res.data.username,
      };
      // alert(t("loggedIn")); // Traducción personalizada para "Logeado"
      dispatch(setUser(userData));
      dispatch(setSesionInfo({ token: res.data.token }));
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 403) {
          setStep(2);
          setLoginData({ username, password });
          return;
        }

        toast.error(t("login.invalidCredentials"));
      }
      // alert(error);
    }
  };

  const validationSchema = Yup.object({
    // email: Yup.string().email("Email inválido").required("Requerido"),
    username: Yup.string().required(t("login.required")),
    password: Yup.string().required(t("login.required")),
  });

  const validCodeSchema = Yup.object({
    code: Yup.string().required(t("login.required")),
  });

  // const validationSchema = Yup.object({
  //   email: Yup.string().email(t('login.invalidEmail')).required("login.required"),
  //   password: Yup.string().required(t("login.required")),
  // });

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     router.push("/");
  //   }
  // }, []);

  return (
    <div className={styles.container}>
      <Image src={backgraund} alt="back" className={styles.backgraund} />
      <div className={styles.containerLeft}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>
            {t("login.welcomeTo")} <br />
            Bussiness<span>Shop</span>
          </p>
        </div>
        <div className={styles.worldContainer}>
          <Image src={animationCoin} alt="login image" />
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.cardLogin}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" />
          </div>
          {step === 1 && (
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                onSubmit(values.username, values.password);
              }}
            >
              {() => (
                <Form className={styles.form}>
                  <div className={styles.titleForm}>
                    <p>{t("login.title")}</p>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className={`form-label ${styles.label}`}
                    >
                      {/* {t('login.labelEmail')} */}
                      {t("registerPage.username")}
                    </label>
                    <Field
                      name="username"
                      type="username"
                      // placeholder={t('login.placeholderEmail')}
                      placeholder={t("registerPage.insertUsername")}
                      className={`form-control ${styles.field}`}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="input-group">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={t("login.placeholderPassword")}
                      className={`form-control ${styles.field}`}
                    />
                    <div className="input-group-append ">
                      <button
                        type="button"
                        className={`btn btn-outline-secondary ${styles.buttonEye}`}
                        onClick={togglePasswordVisibility}
                      >
                        <i
                          className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                        ></i>
                      </button>
                    </div>
                    <div className={styles.forgetPassword}>
                      <p onClick={() => router.push("/change-password")}>
                        {t("login.forgotPassword")}
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className={`btn btn-primary ${styles.customButton}`}
                  >
                    {t("login.submit")}
                  </Button>
                  <div className={styles.checkContainer}>
                    <FormCheck className={styles.customCheck}></FormCheck>
                    <p>{t("login.rememberMe")}</p>
                  </div>
                  <div className={styles.register}>
                    <p>
                      {t("login.noAccount")}{" "}
                      <span onClick={() => router.push("/register")}>
                        {t("login.register")}
                      </span>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          )}
          {step === 2 && (
            <Formik
              initialValues={{
                code: "",
              }}
              validationSchema={validCodeSchema}
              onSubmit={(values) => {
                if (!loginData) return;
                onSubmit(loginData.username, loginData.password, values.code);
              }}
            >
              {() => (
                <Form className={styles.form}>
                  <div className={styles.titleForm}>
                    <p>{t("login.title")}</p>
                    <span>{t("login.newLogin")}</span>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className={`form-label ${styles.label}`}
                    >
                      {/* {t('login.labelEmail')} */}
                      {t("login.code")}
                    </label>
                    <Field
                      name="code"
                      type="string"
                      // placeholder={t('login.placeholderEmail')}
                      placeholder={t("login.placeholderCode")}
                      className={`form-control ${styles.field}`}
                    />
                    <ErrorMessage
                      name="code"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <Button
                    type="submit"
                    className={`btn btn-primary ${styles.customButton}`}
                  >
                    {t("login.confirm")}
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
                      await onSubmit(loginData.username, loginData.password);
                      setTimeRemaining(60)
                    }}
                  >
                    <p>{t("registerPage.resendCode")}</p>
                  </button>
                  <div className={styles.checkContainer}>
                    <FormCheck className={styles.customCheck}></FormCheck>
                    <p>{t("login.rememberMe")}</p>
                  </div>
                  <div className={styles.register}>
                    <p>
                      {t("login.noAccount")}{" "}
                      <span onClick={() => router.push("/register")}>
                        {t("login.register")}
                      </span>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
