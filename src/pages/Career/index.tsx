import React from "react";
import classnames from "classnames";
import { Helmet } from "react-helmet";

import Header from "components/Header";
import Footer from "components/Footer";

import { mainContainerStyles } from "styles/main.css";
import { lightThemeStyles } from "styles/themes/lightTheme.css";

import Vacancies from "./Vacancies";
import CareerInfo from "./CareerInfo";

function CareerPage() {
  return (
    <div className={classnames(mainContainerStyles, lightThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#fff" />
        <title>ГОРПРОЕКТ - Карьера</title>
      </Helmet>
      <Header sticky />
      <CareerInfo />
      <Vacancies />
      <Footer />
    </div>
  );
}

export default React.memo(CareerPage);
