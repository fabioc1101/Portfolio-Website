//General 


const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});


//**************Footer ***********//
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//**************Menu ***********//

const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".navList");

menu.addEventListener("click", function(){
        menu.classList.toggle("bx-x");
        navList.classList.toggle("active");
}); 


window.addEventListener("scroll", function(){
    
        menu.classList.remove("bx-x");
        navList.classList.remove("active");
}); 


