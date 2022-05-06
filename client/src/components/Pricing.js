import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Abonnements</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Débutant</h3>
                <h4>99 DT</h4>
                <ul className="pricing__container-features">
                  <li>Annonce 1 mois</li>
                  <li>Paiement complet</li>
                  <li>màj non disponible</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Acheter
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Intermédiare</h3>
                <h4>199 DT</h4>
                <ul className="pricing__container-features">
                  <li>Annonce par semestre</li>
                  <li>Facilité de paiement 2 fois</li>
                  <li>2 màj disponibles</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Acheter
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Premium</h3>
                <h4>299 DT</h4>
                <ul className="pricing__container-features">
                  <li>Annonce pendant 1 an</li>
                  <li>25% resuction de paiement</li>
                  <li>màj continue</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Acheter
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
