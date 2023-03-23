// libs
import React from "react";
import { NavLink } from "react-router-dom";
// data source
import { listSidebarItems } from "src/dataSources/Sidebar";
// styles
import styles from "./SideBar.module.scss";

const SideBar = () => (
  <aside className={styles["side-bar"]}>
    <ul className={styles["side-bar__items"]}>
      {listSidebarItems.map((item) => (
        <NavLink
          className={styles["side-bar__link"]}
          key={item.id}
          to={item.to}
        >
          <li>{item.title}</li>
        </NavLink>
      ))}
    </ul>
  </aside>
);

export default SideBar;
