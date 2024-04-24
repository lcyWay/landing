import React from "react";
import classnames from "classnames";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

import { mainContainerStyles } from "styles/main.css";
import { lightThemeStyles } from "styles/themes/lightTheme.css";

import Tabs, { TABS_LIST } from "./Tabs";
import FactsTab from "./FactsTab";
import CompanyTab from "./CompanyTab";
import PartnersTab from "./PartnersTab";
import CompanyGroupTab from "./CompanyGroupTab";

function scrollToElement(id: string) {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.offsetTop - 171, behavior: "smooth" });
  }, 100);
}

function HomePage() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  const [currentTab, setCurrentTab] = React.useState(TABS_LIST[0].id);

  React.useEffect(() => {
    if (!hash) return;
    const foundTab = TABS_LIST.find((tab) => tab.id === hash);
    navigate("/company/");
    if (!foundTab) return;
    scrollToElement(foundTab.id);
  }, [hash, navigate]);

  const handleWindowScroll = React.useCallback(() => {
    const tabs = document.getElementsByClassName("hashtab");
    const scrollTop = window.scrollY + 171;

    for (let index = tabs.length - 1; index >= 0; index--) {
      const element = tabs[index] as HTMLDivElement;
      if (element.offsetTop - 100 > scrollTop) continue;
      setCurrentTab(element.id);
      break;
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [handleWindowScroll]);

  return (
    <div className={classnames(mainContainerStyles, lightThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#fff" />
        <title>ГОРПРОЕКТ - О компании</title>
      </Helmet>
      <Header sticky />
      <Tabs currentTab={currentTab} />
      <CompanyTab />
      <PartnersTab />
      <CompanyGroupTab />
      <FactsTab />
      <Footer />
    </div>
  );
}

export default React.memo(HomePage);
