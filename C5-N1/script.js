const inputName = document.getElementById("name-input");
const btn = document.getElementById("validate-btn");
const output = document.getElementById("output");
 
btn.addEventListener("click", () => {
  output.textContent = inputName.value;
});