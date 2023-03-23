// libs
import React from "react";
// styles
import styles from "./ContentCenter.module.scss";

const ContentCenter = ({content}) => (
  <section className={styles["content-center"]}>
    <h3 className={styles["content-center__title"]}>{content.title}</h3>
    <p className={styles["content-center__paragraph"]}>
      {content.content}
    </p>
  </section>
);

export default ContentCenter;
