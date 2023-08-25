import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import { useTranslation } from "react-i18next";

const NavMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul
        className="d-flex justify-content-end"
        style={{ position: "relative", zIndex: "200" }}
      >
        {menu_data.map((menu_item, i) => (
          <li key={i} style={{ position: "relative", zIndex: "200" }}>
            <Link
              href={menu_item.link}
              style={{ position: "relative", zIndex: "200" }}
            >
              {t(menu_item.title)}
            </Link>
            {menu_item.has_dropdown && (
              <ul className="submenu" style={{ zIndex: "200" }}>
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i} style={{ position: "relative", zIndex: "200" }}>
                    <Link
                      href={sub_menu.link}
                      style={{ position: "relative", zIndex: "20" }}
                    >
                      {t(sub_menu.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
