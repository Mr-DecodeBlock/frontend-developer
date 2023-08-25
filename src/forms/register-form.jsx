import React, { useState, useEffect } from "react";
import axios from "axios";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { config } from "../utils/config";
import { generateUUID } from "../helpers/getId";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const url = config.serverURL;
  const [validCode, setValidCode] = useState(1);
  const [alarm, setAlarm] = useState(0);
  const [userBody, setUserBody] = useState({});

  const schema = yup
    .object({
      firstName: yup.string().required(t("FirstNameRequired")),
      lastName: yup.string().required(t("lastNameRequired")),
      username: yup.string().required(t("usernameRequired")),
      dateOfBirth: yup.string().required(t("dateOfBirth")),
      email: yup.string().required(t("emailRequired")).email(t("emailInvalid")),
      password: yup.string().required(t("passwordRequired")).min(6, t("passwordMinLength")),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    generateUUID();
  }, []);

  const validRegister = (data) => {
    console.log(data)
    if (alarm === 0) {
      console.log(data)
      setUserBody(data);
      console.log(userBody)
      axios.post(`${url}/users/registration/send_code`, data)
        .then((res) => {
          setAlarm(1);
          console.log(res)
          alert("se envió el código al correo");
        })
        .catch((error) => {
          console.log(error);
          // alert(error.response.data.message)
        });
      reset();
    } else {
      if (alarm === 1) {
        const uuId = localStorage.getItem("deviceId");
        const updateData = { ...userBody, code: String(validCode), deviceId: String(uuId) };
        console.log(updateData);
        axios
          .post(`${url}/users`, updateData)
          .then((res) => {
            console.log(res);
            alert("Bienvenido a Business Shop");
            router.push("/sign-in");
          })
          .catch((error) => {
            console.log(error);
            alert("no se ha podido registrar");
          });
      } else {
        alert("código de validación incorrecto");
      }
    }
  };

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const [passwordType, setPasswordType] = useState("password");

  return (
    <>
      {alarm !== 0 ? (
        <form>
          <div className="row">
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input
                  name="codigo"
                  onChange={(e) => setValidCode(e.target.value)}
                  className="inputText"
                />
                <span className="floating-label">{t("verificationCode")}</span>
              </div>
            </div>
          </div>

          <div className="signin-banner-from-btn mb-20">
            <button type="submit" className="signin-btn" onClick={() => validRegister(userBody)}>
              {t("verifyButton")}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(validRegister)}>
          <div className="row">
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input name="firstName" {...register("firstName")} className="inputText" />
                <span className="floating-label">{t("firstName")}</span>
                <p className="form_error">{errors.firstName?.message}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input name="lastName" {...register("lastName")} className="inputText" />
                <span className="floating-label">{t("lastName")}</span>
                <p className="form_error">{errors.lastName?.message}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input name="username" {...register("username")} className="inputText" />
                <span className="floating-label">{t("username")}</span>
                <p className="form_error">{errors.username?.message}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input name="dateOfBirth" type="date" {...register("dateOfBirth")} className="inputText" />
                <span className="floating-label">{t("dateOfBirth")}</span>
                <p className="form_error">{errors.dateOfBirth?.message}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input name="email" className="inputText" {...register("email")} />
                <span className="floating-label">{t("email")}</span>
                <p className="form_error">{errors.email?.message}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-30">
                <div className="postbox__comment-input">
                  <input
                    id="myInput"
                    className="inputText password"
                    type={passwordType}
                    name="password"
                    {...register("password")}
                  />
                  <span className="floating-label">{t("password")}</span>
                  <span id="click" className="eye-btn" onClick={togglePassword}>
                    {passwordType === "password" ? (
                      <span className="eye-off">
                        <EyeOff />
                      </span>
                    ) : (
                      <span className="eye-off">
                        <EyeOn />
                      </span>
                    )}
                  </span>
                </div>
                <p className="form_error">{errors.password?.message}</p>
              </div>
            </div>
          </div>
          <div className="signin-banner-form-remember">
            <div className="row">
              <div className="col-6">
                <div className="postbox__comment-agree">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      {t("rememberMe")}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="signin-banner-from-btn mb-20">
            <button type="submit" className="signin-btn ">
              {t("register")}
            </button>
          </div>
          <div className="signin-banner-from-register">
            <Link href="/sign-in">
              {t("alreadyHaveAccount")} <span>{t("signIn")}</span>
            </Link>
          </div>
        </form>
      )}
    </>
  );
};

export default RegisterForm;
