const menuBtn=document.getElementById("menuBtn");

const navMenu=document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

window.addEventListener("scroll",()=>{

const header=document.getElementById("header");

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});