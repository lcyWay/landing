import React from "react";
import { Link } from "react-router-dom";

import Typography from "components/Typography";

import { NewsInterface } from "../news";

import { newsCardContainerStyles, newsCardImageStyles, newsCardTitleStyles } from "./style.css";

interface NewsCardInterface {
  news: NewsInterface;
}

function NewsCard({ news }: NewsCardInterface) {
  return (
    <Link to={`/news/${news.id}/`} className={newsCardContainerStyles}>
      <div className={newsCardTitleStyles}>
        <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px" color="hint">
          {news.date}
        </Typography>
        <Typography fontSize="title" lineHeight="title">
          {news.title}
        </Typography>
      </div>
      <img src={news.imageSrc} className={newsCardImageStyles} />
    </Link>
  );
}

export default React.memo(NewsCard);
