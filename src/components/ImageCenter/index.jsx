// libs
import React from "react";
// styles
import styles from "./ImageCenter.module.scss";

const ImageCenter = ({ image }) => (
  <section className={styles["image-center"]}>
    <img
      className={styles["image-center__image"]}
      src={image.src}
      alt={image.alt}
      title={image.title}
      width={image.width}
      height={image.height}
    />
  </section>
);

export default ImageCenter;
