// libs
import React from "react";
// children
import SideBar from "src/components/SideBar";
import Footer from "src/components/Footer";
// styles
import styles from "./Main.module.scss";

const Main = ({ children }) => (
  <div className={styles.main}>
    <SideBar />
    <div className={styles["main__content"]}>
      {children}
      <Footer />
    </div>
  </div>
);
export default Main;
