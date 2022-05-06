import React from "react";

import "./CardCategory.css";
import { BiFridge, BiBed, BiHomeHeart, BiHeartCircle } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function CardCategory() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div className="category__section">
          <div className="category__wrapper">
            <h1 className="category__heading">Nos catégories</h1>
            <div className="category__container">
              <Link to="/boutiques" className="category__container-card">
                <div className="category__container-cardInfo">
                  <div className="icon">
                    <BiFridge />
                  </div>
                  <h3>Electromenager</h3>
                  <h5>
                    Vous trouvez toutes les boutiques qui vendent des
                    réfrigérateurs, fours, micro-ondes, pc portable ...
                  </h5>
                </div>
              </Link>
              <Link to="/boutiques" className="category__container-card">
                <div className="category__container-cardInfo">
                  <div className="icon">
                    <BiBed />
                  </div>
                  <h3>Meuble</h3>
                  <p>
                    Une vaste séléction des boutiques de meuble comme meublatex,
                    baity, royal meuble ...
                  </p>
                </div>
              </Link>
              <Link to="/boutiques" className="category__container-card">
                <div className="category__container-cardInfo">
                  <div className="icon">
                    <BiHomeHeart />
                  </div>
                  <h3>Cuisine</h3>
                  <p>
                    Toutes les équipents de cuisine dont vous avez besoin, des
                    modéles les plus modernes, des equipement personnalisés ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="category__section">
          <div className="category__wrapper">
            <div className="category__container">
              <Link to="/boutiques" className="category__container-card">
                <div className="category__container-cardInfo">
                  <div className="icon">
                    <BiHeartCircle />
                  </div>
                  <h3>Accessoires</h3>
                  <p>
                    Decouvrez une séléction d'accessoires fabriqués en tunisie
                    ou importé, vous allez surement être fasciné ...
                  </p>
                </div>
              </Link>
              <Link to="/boutiques" className="category__container-card">
                <div className="category__container-cardInfo">
                  <div className="icon">
                    <FaTshirt />
                  </div>
                  <h3>Vetements</h3>
                  <p>
                    Des boutiques variés des vétements enfant, homme et femme
                    avec des choix multiples soit localement fabriqué ou importé
                    ...
                  </p>
                </div>
              </Link>
              <Link to="/boutiques" className="category__container-card">
                <div className="category__container-cardInfo">
                  <div className="icon">
                    <AiFillPlayCircle />
                  </div>
                  <h3>Multimedia</h3>
                  <p>
                    Pour les amateurs de technologies, nous vous présentons les
                    meilleurs boutiques de multimedia ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
export default CardCategory;
