// libs
import React from "react";
// data source
import { logoNCC, listProducts, introContent } from "src/dataSources/Home";
// children
import ImageCenter from "src/components/ImageCenter";
import ContentCenter from "src/components/ContentCenter";
import ListProducts from "src/components/ListProducts";

const Home = () => (
  <section>
    <ImageCenter image={logoNCC} />
    <ContentCenter content={introContent} />
    <ListProducts listProducts={listProducts} />
  </section>
);

export default Home;
