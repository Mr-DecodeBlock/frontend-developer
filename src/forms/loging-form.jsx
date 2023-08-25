import React, { useEffect, useState } from "react";
import axios from "axios";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { config } from "../utils/config";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/user.slice";
import { setSesionInfo } from "../store/slices/sesionSlice";
import { generateUUID } from "../helpers/getId";
import { useTranslation } from 'react-i18next';

const schema = yup
  .object({
    username: yup.string().required().label("Username"),
    password: yup.string().required().min(6).label("Password"),
  })
  .required();

const LogingForm = () => {
  const { t } = useTranslation();
  const url = config.serverURL;
  const dispatch = useDispatch();
  const router = useRouter();
  const [updateData, setUpdateData] = useState({});

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

  const onSubmit = (data) => {
    axios
      .post(`${url}/users/login`, { ...data, deviceId: localStorage.getItem("deviceId") })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        const userData = {
          name: res.data.user.name,
          email: res.data.user.email,
          username: res.data.username
        };
        alert(t("loggedIn")); // Traducción personalizada para "Logeado"
        dispatch(setUser(userData));
        dispatch(setSesionInfo({ token: res.data.token }));
        router.push("/dashboard");
      })
      .catch((error) => {
        alert(error);
      });
    reset();
  };

  // password show & hide
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                name="username"
                className="inputText"
                {...register("username")}
              />
              <span className="floating-label">{t("username")}</span>
              <p className="form_error">{errors.username?.message}</p>
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
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {t("rememberMe")}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="postbox__forget text-end">
                <Link href="/reset">{t("forgotPassword")}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="signin-banner-from-btn mb-20">
          <button type="submit" className="signin-btn ">
            {t("signIn")}
          </button>
        </div>
        <div className="signin-banner-from-register">
          <Link href="/register">
            {t("alreadyHaveAccount")} <span>{t("register")}</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LogingForm;