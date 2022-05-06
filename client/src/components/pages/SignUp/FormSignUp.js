import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Devenir notre partenaire! Créer un compte en remplissant les champs
          ci-dessous.
        </h1>
        <div className="form-inputs">
          <label className="form-label">Nom boutique</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Entrer votre nom de boutique"
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
          <label className="form-label">Mot de passe</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Entrer votre mot de passe"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirmer mot de passe</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirmer mot de passe"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          S'inscrire
        </button>
        <span className="form-input-login">
          Vous possedez déja un compte ? Cliquer <a href="#">ici</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
