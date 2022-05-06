import React from "react";
import "./CardBlog.css";
import CardBlogItem from "./CardBlogItem";

function CardBlog() {
  return (
    <div className="cardsBlog">
      <h1>Les articles publiés concernant nos boutiques</h1>
      <div className="cardsBlog__container">
        <div className="cardsBlog__wrapper">
          <ul className="cardsBlog__items">
            <CardBlogItem
              src="images/blog1.png"
              text="Mosaique FM"
              label="Graiet Electromenager"
              description="Graiet Tunisie est une marque tunisienne, spécialisée dans la commercialisation et la distribution des appareils électroménagers"
              path="https://www.mosaiquefm.net/fr/"
            />
            <CardBlogItem
              src="images/blog2.png"
              text="Tuniscope"
              label="Meublatex"
              description="Meublatex est la marque de meuble grand public. Son point fort est sa capacité à offrir un rapport qualité prix séduisant."
              path="/blog"
            />
            <CardBlogItem
              src="images/blog3.png"
              text="Loozap"
              label="Strass"
              description="Strass accessoires est une enseigne tunisienne des accessoires de fantaisie . Fondée en 2010 depuis son lancement..."
              path="/blog"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
