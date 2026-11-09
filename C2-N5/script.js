let count = 0;

const increment=document.getElementById("increment")
const counter=document.getElementById("counter")

increment.addEventListener("click",() =>{
    count++
    counter.textContent=(count)

})