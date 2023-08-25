import HeaderTwo from "@/src/layout/headers/header-2"; 
import FooterTwo from "@/src/layout/footers/footer-2";
import React from "react";
import RegisterArea from "./register-area";

const Register = () => {
  return (
    <>
      <HeaderTwo />
      <RegisterArea />
      <FooterTwo style_contact={true} style_team={true} />
    </>
  );
};

export default Register;
