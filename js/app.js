const bars = document.getElementById("bars");
const ul = document.getElementById("ul");
const xmark= document.getElementById("xmark");
bars.addEventListener("click",()=>{
    ul.classList.add("showUl");
    xmark.classList.add("showX");
})

xmark.addEventListener("click",()=>{
    ul.classList.remove("showUl");
    xmark.classList.remove("showX");
})