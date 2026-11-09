const notes = [12, 8, 15, 9, 18];
const grades =document.getElementById("grades")

notes.forEach((note) =>{
    const n=document.createElement("li")
    grades.append(n)
    n.textContent=(`${note} / 20`)
    if(note<10){
        n.classList.add("danger")
    }else{
        n.classList.add("success")

    }
})