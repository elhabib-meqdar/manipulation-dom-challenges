
let btn =document.getElementById("btn")

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    btn.textContent=("C'est cliqué !")
})