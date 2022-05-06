import React from "react";
import HomeSection from "../../HomeSection";
import Cover from "../../Cover";
import { homeObjOne } from "./Data.js";
import Pricing from "../../Pricing";
import CardStore from "../../CardStore";
import CardCategory from "../../CardCategory";
import CardBlog from "../../CardBlog";
import Form from "../SignUp/Form";
import FormL from "../LogIn/FormL";

function Home() {
  return (
    <>
      <Cover />
      <HomeSection {...homeObjOne} />
      <CardCategory />
      <CardStore />
      <Pricing />
      <CardBlog />
      <FormL />
    </>
  );
}

export default Home;
