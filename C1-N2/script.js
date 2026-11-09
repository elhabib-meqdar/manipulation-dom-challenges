
const userName =document.getElementById("user-name")
const userEmaile =document.getElementById("user-email")
const userRole =document.getElementById("user-role")

const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
userName.textContent=(user.nom)
userEmaile.textContent=(user.email)
userRole.textContent=(user.role)