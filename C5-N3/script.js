const form = document.getElementById("signup-form");
 
form.addEventListener("submit", (e) => {
  e.preventDefault();
 
  const formData = {
    username: form.username.value,
    email: form.email.value,
  };
 
  console.log(formData);
});