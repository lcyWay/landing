import React from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";

import {
  headerActiveNavItemStyles,
  headerContainerStyles,
  headerNavContainerStyles,
  headerNavItemStyles,
  headerTitleStyles,
  stickyHeaderBackgroundStyles,
  stickyHeaderContainerStyles,
} from "./style.css";

export const PAGES = [
  { url: "/company/", title: "О КОМПАНИИ" },
  { url: "/projects/", title: "ПРОЕКТЫ" },
  { url: "/career/", title: "КАРЬЕРА" },
  { url: "/services/", title: "УСЛУГИ" },
  { url: "/news/", title: "НОВОСТИ" },
  { url: "/contacts/", title: "КОНТАКТЫ" },
];

interface HeaderInterface {
  sticky?: boolean;
}

function Header({ sticky }: HeaderInterface) {
  return (
    <div className={sticky ? stickyHeaderBackgroundStyles : ""}>
      <div className={sticky ? stickyHeaderContainerStyles : headerContainerStyles}>
        <Link to="/" className={headerTitleStyles}>
          ГОРПРОЕКТ
        </Link>
        <Menu />
        <div className={headerNavContainerStyles}>
          {PAGES.map((page, index) => {
            const active = window.location.pathname === page.url;
            return (
              <Link key={index} to={page.url} className={active ? headerActiveNavItemStyles : headerNavItemStyles}>
                {page.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
