import imageRegister from "../../../../../public/assets/img/register/imageRegister.svg";
import backgraund from "../../../../../public/assets/img/login/Modo de aislamiento.svg";
import logo from "../../../../../public/assets/img/login/logo.svg";
import Image from "next/image";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import DateInput from "./components/DateInput";
import { useRouter } from "next/router";
// import axios from "axios";
import axios from '../../../../utils/custom-axios';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/slices/user.slice";
import { setSesionInfo } from "../../../../store/slices/sesionSlice";
import { generateUUID } from "../../../../helpers/getId";


const RegisterForm = () => {
  const time = 1 * 60 * 1000; // 1 minute
  const [t] = useTranslation();
  const router = useRouter();
  const [verification, setVerification] = useState(false);
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState(null);
  const [dataCode, setDataCode] = useState(null);
  // const [endTime, setEndTime] = useState(new Date(Date.now() + time));
  const [timeRemaining, setTimeRemaining] = useState(60);
  const dispatch = useDispatch();
  const url = "https://backendglobal.herokuapp.com/api";
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  useEffect(() => {
    generateUUID();
  }, []);

  // Ocultar con * los caracteres del correo
  const hideEmail = (email) => {
    const [name, domain] = email.split("@");
    const hiddenName = name[0] + "*".repeat(name.length - 1);
    return `${hiddenName}@${domain}`;
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("login.required")),
    lastName: Yup.string().required(t("login.required")),
    username: Yup.string().required(t("login.required")),
    dateOfBirth: Yup.date()
      .max(eighteenYearsAgo, t("login.under18"))
      .required(t("login.required")),
    email: Yup.string()
      .email(t("login.invalidEmail"))
      .required(t("login.required")),
    password: Yup.string().required(t("login.required")),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    dateOfBirth: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    if (verification) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [verification]);


  const handleSubmit = async (values) => {
    try {
      const dataCode = {
        username: values.username,
        email: values.email,
      };

      await axios.post(
        `/users/registration/send_code`,
        dataCode
      );
      setFormData(values);
      setVerification(true);
      setDataCode(dataCode);
      notify(values.email);
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 409) {
          toast.error(t("registerPage.userAlreadyExists"));
          return;
        }
      }

      toast.error(t("general.serverError"));
    }
  };

  const resendCode = async (dataCode) => {
    await handleSubmit(dataCode)
  }

  const handleVerificationSubmit = async () => {
    if (!formData) return;
    const completeData = {
      ...formData,
      code: code,
      deviceId: localStorage.getItem("deviceId"),
    };
    try {
      const res = await axios.post(`/users`, completeData);
      localStorage.setItem('token', res.data.token);
      const userData = {
        name: res.data.user.name,
        email: res.data.user.email,
        username: res.data.username
      };
      // alert(t("loggedIn")); // Traducción personalizada para "Logeado"
      dispatch(setUser(userData));
      dispatch(setSesionInfo({ token: res.data.token }));
      router.push("/dashboard");
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
  };


  const notify = (email) => {
    const hiddenEmail = hideEmail(email);
    const message = t("registerPage.sendCodeAlert", { email: hiddenEmail });
    toast(message, {
      icon: "📧",
    });
  };


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
          <Image src={imageRegister} alt="register image" />
        </div>
      </div>
      {verification ? (
        <div className={styles.formContainer}>
          <div className={styles.card} style={{ height: "38.56rem" }}>
            <div className={styles.logoContainer}>
              <Image src={logo} alt="logo" />
            </div>
            <div className={styles.insertCode}>
              <p style={{ color: "#ffff" }}>
                {t("registerPage.verificationEmail")}
              </p>
              <label
                htmlFor="verificationCode"
                className={`form-label ${styles.label}`}
              >
                {t("registerPage.insertCodeLeyend")}
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={`form-control ${styles.field}`}
                placeholder={t("registerPage.insertCode")}
              />
              <Button
                onClick={handleVerificationSubmit}
                className={`btn btn-primary ${styles.customButton}`}
              >
                {t("registerPage.register")}
              </Button>
              {timeRemaining > 0 && <div className={styles.timeRemaining}>
                {t("registerPage.timeRemaining", {
                  time: timeRemaining,
                })}
              </div>}
              <button
                className={styles.resendCode}
                disabled={timeRemaining > 0}
                onClick={async () => {
                  await resendCode(dataCode)
                  setTimeRemaining(60)
                }}
              >
                <p>{t("registerPage.resendCode")}</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.formContainer}>
          <div className={styles.card}>
            <div className={styles.logoContainer}>
              <Image src={logo} alt="logo" />
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {() => (
                <Form className={styles.form}>
                  <div className={styles.titleForm}>
                    <p>{t("registerPage.register")}</p>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="firstName"
                      className={`form-label ${styles.label}`}
                    >
                      {t("registerPage.firstName")}
                    </label>
                    <Field
                      name="firstName"
                      type="text"
                      className={`form-control ${styles.field}`}
                      placeholder={t("registerPage.insertFirstName")}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="lastName"
                      className={`form-label ${styles.label}`}
                    >
                      {t("registerPage.lastName")}
                    </label>
                    <Field
                      name="lastName"
                      type="text"
                      className={`form-control ${styles.field}`}
                      placeholder={t("registerPage.insertLastName")}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="username"
                      className={`form-label ${styles.label}`}
                    >
                      {t("registerPage.username")}
                    </label>
                    <Field
                      name="username"
                      type="text"
                      className={`form-control ${styles.field}`}
                      placeholder={t("registerPage.insertUsername")}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label className={`form-label ${styles.label}`}>
                      {t("registerPage.birthDate")}
                    </label>
                    <DateInput />
                    <ErrorMessage
                      name="dateOfBirth"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className={`form-label ${styles.label}`}
                    >
                      {t("registerPage.email")}
                    </label>
                    <Field
                      name="email"
                      type="text"
                      placeholder={t("registerPage.insertEmail")}
                      className={`form-control ${styles.field}`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="input-group mb-3">
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
                          className={`fa ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                        ></i>
                      </button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className={`btn btn-primary ${styles.customButton}`}
                  >
                    {t("registerPage.continue")}
                  </Button>
                  {/* <div className={styles.checkContainer}>
      <FormCheck className={styles.customCheck}></FormCheck>
      <p>{t("registerPage.rememberMe")}</p>
    </div> */}
                  <div className={styles.register}>
                    <p>
                      {t("registerPage.account")}{" "}
                      <span onClick={() => router.push("/login")}>
                        {t("registerPage.login")}
                      </span>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
