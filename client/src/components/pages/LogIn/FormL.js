import React, { useState } from "react";
import "./Login.css";
import FormLogin from "./FormLogin";
import FormLoginSuccess from "./FormLoginSuccess";

const FormL = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <h1 className="h1-left">Déposer un avis</h1>
          <h4 className="h4-left">
            Contribuez à l'évolution de notre site web TerFer
            <br /> en notant vos avis concernant différents boutiques
            <br /> pour mieux les noter et pour garantir une éxpérience
            <br />
            d'utilisateur meilleure
          </h4>
          <img
            className="img-left"
            src="images/avis.jpg"
            alt="formulaire"
          ></img>
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormLoginSuccess />
        )}
      </div>
    </>
  );
};

export default FormL;
