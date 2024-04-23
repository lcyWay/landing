import React from "react";

import Typography from "components/Typography";

import { filterActiveTagStyles, filterTagStyles, filterTagsContainerStyles } from "./style.css";

export const FILTER_TAGS = ["ВСЕ", "2023", "2022", "2021", "2020"];

interface FilterTagsInterface {
  active: string;
  setActive: (tag: string) => void;
}

function FilterTags({ active, setActive }: FilterTagsInterface) {
  return (
    <div className={filterTagsContainerStyles}>
      {FILTER_TAGS.map((tag) => {
        const isActive = tag === active;
        return (
          <Typography
            className={isActive ? filterActiveTagStyles : filterTagStyles}
            fontSize="hint"
            lineHeight="hint"
            fontWeight="medium"
            letterSpacing="1px"
            onClick={() => setActive(tag)}
            key={tag}
          >
            {tag}
          </Typography>
        );
      })}
    </div>
  );
}

export default React.memo(FilterTags);
