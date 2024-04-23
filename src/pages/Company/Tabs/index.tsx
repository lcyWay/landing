import React from "react";
import { Link } from "react-router-dom";

import { tabsActiveItemStyles, tabsBackgroundStyles, tabsContainerStyles, tabsItemStyles } from "./style.css";

export const TABS_LIST = [
  { id: "#about", name: "О КОМПАНИИ" },
  { id: "#partners", name: "ЗАКАЗЧИКИ" },
  { id: "#companies", name: "ГРУППА КОМПАНИЙ" },
  { id: "#facts", name: "ФАКТЫ" },
];

interface TabsInterface {
  currentTab: string;
}

function Tabs({ currentTab }: TabsInterface) {
  return (
    <div className={tabsBackgroundStyles}>
      <div className={tabsContainerStyles}>
        {TABS_LIST.map(({ id, name }) => {
          const isActive = id === currentTab;
          return (
            <Link key={id} to={`/company/${id}`} className={isActive ? tabsActiveItemStyles : tabsItemStyles}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Tabs);
