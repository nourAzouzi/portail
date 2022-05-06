import React from "react";
import validate from "./validateInfoLogin";
import useFormLogin from "./useFormLogin";
import "./Login.css";

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useFormLogin(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h2 className="h2-right">Contact</h2>

        <div className="form-inputs">
          <label className="form-label">Nom & prenom</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Entrer votre nom & prenom"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Adresse Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Entrer votre Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Boutique concernée</label>
          <input
            className="form-input"
            type="text"
            name="store"
            placeholder="Entrer le nom de la boutique"
            value={values.store}
            onChange={handleChange}
          />
          {errors.store && <p>{errors.store}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Avis</label>
          <input
            className="form-input"
            type="text"
            name="avis"
            placeholder="Ecrire votre avis"
            value={values.store}
            onChange={handleChange}
          />
          {errors.avis && <p>{errors.avis}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Deposer votre avis
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
