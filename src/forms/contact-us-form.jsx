import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NiceSelect from "../ui/nice-select";
import axios from "axios";
import { config } from "../utils/config";
import { useTranslation } from 'react-i18next';

const ContactUsForm = () => {
  const {t} = useTranslation();
  const { register, handleSubmit } = useForm();
  const [select, setSelect] = useState("")
  const url = config.serverURL;

  const selectHandler = (e) => {
    setSelect(e.value)
  };

  const onSubmit = (data) => {
    // Manejar el envío del formulario
    const body = {...data, department: select}
    console.log(body);
    axios.post(`${url}/contact_us`, body)
      .then((res) => {
        console.log(res)
        alert("se ha enviado el mensaje")
      })
      .catch((error) => {
        console.log(error)
        alert("no se pudo enviar el mensaje")
      })
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                className="inputText"
                required
                {...register("fullName")} // Registrar el campo fullName
              />
              <span className="floating-label">{t("fullname")}</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                className="inputText"
                required
                {...register("email")} // Registrar el campo email
              />
              <span className="floating-label">{t("email")}</span>
            </div>
          </div>

          <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "Support", text: t("departmentSupport") },
                  { value: "Laws", text: t("departmentLaws") },
                  { value: "Development", text: t("departmentDevelopment") },
                  { value: "BugBounty", text: t("departmentBugBounty") },
                  { value: "Information", text: t("departmentDoubts") },
                  { value: "Integration", text: t("departmentIntegration") },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                className="textareaText"
                required
                {...register("message")} // Registrar el campo message
              ></textarea>
              <span className="floating-label-2"> {t("message")} </span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button className="submit-btn w-100" type="submit" style={{borderRadius: "16px"}}> {t("SendRequest")} </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
