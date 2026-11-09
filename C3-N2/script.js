
let btn =document.getElementById("toggle-btn")
let details =document.getElementById("details")

btn.addEventListener("click",() =>{
    if ( details.style.display == "none"){
        details.style.display = "block"
    }else{ details.style.display = "none"}
   
})
