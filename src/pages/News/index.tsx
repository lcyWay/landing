import React from "react";
import classnames from "classnames";
import { Helmet } from "react-helmet";

import Header from "components/Header";
import Footer from "components/Footer";
import Typography from "components/Typography";

import { mainContainerStyles } from "styles/main.css";
import { lightThemeStyles } from "styles/themes/lightTheme.css";

import { news } from "./news";
import NewsCard from "./NewsCard";
import FilterTags, { FILTER_TAGS } from "./FilterTags";

import { newsContainerStyles, newsHeaderContainerStyles, newsListContainerStyles } from "./style.css";

function NewsPage() {
  const [activeTag, setActiveTag] = React.useState(FILTER_TAGS[0]);

  const filteredNews = React.useMemo(() => {
    if (activeTag === FILTER_TAGS[0]) return news;
    return news.filter((news) => news.tag === activeTag);
  }, [activeTag]);

  return (
    <div className={classnames(mainContainerStyles, lightThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#fff" />
        <title>ГОРПРОЕКТ - Новости</title>
      </Helmet>
      <Header sticky />
      <div className={newsContainerStyles}>
        <div className={newsHeaderContainerStyles}>
          <Typography fontSize="bold" lineHeight="bold" fontWeight="medium" letterSpacing="3px">
            НОВОСТИ
          </Typography>
          <FilterTags active={activeTag} setActive={setActiveTag} />
        </div>
        <div className={newsListContainerStyles}>
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(NewsPage);
