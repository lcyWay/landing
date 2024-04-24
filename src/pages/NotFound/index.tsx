import React from "react";
import classNames from "classnames";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import Typography from "components/Typography";

import { mainContainerStyles } from "styles/main.css";
import { lightThemeStyles } from "styles/themes/lightTheme.css";

import { notFoundContainerStyles } from "./style.css";

function NotFoundPage() {
  return (
    <div className={classNames(mainContainerStyles, lightThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#fff" />
        <title>Страница не найдена</title>
      </Helmet>
      <Header sticky />
      <div className={notFoundContainerStyles}>
        <Typography fontSize="title" lineHeight="title" fontWeight="medium" letterSpacing="1px">
          Страница не найдена
        </Typography>
        <Link to="/">
          <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px">
            НА ГЛАВНУЮ
          </Typography>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(NotFoundPage);
