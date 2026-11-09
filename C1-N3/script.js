const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};

const cardTitle =document.querySelector(".card-title")
const cardEmail =document.querySelector(".card-email")
const cardRole =document.querySelector(".card-role")

cardTitle.textContent=(user.nom)
cardEmail.textContent=(user.email)
cardRole.textContent=(user.role)