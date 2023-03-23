// libs
import React from "react";
// children
import Product from "../Product";
// styles
import styles from "./ListProducts.module.scss";

const ListProducts = ({ listProducts }) => (
  <section className={styles["list-products"]}>
    {listProducts.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </section>
);

export default ListProducts;
