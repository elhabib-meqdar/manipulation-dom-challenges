const imageUrl ="/images/120624094607-remi-morel-ot-serre-poncon-1600x900-1742305866.jpg";


const image =document.getElementById("image-container")
const img =document.createElement("img")

img.setAttribute("src", imageUrl);
img.setAttribute("alt", "Montagne");
img.classList.add("rounded-img");
