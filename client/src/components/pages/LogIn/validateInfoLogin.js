export default function validateInfoLogin(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "nom & prenom requis";
  }

  if (!values.email) {
    errors.email = "Email requis";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Adresse Email non valide";
  }
  if (!values.store.trim()) {
    errors.store = "nom boutique requis";
  }
  if (!values.avis.trim()) {
    errors.username = "avis requis";
  }

  return errors;
}
