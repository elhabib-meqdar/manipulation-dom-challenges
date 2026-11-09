let info =document.getElementById("info")
let colorBtn = document.querySelectorAll(".color-btn")


colorBtn.forEach((btn) =>{
    console.log(btn);
    btn.addEventListener("mouseenter", () =>{

        info.textContent=`Vous survolez la couleur ${btn.textContent}`
    })
})
