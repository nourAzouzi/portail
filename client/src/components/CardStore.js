import React from "react";
import "./CardStore.css";
import CardStoreItem from "./CardStoreItem";

function CardStore() {
  return (
    <div className="cards">
      <h1>Boutiques les mieux notées</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardStoreItem
              src="images/img1.png"
              text="Graiet Electromenager"
              label="Electromenager"
              path="/boutiques"
            />
            <CardStoreItem
              src="images/img2.png"
              text="Meublatex meubles"
              label="Meuble"
              path="/boutiques"
            />
          </ul>
          <ul className="cards__items">
            <CardStoreItem
              src="images/img3.png"
              text="Baity Cuisine"
              label="Cuisine"
              path="/boutiques"
            />
            <CardStoreItem
              src="images/img4.png"
              text="Strass Accessoires"
              label="Accessoires"
              path="/boutiques"
            />
            <CardStoreItem
              src="images/img5.png"
              text="Zen Vetements"
              label="Vetements"
              path="/boutiques"
            />
            <CardStoreItem
              src="images/img6.png"
              text="MyTek Multimedia"
              label="Multimedia"
              path="/boutiques"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardStore;
