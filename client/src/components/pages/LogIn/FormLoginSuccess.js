import React from "react";
import "./Login.css";

const FormLoginSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">Nous avons bien reçu votre avis !</h1>
      <img
        className="form-img-2"
        src="images/img-success.svg"
        alt="success-image"
      />
    </div>
  );
};

export default FormLoginSuccess;
