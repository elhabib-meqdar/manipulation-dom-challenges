const input = document.getElementById("live-input");
const output = document.getElementById("live-output");
 
input.addEventListener("input", (e) => {
  output.textContent = e.target.value;
});