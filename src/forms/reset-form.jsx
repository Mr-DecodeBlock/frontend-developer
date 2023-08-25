import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import axios from "axios";
import { config } from "../utils/config";

const ResetForm = () => {
  const [showVerificationCodeInput, setShowVerificationCodeInput] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();

  const url = config.serverURL;

  const onSubmitEmail = (data) => {
    console.log("Email submitted:", data.email);
    // lógica para enviar el email de verificación
    // y mostrar el siguiente paso del formulario
    axios.post(`${url}/users/password_reset/send_code`, data)
      .then((res) => {
        console.log(res)
        setShowVerificationCodeInput(true);
      })
      .catch((error) => {
        console.log(error)
        alert("error");
      })
  };

  const onSubmitVerificationCode = (data) => {
    // lógica para verificar el código de verificación
    // y mostrar el siguiente paso del formulario
    console.log("Verification code submitted:", data.verificationCode);
    console.log("New password submitted:", data.newPassword);
    const body = { code: data.verificationCode, newPassword: data.newPassword }
    console.log("body:", body)
    axios.post(`${url}/users/password_reset/reset`, body)
      .then((res) => {
        console.log(res);
        alert("se ha restablecido su contraseña")
        window.location.href = "/sign-in";
      })
      .catch((error) => {
        console.log(error)
        alert("error intente nuevamente");
      })
    setShowVerificationCodeInput(false);
    setShowPasswordForm(false);
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
      {!showVerificationCodeInput && !showPasswordForm && (
        <form onSubmit={handleSubmit(onSubmitEmail)}>
          <div className="row">
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  className="inputText"
                />
                <span className="floating-label">{t("email")}</span>
                {errors.email && <p className="form_error">{t("emailRequired")}</p>}
              </div>
            </div>
          </div>
          <div className="signin-banner-from-btn mb-20">
            <button type="submit" className="signin-btn">{t("submitButton")}</button>
          </div>
        </form>
      )}

      {showVerificationCodeInput && !showPasswordForm && (
        <form onSubmit={handleSubmit(onSubmitVerificationCode)}>
          <div className="row">
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input
                  type="text"
                  id="verificationCode"
                  {...register("verificationCode", { required: true })}
                  className="inputText"
                />
                <span className="floating-label">{t("verificationCode")}</span>
                {errors.verificationCode && <p className="form_error">{t("verificationCodeRequired")}</p>}
              </div>
            </div>
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input
                  type={passwordType}
                  id="newPassword"
                  {...register("newPassword", {
                    required: true,
                  })}
                  className="inputText password"
                />
                <span className="floating-label">{t("newPassword")}</span>
                {errors.newPassword && <p className="form_error">{t("newPasswordRequired")}</p>}
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
            </div>
          </div>
          <div className="signin-banner-from-btn mb-20">
            <button type="submit" className="signin-btn">{t("verifyButton")}</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ResetForm;
