import React from "react";
import { Header } from "../Header/Header";
import { Food } from "../Food/Food";
import { Natural } from "../Natural/Natural";
import { We } from "../We/We";
import { Categories } from "../Categories/Categories";
import { Testimonial } from "../Testimonial/Testimonial";
import { Footer } from "../Footer/Footer";
import { Offer } from "../Offer/Offer";
import { Eco } from "../Eco/Eco";
import { Box } from "../Box/Box";
import { News } from "../News/News";

export const Home = () => {
  return (
    <>
      <Header />
      <Food />
      <Natural />
      <We />
      <Categories />
      <Testimonial />
      <Offer />
      <Eco />
      <Box />
      <News />
      <Footer />
    </>
  );
};
