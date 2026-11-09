const langages = ["JavaScript", "Python", "Rust", "Go", "TypeScript"];
let list =document.getElementById("list-container")

let ul = document.createElement("ul")
list.append(ul)

langages.forEach((lang) =>{
    let li = document.createElement("li")
    li.textContent=(lang)
    ul.append(li)
})