import React from "react";

import Typography from "components/Typography";

import { VacancyInterface } from "../vacancies";

import {
  vacancyCityStyles,
  vacancyContainerStyles,
  vacancyDescriptionBlockStyles,
  vacancyDescriptionContainerStyles,
  vacancyDescriptionListStyles,
  vacancyDescriptionVisibilityContainerStyles,
  vacancyOpenStyles,
  vacancyTitleContainerStyles,
  vacancyTitleStyles,
  vacancyTitleSubContainerStyles,
} from "./style.css";

interface VacancyCardInterface {
  vacancy: VacancyInterface;
}

function Vacancy({ vacancy }: VacancyCardInterface) {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const [isDescriptionVisible, setDescriptionVisible] = React.useState(false);

  const handleDescriptionVisibilityToggle = React.useCallback(() => setDescriptionVisible((value) => !value), []);

  return (
    <div className={vacancyContainerStyles}>
      <div className={vacancyTitleContainerStyles} onClick={handleDescriptionVisibilityToggle}>
        <Typography fontSize="caption" lineHeight="caption" className={vacancyTitleStyles}>
          {vacancy.title}
        </Typography>
        <div className={vacancyTitleSubContainerStyles}>
          <Typography
            fontSize="hint"
            lineHeight="hint"
            fontWeight="medium"
            letterSpacing="1px"
            className={vacancyCityStyles}
          >
            {vacancy.city}
          </Typography>
          <Typography
            fontSize="hint"
            lineHeight="hint"
            fontWeight="medium"
            letterSpacing="1px"
            className={vacancyOpenStyles}
          >
            {isDescriptionVisible ? "СКРЫТЬ" : "ПОДРОБНЕЕ"}
          </Typography>
        </div>
      </div>
      <div
        className={vacancyDescriptionVisibilityContainerStyles}
        style={{ height: isDescriptionVisible ? contentRef.current!.offsetHeight : 0 }}
      >
        <div ref={contentRef} className={vacancyDescriptionContainerStyles}>
          <div className={vacancyDescriptionBlockStyles}>
            <div className={vacancyDescriptionListStyles}>
              <Typography fontSize="caption" lineHeight="caption" letterSpacing="0.5px">
                Обязательные требования:
              </Typography>
              <div>
                {vacancy.requirements.map((requirement, index) => (
                  <Typography fontSize="paragraph" color="hint" lineHeight="paragraph" key={index}>
                    - {requirement}
                  </Typography>
                ))}
              </div>
            </div>
            <div className={vacancyDescriptionListStyles}>
              <Typography fontSize="caption" lineHeight="caption" letterSpacing="0.5px">
                Обязанности:
              </Typography>
              <div>
                {vacancy.responsibilities.map((responsibility, index) => (
                  <Typography fontSize="paragraph" color="hint" lineHeight="paragraph" key={index}>
                    - {responsibility}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
          <div className={vacancyDescriptionBlockStyles}>
            <div className={vacancyDescriptionListStyles}>
              <Typography fontSize="caption" lineHeight="caption" letterSpacing="0.5px">
                Условия:
              </Typography>
              <div>
                {vacancy.conditions.map((condition, index) => (
                  <Typography fontSize="paragraph" color="hint" lineHeight="paragraph" key={index}>
                    - {condition}
                  </Typography>
                ))}
              </div>
            </div>
            <Typography fontSize="caption" lineHeight="caption">
              Просьба указывать в резюме ожидания по заработной плате.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Vacancy);
