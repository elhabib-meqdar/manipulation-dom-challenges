const btns = document.querySelectorAll(".menu li");

btns.forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
        btns.forEach((b) =>{
            b.classList.remove('active')
            btn.classList.add('active')
        })
    })
})