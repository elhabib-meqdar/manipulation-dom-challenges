let btns = document.querySelectorAll(".btn")


btns.forEach((btn) =>{
btn.addEventListener("click", (e) =>{
    e.preventDefault()
    btn.textContent=("Cliqué!")

})

})