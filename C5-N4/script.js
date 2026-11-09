const password = document.getElementById("password");
 
password.addEventListener("input", () => {
  const Valid = password.value.length >= 8;
  password.classList.toggle("valid", Valid);
  password.classList.toggle("invalid", !Valid);
});