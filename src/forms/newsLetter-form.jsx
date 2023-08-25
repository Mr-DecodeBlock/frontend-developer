import React from "react";
import EmailIcon from '@/src/svg/email';
import RightArrow from '@/src/svg/right-arrow';
import { UseForm, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { config } from "../utils/config";
const url = config.serverURL;
import axios from "axios";

const NewsLetterForm = () => {
    const {t} = useTranslation();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const body = { email: data.email}
        axios.post(`${url}/newsletters`, body)
            .then((res) => {
                console.log(res)
                alert(t("subscriptionSuccessful"))
            })
            .catch((error) => {
                console.log(error)
                alert("no se pudo realizar la suscripcion")
            })
    }

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type="email" 
                placeholder={t("JoinWithEmail")}
                required
                {...register("email")}/>
                <span>
                    <EmailIcon />
                </span>
                <button type="submit">
                    <RightArrow />
                </button>
            </form>
        </>
    );
};

export default NewsLetterForm;
