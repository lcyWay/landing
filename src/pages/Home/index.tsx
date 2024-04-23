import React from "react";
import classnames from "classnames";

import Header from "components/Header";
import Footer from "components/Footer";

import { mainContainerStyles } from "styles/main.css";
import { darkThemeStyles } from "styles/themes/darkTheme.css";

import Projects from "./Projects";
import InformationBlock from "./InformationBlock";

function HomePage() {
  return (
    <div className={classnames(mainContainerStyles, darkThemeStyles)}>
      <Header />
      <Projects />
      <InformationBlock />
      <Footer />
    </div>
  );
}

export default React.memo(HomePage);
