import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2"; 
import React from "react";
import SingnInArea from "./singn-in-area";

const SignIn = () => {
  return (
    <>
      <HeaderTwo/>
      <SingnInArea />
      <FooterTwo style_contact={true} style_team={true} />
    </>
  );
};

export default SignIn;
