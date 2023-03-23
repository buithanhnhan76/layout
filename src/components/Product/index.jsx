// libs
import React from "react";
// styles
import styles from "./Product.module.scss";

const Product = ({ product: { title, image, paragraph } }) => (
  <div className={styles["product"]}>
    <h2 className={styles["product__title"]}>{title}</h2>
    <div className={styles["product__content"]}>
      <img
        className={styles["product__image"]}
        src={image.src}
        title={image.title}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <p className={styles["product__paragraph"]}>{paragraph}</p>
    </div>
  </div>
);

export default Product;
