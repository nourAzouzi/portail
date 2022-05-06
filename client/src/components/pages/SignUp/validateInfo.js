export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "nom boutique requis";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email requis";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Adresse Email non valide";
  }
  if (!values.password) {
    errors.password = "Mot de passe requis";
  } else if (values.password.length < 6) {
    errors.password = "Le mot de passe doit contenir 6 caractéres ou plus";
  }

  if (!values.password2) {
    errors.password2 = "Mot de passe requis";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Mot de passe non conforme";
  }
  return errors;
}
