import React from "react";
import { Link } from "react-router-dom";

import Typography from "components/Typography";

import { PAGES } from "..";

import MenuIcon from "./MenuIcon";

import { menuContainerStyles, menuModalContainerStyles, menuModalItemStyles } from "./style.css";

function Menu() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleMenuToggle = React.useCallback(() => setModalVisible((value) => !value), []);

  return (
    <>
      <div className={menuContainerStyles} onClick={handleMenuToggle}>
        <MenuIcon />
      </div>
      {isModalVisible && (
        <div className={menuModalContainerStyles}>
          {PAGES.map(({ title, url }, index) => (
            <Link to={url} className={menuModalItemStyles} key={index}>
              <Typography fontWeight="medium" letterSpacing="1px">
                {title}
              </Typography>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default React.memo(Menu);
