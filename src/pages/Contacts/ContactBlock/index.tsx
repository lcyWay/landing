import React from "react";

import Typography from "components/Typography";

import {
  contactBlockContainerStyles,
  contactBlockDividerStyles,
  contactBlockImageStyles,
  contactBlockLeftSideContainerStyles,
  contactBlockMailsContainerStyles,
  contactBlockPhonesContainerStyles,
  contactBlockRightSideContainerStyles,
} from "./style.css";

interface ContactBlockInterface {
  location: string;
  address: string;
  first_phone: string;
  second_phone: string;
  src: string;
  main_mail?: string;
  news_mail?: string;
  career_mail?: string;
}

function ContactBlock({
  location,
  address,
  first_phone,
  second_phone,
  src,
  main_mail,
  news_mail,
  career_mail,
}: ContactBlockInterface) {
  const showMailBlock = main_mail || news_mail || career_mail;

  return (
    <div className={contactBlockContainerStyles}>
      <div className={contactBlockLeftSideContainerStyles}>
        <Typography fontSize="bold" lineHeight="bold" letterSpacing="0.5px">
          {location}
        </Typography>
        <Typography fontSize="paragraph" lineHeight="paragraph" color="hint">
          {address}
        </Typography>
        <div className={contactBlockDividerStyles} />
        <Typography fontSize="hint" lineHeight="hint" letterSpacing="1px" fontWeight="medium">
          ПОКАЗАТЬ НА КАРТЕ
        </Typography>
        <div className={contactBlockDividerStyles} />
        <div className={contactBlockPhonesContainerStyles}>
          <a href={`tel:${first_phone}`}>
            <Typography fontSize="caption" lineHeight="caption" letterSpacing="1px">
              {first_phone}
            </Typography>
          </a>
          <a href={`tel:${second_phone}`}>
            <Typography fontSize="caption" lineHeight="caption" letterSpacing="1px">
              {second_phone}
            </Typography>
          </a>
        </div>
      </div>
      <div className={contactBlockRightSideContainerStyles}>
        <img className={contactBlockImageStyles} src={src} alt="Office" />
        {!!showMailBlock && (
          <div className={contactBlockMailsContainerStyles}>
            <div>
              <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px">
                ПО ОБЩИМ ВОПРОСАМ
              </Typography>
              <a href={`mail:${main_mail}`}>
                <Typography fontSize="title" lineHeight="title" fontWeight="medium">
                  {main_mail}
                </Typography>
              </a>
            </div>
            <div>
              <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px">
                ПО РАБОТЕ СО СМИ
              </Typography>
              <a href={`mail:${news_mail}`}>
                <Typography fontSize="title" lineHeight="title" fontWeight="medium">
                  {news_mail}
                </Typography>
              </a>
            </div>
            <div>
              <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px">
                КАРЬЕРА И ОБУЧЕНИЕ
              </Typography>
              <a href={`mail:${career_mail}`}>
                <Typography fontSize="title" lineHeight="title" fontWeight="medium">
                  {career_mail}
                </Typography>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ContactBlock);
