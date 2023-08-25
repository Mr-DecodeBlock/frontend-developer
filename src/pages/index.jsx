import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home-2";
import HomeTwo from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";
import { HomeContainer } from "../features/home/container";

// PANEL DE CONTROL: Nombre de la página

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <HomeContainer />
      {/* <HomeOne /> */}
    </Wrapper>
  );
};

export default Home;
