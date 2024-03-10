import React from "react";
import Categories from "../categories/categories";
import FavouriteFoods from "../favouritefoods/favouritefoods";
import Hero from "../hero/hero";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <FavouriteFoods />
      <Categories />
    </div>
  );
};

export default Home;
