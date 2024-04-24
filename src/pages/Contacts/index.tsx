import React from "react";
import classnames from "classnames";
import { Helmet } from "react-helmet";

import Header from "components/Header";
import Footer from "components/Footer";
import Typography from "components/Typography";

import { mainContainerStyles } from "styles/main.css";
import { lightThemeStyles } from "styles/themes/lightTheme.css";

import ContactBlock from "./ContactBlock";

import { contactsContainerStyles, contactsTitleContainerStyles } from "./style.css";

function ContactsPage() {
  return (
    <div className={classnames(mainContainerStyles, lightThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#fff" />
        <title>ГОРПРОЕКТ - Контакты</title>
      </Helmet>
      <Header sticky />
      <div className={contactsContainerStyles}>
        <div className={contactsTitleContainerStyles}>
          <Typography fontSize="bold" lineHeight="bold" fontWeight="medium" letterSpacing="3px">
            КОНТАКТНАЯ ИНФОРМАЦИЯ
          </Typography>
        </div>
        <ContactBlock
          location="Офис в Москве"
          address="Россия, 105064, Москва, Нижний Сусальный переулок, д. 5, стр. 5А, 3 этаж, бизнес-квартал «Арма» (м. Курская)"
          first_phone="+7 (495) 909-39-39"
          second_phone="+7 (495) 775-75-65"
          src="/images/contacts_page/1.jpg"
          main_mail="info@gorproject.ru"
          news_mail="pr@gorproject.ru"
          career_mail="hr@gorproject.ru"
        />
        <ContactBlock
          location="Представительство в Петербурге"
          address='Россия, 190020, Санкт-Петербург Набережная Обводного канала, 199-201 деловой центр "Обводный двор"'
          first_phone="+7 (812) 324-98-80"
          second_phone="+7 (812) 324-98-81"
          src="/images/contacts_page/2.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(ContactsPage);
