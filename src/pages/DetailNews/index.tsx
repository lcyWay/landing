import React from "react";
import classnames from "classnames";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import Typography from "components/Typography";

import { NewsInterface, news } from "pages/News/news";

import { mainContainerStyles } from "styles/main.css";
import { lightThemeStyles } from "styles/themes/lightTheme.css";

import { detailNewsContainerStyles } from "./style.css";

function DetailNewsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newsData, setNewsData] = React.useState<NewsInterface | null>(null);

  React.useEffect(() => {
    const foundData = news.find((news) => news.id === id);

    if (!foundData) {
      navigate("/404/");
      return;
    }

    setNewsData(foundData);
  }, [id, navigate]);

  if (!newsData) return null;

  return (
    <div className={classnames(mainContainerStyles, lightThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#fff" />
        <title>ГОРПРОЕКТ - Новости</title>
      </Helmet>
      <Header sticky />
      <div className={detailNewsContainerStyles}>
        <div>
          <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" color="hint" letterSpacing="1px">
            {newsData.date}
          </Typography>
          <Typography fontSize="bold" lineHeight="bold">
            {newsData.title}
          </Typography>
        </div>
        {newsData.body.map((text, index) => (
          <Typography
            fontSize="caption"
            lineHeight="caption"
            fontWeight="light"
            key={index}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(DetailNewsPage);
